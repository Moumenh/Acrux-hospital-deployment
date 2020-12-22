import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core'
import { connect } from 'react-redux'

const UserForm = ({ id }) => {

    const [BloodType, setBloodType] = useState('')

    const postPatient = (e) => {
        e.preventDefault()

        const types = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']
        let valid = false
        types.forEach((type) => {
            if (BloodType === type) {
                valid = true
            }
        })
        if (valid) {
            const obj = {
                userId:id,
                BloodType,
                image:'https://i.imgur.com/I80W1Q0.png'
            }
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(obj)
            };

            fetch('https://acrux-hospital.herokuapp.com/patient/', requestOptions)
                .then(response => response.json())
                .then(data => window.location.reload())
        } else {
            alert('Please enter a valid blood type')
            setBloodType('')
        }

    }

    return (
        <div>
            <h1>Become A patient</h1>
            <form onSubmit={postPatient}  >
                <TextField className='Input'
                    label="Your Blood Type"
                    value={BloodType}
                    onChange={(e) => setBloodType(e.target.value)}
                    type='text'
                    name='BloodType'
                    required
                />
                <br />

                <Button variant='contained' color='primary' type='submit' className='dialog_button' > Submit </Button>

            </form>
        </div>
    )
}

const mapStateToProps = ({ user: { id } }) => {
    return {
        id
    }
}

export default connect(mapStateToProps)(UserForm)