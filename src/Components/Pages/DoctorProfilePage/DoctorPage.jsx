import React from 'react';
import './doctor.css'
import DoctorCard from './DoctorCard'
import { connect } from "react-redux"
import { setCurrentDoctor } from "../../../Redux/Doctor/doctorActions"


class DoctorPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }

    }
    componentDidMount() {
        this.getDoctors()
    }
    getDoctors = () => {
        fetch('http://localhost:8000/doctor/')
            .then(response => response.json())
            .then(doctor => {
                console.log("result", doctor)
                this.props.setCurrentDoctor(doctor)
                return doctor
            })
    }




    render() {
        const { currentDoctor } = this.props
        console.log(currentDoctor)


        return (
            <div className='home'>
                <div className='doctor_img'>
                <h1 className='content__title'>Our Staff</h1>
                </div>
                <div className='doctors'>
                    {
                        currentDoctor ? currentDoctor.map((doc, i) => <DoctorCard doctor={doc} key={i} />
                        ) : <div></div>
                    }
                </div>
            </div>
        );
    }
}


const mapStateToProps = ({ doctor: { currentDoctor } }) => {
    return {
        currentDoctor
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentDoctor: doctor => dispatch(setCurrentDoctor(doctor))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DoctorPage)