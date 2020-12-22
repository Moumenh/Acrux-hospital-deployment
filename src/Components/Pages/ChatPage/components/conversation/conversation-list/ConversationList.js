import React from 'react';

import ConversationItem from '../conversation-item/ConversationItem';
import './ConversationList.scss';
import { Link } from "react-router-dom"
import { connect } from 'react-redux';
import { setLastTextObject } from "../../../../../../Redux/User/userActions"

const ConversationList = ({ results, handleSetName, setLastTextObject, lastTextObject }) => {

    // React.useEffect(() => {
    //     let counter = 0
    //     for (let key in lastTextObject) {
    //         counter++
    //     }
    //     if (counter > 1) {
    //         setTimeout(async () => {
    //             await setLastTextObject(lastTextObject)
    //         }, 1000)
    //     }
    // }, [])
    return (
        <div id="conversation-list">
            {
                results ?
                    results.map((result, id) => {
                        console.log("result", result)
                        return (
                            <Link to={`/chat/${result.doctorId || result.patientId}`} key={id} style={{ textDecoration: "none" }} onClick={() => handleSetName(result.doctorName || result.patientName, result.doctorId || result.patientId)} >
                                <ConversationItem recieverId={result.doctorId || result.patientId} image={result.image} name={result.doctorName || result.patientName} />
                            </Link>)
                    })
                    : <div></div>
            }

        </div>
    );
}
const mapDispatchToProps = dispatch => {
    return {
        setLastTextObject: obj => dispatch(setLastTextObject(obj))
    }
}
const mapStateToProps = ({ user: { lastTextObject } }) => {
    return {
        lastTextObject
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ConversationList);