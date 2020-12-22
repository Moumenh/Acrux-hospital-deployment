import React, { useState, useEffect } from "react"
import { connect } from 'react-redux'
import PatientsCard from './PatientsCard'


const Details = ({ doctorId }) => {
    console.log(doctorId)
    const [patients, setPatients] = useState([])
    console.log(patients)

    const getAppointments = () => {
        // console.log('called')
        const obj = { doctorId }
        console.log(obj)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        };

        fetch('http://localhost:8000/day/date/doctor', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log('patients', data)
                setPatients(data)
            })
    }

    useEffect(() => {
        getAppointments()
    }, [])



    return (
        <div style={{ padding: '20px' }}>
            <h5> Patients Requests  </h5>
            <div >
                {
                    patients && patients.map((patient, i) => <PatientsCard key={i} patient={patient} getAppointments={getAppointments} />)
                }
            </div>
        </div>

    )


}

const mapStateToProps = ({ user: { doctorId } }) => {
    return {
        doctorId
    }
}

export default connect(mapStateToProps)(Details)