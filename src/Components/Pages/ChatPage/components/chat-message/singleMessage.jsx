import React from 'react';
import './Message.scss';
import { connect } from "react-redux"
const SingleMessage = ({ currentId, chatArray, reseiverId, message }) => {
    

    // console.log(message.image)
    
    const imageThumbnail = <img src={chatArray[reseiverId].image || "https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png"} alt="" />;
    const sender = message.senderId === currentId ? "you-message" : "other-message"
    return (
        <div className={`message-row ${sender}`}>
            <div className="message-content" >
                {sender === "you-message" ? <div></div> : imageThumbnail}
                <div className="message-text">
                    {message.text}
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = ({ user: { chatArray } }) => {
    return {
        chatArray
    }
}
export default connect(mapStateToProps)(SingleMessage);