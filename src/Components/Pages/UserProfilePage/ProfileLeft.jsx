import React, { useState } from 'react';
import { connect } from "react-redux"
import { setCurrentUser, setUserImage } from "../../../Redux/User/userActions"

const ProfileLeft = ({ currentUser, email, image, role, patientId, doctorId, setUserImage }) => {

  // const [loading, setLoading] = useState(false)
  // console.log('profileImage', profileImage)

  const uploadImage = (e) => {
    const formData = new FormData()
    formData.append('file', e.target.files[0])
    formData.append('upload_preset', 'pqcz20rh')

    const requestOptions = {
      method: 'POST',
      body: formData
    };
    fetch('	https://api.cloudinary.com/v1_1/dzjchtsxn/image/upload', requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setUserImage(data.secure_url)
        if (role === 'patient') updateImage({ pk: patientId, image: data.secure_url })
        if (role === 'doctor') updateImage({ pk: doctorId, image: data.secure_url })

      });

  }

  const updateImage = (obj) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(obj)
    };
    if (role === 'patient') {
      fetch('https://acrux-hospital.herokuapp.com/patient/upload', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
    }
    if (role === 'doctor') {
      fetch('https://acrux-hospital.herokuapp.com/doctor/update', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
    }

  }



  return (
    <div className='user_details'>

      <div className='user_card'>
      <div className='user_image' style={{backgroundImage:`url(${image})`}}>
        </div>
        <div className='user_info'>
          <h6>{currentUser}</h6>
          <h6>{email}</h6>
        </div>
        <div className="user_upload">
          {/* <h4>Upload Your Image</h4> */}
          <input
            type="file"
            id="file"
            name="file"
            className='user_inputfile'
            onChange={uploadImage}
          />
          <label htmlFor="file">Change Profile Picture</label>
        </div>
      </div>
    </div>
  )

}
const mapStateToProps = ({ user: { currentUser, email, image, patientId, doctorId, role } }) => {
  return {
    currentUser,
    email,
    image,
    patientId,
    doctorId,
    role

  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: user => dispatch(setCurrentUser(user)),
    setUserImage: image => dispatch(setUserImage(image)),

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProfileLeft);
