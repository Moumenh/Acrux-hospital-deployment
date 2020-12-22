import React from 'react';
import { connect } from "react-redux"
import { setLastTextObject } from "../../../../../../Redux/User/userActions"
import './ConversationItem.scss';

const ConversationItem = ({ name, image, lastTextObject, recieverId, setLastTextObject }) => {

    // React.useEffect(()=>{

    // setTimeout(()=>{
    //     setLastTextObject(lastTextObject)
    // },1000)
    // },[])
    return (
        <div className='conversation' >
            <img src={image} alt="" />
            <div className="title-text">{name}</div>
            {/* <div className="conversation-message">
               {lastTextObject[recieverId]&&lastTextObject[recieverId]}
            </div> */}
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
export default connect(mapStateToProps, mapDispatchToProps)(ConversationItem);