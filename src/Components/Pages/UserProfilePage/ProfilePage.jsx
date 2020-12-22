import React from 'react'
import { connect } from "react-redux"
import PatientProfile from "./PateintProfile"
import DoctorProfile from "./DoctorProfile"
import UserProfile from "./UserProfile"
import ProfileLeft from "./ProfileLeft.jsx"
import RightImage from "./RightImage.jsx"
import Details from "./Details.jsx"
import UserForm from './UserForm'
import { setChatArray } from "../../../Redux/User/userActions"
import PatientsDetails from './PatientsDetails'
import "./UserProfile.css"
class UsersProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentDidMount = () => {
        console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk")
        fetch('http://localhost:8000/user/')
            .then(response => response.json())
            .then(data => {
                let resultObject = {}
                data.map(element => {
                    if (element.patient) {
                        resultObject[element.patient.userId] = {
                            image: element.patient.image,
                            name: element.name
                        }
                    } else if (element.doctor) {
                        resultObject[element.doctor.doctor] = {
                            image: element.doctor.image,
                            name: element.name
                        }
                    }

                })
                this.props.setChatArray(resultObject)
                // console.log("result ARRAY",res)
            })
    }
    render() {
        const { role, currentUser } = this.props
        return (

            <div>
                {
                    currentUser ?
                        <div className="profile">
                            <div className="profile__left">
                                {
                                    (role === "user") ? <UserForm /> : <ProfileLeft />
                                }
                            </div>
                            <div className="profile__right">

                                <RightImage />

                                <div className="right__content">
                                    {
                                        (role === "patient") ?
                                            <DoctorProfile />
                                            : (role === "doctor") ?
                                                <DoctorProfile />
                                                : <UserProfile />
                                    }
                                    <div className="content__right">
                                        {
                                            (role === "doctor") ? <Details /> : <PatientsDetails />
                                        }

                                    </div>
                                </div>
                            </div>
                        </div>
                        : <div>LOGIN FIRST</div>
                }
            </div>
        )
    }
}

const mapStateToProps = ({ user: { role, currentUser } }) => {
    return {
        role,
        currentUser
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setChatArray: array => dispatch(setChatArray(array))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersProfile);
