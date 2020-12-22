import React from 'react';
import {connect} from "react-redux"

import ConversationSearch from './components/conversation/conversation-search/ConversationSearch';
import ConversationList from './components/conversation/conversation-list/ConversationList';
import NewConversation from './components/conversation/new-conversation/NewConversation';
import ChatTitle from './components/chat-title/ChatTitle';
import ChatForm from './components/chat-form/ChatForm';
import ChatMessage from "./components/chat-message/ChatMessgae.jsx"
import {setMessageContacts} from "../../../Redux/User/userActions"
import './ChatShell.scss';

class ChatShell extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            results: [],
            name:"",
            
        }
    }
    componentDidMount=()=> {
        const pk = this.props.fetchId
        console.log("gggggggggggggggggggggggggggggggggggggg",this.props)
        this.getDoctors({pk})
           

    }
    getDoctors(obj) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        };
       if(this.props.role==="patient"){
        fetch('https://acrux-hospital.herokuapp.com/patient/details',requestOptions)
            .then(response => response.json())
            .then(data => {
                this.props.setMessageContacts(data.doctors)
                this.setState({ results: data.doctors })
                console.log("gggggggggggggggggggggggggggggggggggggg",data.doctors)
            })
       }
       if(this.props.role==="doctor"){
        fetch('https://acrux-hospital.herokuapp.com/doctor/details',requestOptions)
            .then(response => response.json())
            .then(data => {
                this.props.setMessageContacts(data.patients)
                this.setState({ results: data.patients })
            })
       }
        
            
    }
    handleSetName=(name)=>{
        this.setState({name})
    }
    render() {
        console.log("this.state",this.state)
        return (
            <div id="rootme">
                <div id="chat-container">
                    <ConversationSearch />
                    <ConversationList results={this.state.results} handleSetName={this.handleSetName} />
                    <ChatMessage />
                    <NewConversation />
                    <ChatTitle name={this.state.name}/>
                    <ChatForm  />
                </div>
            </div>
        );

    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        setMessageContacts: array => dispatch(setMessageContacts(array)),  
    }
  }

const mapStateToProps=({user:{role,fetchId}})=>{
    return {
        role,
        fetchId

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ChatShell);