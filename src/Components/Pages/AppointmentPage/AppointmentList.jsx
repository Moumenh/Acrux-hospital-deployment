import React from 'react'

const AppointmentList = ({avHour}) => {
    // console.log(avHour)
    return (
        <div className='app_list'>
            {
                avHour.isAvailable ? 
                    <h4 className='available'> Available At {avHour.hour} </h4>
                    :
                    <h4 className='unavailable'> UnAvailable At {avHour.hour} </h4>
            }
        </div>
    )
}


export default AppointmentList