import React, { useEffect } from "react"
import "./UserProfile.css"
import { connect } from "react-redux"
import { setMessageContacts, setContactTitle } from "../../../Redux/User/userActions"
import { Link } from "react-router-dom"
import { Button } from '@material-ui/core'
const DoctorProfile = ({ setMessageContacts, role, fetchId, contactArray, setContactTitle }) => {

    // console.log('id',fetchId)
    
    useEffect(() => {
        const pk = fetchId
        getDoctors({ pk })
    }, [fetchId]);


    const getDoctors = (obj) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        };
        if (role === "patient") {
            fetch('https://acrux-hospital.herokuapp.com/patient/details', requestOptions)
                .then(response => response.json())
                .then(data => {
                    setMessageContacts(data.doctors)
                    // this.setState({ results: data.doctors })
                })
        }
        if (role === "doctor") {
            fetch('https://acrux-hospital.herokuapp.com/doctor/details', requestOptions)
                .then(response => response.json())
                .then(data => {
                    setMessageContacts(data.patients)
                    // this.setState({ results: data.patients })
                })
        }
    }
    // console.log("contactArray", contactArray)
    const handleSetName = (contact) => {
        // console.log("fffffffffffffffff00", contact)
        setContactTitle(contact)
    }
    return (
        <div className="content__left">
            <div className="content__left__collection">
                {contactArray ?
                    contactArray.map((oneContact, id) => {
                        return (
                            <Link to={`/chat/${oneContact.doctorId || oneContact.patientId}`} key={id} onClick={(e) => handleSetName(oneContact.doctorName || oneContact.patientName)} >
                                <div className="image-div">
                                    <img className="chat-image" src={oneContact.image} alt="" />
                                    <p>{oneContact.doctorName || oneContact.patientName}</p>
                                </div>
                            </Link>
                        )
                    })
                    : <div></div>
                }
            </div>
            <div className="content__left__royal">
                {
                    (role === "doctor") ?
                        <div >
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "30px" }}>
                                <h4>Heart Disease Diagnosis</h4>
                                <Link to='/heart' style={{ textDecoration: 'none' }}>
                                    <Button variant="outlined" color="primary">Diagnosis Form</Button>
                                </Link>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "30px" }}>
                                <h4>Breast Cancer Diagnosis</h4>
                                <Link to='/cancer' style={{ textDecoration: 'none' }}>
                                    <Button variant="outlined" color="primary">Diagnosis Form</Button>
                                </Link>
                            </div>
                        </div>
                        :
                        <div></div>
                }
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setMessageContacts: array => dispatch(setMessageContacts(array)),
        setContactTitle: contact => dispatch(setContactTitle(contact)),

    }
}

const mapStateToProps = ({ user: { role, fetchId, contactArray } }) => {
    return {
        role,
        fetchId,
        contactArray

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DoctorProfile)