import React from 'react'
import DoctorCard from '../DoctorProfilePage/DoctorCard'

class DepartmentDoctor extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            result: []
        }
    }

    componentDidMount() {
        // console.log("d",this.props)
        const departmentId = this.props.match.params.id
        this.getDoctors({pk : departmentId})
    }

    getDoctors(obj) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        };
        fetch('https://acrux-hospital.herokuapp.com/department/details', requestOptions)
            .then(response => response.json())
            .then(data => {
                this.setState({ result: data.doctors})
            })
    }

    render() {
        const {result} = this.state
        return (
            <div className='home'>
                <div className='doctors'>
                {
                    result? result.map( (res , i) => <DoctorCard doctor={res} key={i} /> ):<div></div>
                }
                </div>
            </div>
        )
    }


}


export default DepartmentDoctor

