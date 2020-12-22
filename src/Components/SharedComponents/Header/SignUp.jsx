import React from 'react'
import { Button, TextField,Input  } from '@material-ui/core'

class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target

        this.setState({ [name]: value })
        // console.log(value)
    }


    
    signUpReq = (obj) => {
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        };
        fetch('http://localhost:8000/auth/users/', requestOptions)
            .then(response => response.json())
            .then(data => {
                // console.log(data)
               if(!data.id){
                   const alert1=data.email||data.password[1]
                   alert(alert1)
                }else{
                    
                    this.props.generateToken(this.state)
                    this.setState({ name: '',email: '',password: ''})
                }

            })
    }

    signUp = (e) => {
        e.preventDefault()
        this.signUpReq(this.state)
    }




    render() {

        const { name, email, password } = this.state
        return (

            <form className='login' onSubmit={this.signUp}>
                <TextField className='Input'
                    label='Username'
                    type='text'
                    name='name'
                    value={name}
                    onChange={this.handleChange}
                    required
                />
                <br />
                <TextField className='Input'
                    label='Email'
                    type='email'
                    name='email'
                    value={email}
                    onChange={this.handleChange}
                    required
                />
                <br />
                <TextField className='Input'
                    label='Password'
                    type='password'
                    name='password'
                    value={password}
                    onChange={this.handleChange}
                    required
                />

                <Button type='submit' className='dialog_button'  > Sign Up </Button>
                </form>

        )
    }
}


export default SignUp