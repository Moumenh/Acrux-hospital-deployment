import React, { useState, useEffect } from 'react'
import DatePicker from './DatePicker'
import { connect } from 'react-redux'
import { Select, MenuItem, Button, FormControl,InputLabel } from '@material-ui/core'
import AppointmentList from './AppointmentList'

import './Appointment.css'

const AppointmentPage = ({ match, patientId }) => {

    console.log('id patient', patientId)
    // const AvailableHours = [{isAvailable:true, hour:'9:00 AM'},{isAvailable:true, hour:'10:00 AM'}, {isAvailable:true, hour:'11:00 AM'}, {isAvailable:true, hour:'12:00 AM'}, {isAvailable:true, hour:'1:00 PM'}, {isAvailable:true, hour:'2:00 PM'},  ]
    
    const [date, setDate] = useState(null)
    const [hour, setHour] = useState('')
    const [dates, setDates] = useState([])
    const [avHour, setAvHour] = useState(null)
    const doctorId = match.params.id

    const hours = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 AM', '1:00 PM', '2:00 PM']
    

    const handleHours = (e) => setHour(e.target.value)

    const getDates = () => {
        fetch('http://localhost:8000/day/date')
            .then(response => response.json())
            .then(data => setDates(data))
    }

    const getHours = () => {
        if (date) {
            const obj = { pk: getDatePk() }
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(obj)
            };

            fetch('http://localhost:8000/day/date/details', requestOptions)
                .then(response => response.json())
                .then(data => {
                    // const unavHours = []
                    // data.Hour.forEach((obj) => unavHours.push(obj.hour))
                    
                    // console.log('hour', unavHours)
                    // avHour.forEach((hour) => {
                    //     if(unavHours.includes(hour.hour)){
                    //         hour.isAvailable = false
                    //         console.log(hour)
                    //     }
                    // })
                    if (data.Hour.length !== 0) {
                        setAvHour(data.Hour)
                    } else {
                        setAvHour(null)
                    }

                })
        }

    }

    const getDatePk = () => {
        let pk = null
        dates.forEach((Datadate) => {
            if (Datadate.date === date && Datadate.doctorId == doctorId) {
                console.log('getpk', Datadate)
                pk = Datadate.pk
            }
        })

        return pk
    }

    const bookAppoint = () => {
        const obj = { dayId: getDatePk(), hour, doctorId, patientId }
        console.log(obj)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        };

        fetch('http://localhost:8000/day/hour', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                getHours()
                if(data.non_field_errors){
                    throw Error
                }
            })
            .catch(() => alert(`You can't book in unavailable hours or twice in a day`))

    }

    useEffect(() => {
        getDates()
    }, [])



    console.log(dates)
    // console.log(date)
    console.log('doctorId', doctorId)
    return (
        <div className='appointment'>
            <div className='appointment__img'>
                <h1 className='content__title'>AppointmentPage</h1>
            </div>

            <div >
                <div className='app__book' >
                    <DatePicker setDate={setDate} getDates={getDates} doctorId={doctorId} setAvHour={setAvHour}  />
                    <FormControl style={{width:'22%'}}>
                    <InputLabel id="demo-simple-select-label">Select an hour</InputLabel>
                    <Select onClick={() => getHours()} onChange={handleHours} value={hour}  >
                        {
                            hours.map((hour, i) => <MenuItem key={i} value={hour} > {hour} </MenuItem>)
                        }
                    </Select>
                    </FormControl>
                    <Button
                        onClick={bookAppoint}
                        variant='contained'
                        
                    > Book </Button>
                </div>


                <div className='book_view'>
                    
                    {
                       avHour && avHour.map((Appointment, i) => <AppointmentList avHour={Appointment} key={i} />)
                            
                    }
                </div>
            </div>



        </div>
    )
}

const mapStateToProps = ({ user: { patientId } }) => {
    return {
        patientId
    }

}

export default connect(mapStateToProps)(AppointmentPage)