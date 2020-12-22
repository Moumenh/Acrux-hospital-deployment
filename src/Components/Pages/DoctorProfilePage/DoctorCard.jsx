import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const DoctorCard = ({ doctor, role }) => {
    return (
        <div className='doctor'>
            <div className='doctor__image' style={{ backgroundImage: `url(${doctor.image})` }}>

            </div>
            <div className='doctor__content'>
                <h4 className='content__title' style={{ width: '100%' }}> {doctor.name} </h4>
                {
                    (role === 'patient') && <Link to={`/appointment/${doctor.pk}`} style={{ textDecoration: 'none' }}>
                        <p className='doctor__app'>
                            Book an appoinment
                   </p>
                    </Link>
                }
            </div>
        </div>
    )
}

const mapStateToProps = ({ user: { role } }) => {
    return {
        role
    }
}


export default connect(mapStateToProps)(DoctorCard)