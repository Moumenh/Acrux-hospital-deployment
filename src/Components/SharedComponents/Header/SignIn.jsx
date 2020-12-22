import React from 'react'
import SignUp from './SignUp'
import { Button, TextField } from '@material-ui/core'
import { connect } from "react-redux"
import { setCurrentUser } from "../../../Redux/User/userActions"

class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            signedUp: true,
        }
    }

    loadUser = () => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'Authorization': localStorage.getItem("Authorization") },
        };
        return fetch('http://localhost:8000/auth/users/me', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log("ME", data)
                return data
            })

    }

    generateToken = (data) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };

        fetch('http://localhost:8000/auth/jwt/create', requestOptions)
            .then(response => response.json())
            .then(data => {
                // console.log("aaaaaaaaaaa", data)
                localStorage.setItem("Authorization", `JWT ${data.access}`)
                let loader = this.loadUser || this.props.loadUser
                // this.loadUser?
                // this.loadUser()
                // :this.props.loadUser()
                this.setState({email: '',password: ''})
                return loader()
            })
            .then((data) => {
                console.log("DISPATCH ME", data)
                if(data.code){
                    throw Error
                }
                this.props.setCurrentUser(data)
                window.location.reload()
            })
            .catch(() => alert('Invalid Credentials'))
    }

    signIn = (e) => {
        e.preventDefault()
        this.generateToken(this.state)
        // window.location.reload(false)
    }

    handleChange = (e) => {
        const { name, value } = e.target

        this.setState({ [name]: value })
        // console.log(value)
    }

    signUpStatus = (e) => {
        e.preventDefault()
        this.setState({ signedUp: !this.state.signedUp })
    }


    render() {
        // console.log(this.props)
        const { email, password, signedUp } = this.state
        return (
            <div>
                {
                    signedUp ?
                        <div style={{ display: 'flex', flexDirection: 'column' }} >
                            <form className='login' onSubmit={this.signIn} >
                                <TextField className='Input'
                                    label="Email"
                                    type='email'
                                    name='email'
                                    value={email}
                                    onChange={this.handleChange}
                                    required
                                />
                                <br />
                                <TextField className='Input'
                                    label="Password"
                                    type='password'
                                    name='password'
                                    value={password}
                                    onChange={this.handleChange}
                                    required
                                />
                                <Button type='submit' className='dialog_button' > Log In </Button>

                            </form>

                            <Button type='submit' className='dialog_button' onClick={this.signUpStatus} > Sign Up </Button>
                        </div> :
                        <SignUp signUpStatus={this.signUpStatus} generateToken={this.generateToken} />
                }

            </div>

        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentUser: user => dispatch(setCurrentUser(user))
    }
}

export default connect(null, mapDispatchToProps)(SignIn)