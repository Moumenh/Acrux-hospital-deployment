import React, { useRef, useEffect } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { firestore } from "../../../../../firebase/firebase.utils"
import { connect } from "react-redux"
import './Message.scss';
import SingleMessage from "./singleMessage"
import { withRouter } from 'react-router-dom';
import { setLastTextObject } from "../../../../../Redux/User/userActions"
const ChatMessage = (props) => {
    let collectionLink = `messages/${props.fetchId}/${props.match.params.id}`// logged in as patient
    console.log("collectionLink", props.match.params.id)

    if (props.role === "doctor") {
        collectionLink = `messages/${props.match.params.id}/${props.fetchId}`
        // console.log("collectionLink", collectionLink)
    }
    const dummy = useRef();
    const messagesRef = firestore.collection(collectionLink);
    const query = messagesRef.orderBy('createdAt')

    const [messages] = useCollectionData(query, { idField: 'id' });

    useEffect(async () => {
        if (props.role === "doctor") {
            let obj = {}
            await props.contactArray.map(async (element) => {
                // console.log('el', element)
                let collectionLinks = `messages/${element.patientId}/${props.fetchId}`
                await firestore.collection(collectionLinks).orderBy('createdAt').get().then(data => {
                    if (data.docs[data.docs.length - 1]) {
                        obj[element.patientId] = data.docs[data.docs.length - 1].data().text
                        // console.log("ssssssssssssssssssss", data.docs[data.docs.length - 1].data().text)
                    }
                })
                props.setLastTextObject(obj)
            })
        } else {
            let obj = {}
            await props.contactArray.map(async (element) => {
                let collectionLinks = `messages/${props.fetchId}/${element.doctorId}`
                await firestore.collection(collectionLinks).orderBy('createdAt').get().then(data => {
                    if (data.docs[data.docs.length - 1]) {
                        obj[element.doctorId] = data.docs[data.docs.length - 1].data().text
                        // console.log("ssssssssssssssssssss", data.docs[data.docs.length - 1].data().text)
                    }
                })
                props.setLastTextObject(obj)
            })
        }
    }, [])
    return (
        <div id="chat-message-list">
            {/* <div className='message-row other-message'> */}
            {messages && messages.reverse().map(msg => <SingleMessage key={msg.id} reseiverId={props.match.params.id} message={msg} currentId={props.fetchId} />)}
            <span ref={dummy}></span>
        </div>
        //  </div>
    );
}
const mapDispatchToProps = dispatch => {
    return {
        setLastTextObject: obj => dispatch(setLastTextObject(obj))
    }
}

const mapStateToProps = ({ user: { role, fetchId, contactArray, lastTextObject } }) => {
    return {
        role,
        fetchId,
        contactArray,
        lastTextObject
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChatMessage));
