import React from 'react'
import { connect } from 'react-redux'

const AppointmentList = ({avHour,patientId}) => {
    console.log(patientId,avHour.patientId )
    return (
        <div className='app_list'>
            {
                avHour.isAvailable ? 
                    <h4 className='available'> Available At {avHour.hour} </h4>
                    :
                    <div>
                        <h4 className='unavailable'> Booked At {avHour.hour} </h4>
                        {
                            (patientId === avHour.patientId) ? <h5> For You ({ avHour.patientName }) </h5> : <h5>For Another User </h5>
                        }
                    </div>
                    
            }
        </div>
    )
}

const mapStateToProps = ( { user : { patientId } } ) => {
    return {
        patientId
    }
}


export default connect(mapStateToProps)(AppointmentList)