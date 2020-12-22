import DepOne from './departmentone'
import React from 'react'
import './depCard.css'

const CardsList = ({ departments }) => {

  const [images, setImages] = React.useState({
    "Nutrition Department": "https://shtheme.org/demosd/mecare/wp-content/uploads/2020/11/de-icon01.png",
    "ENT Department": "https://shtheme.org/demosd/mecare/wp-content/uploads/2020/11/de-icon03.png",
    "Orthopedic Surgery Department": "https://shtheme.org/demosd/mecare/wp-content/uploads/2020/11/pr-icon01.png",
    "Anesthesia and Recovery Department": "https://shtheme.org/demosd/mecare/wp-content/uploads/2020/11/sr-icon01.png",
    "Urology Department": "https://shtheme.org/demosd/mecare/wp-content/uploads/2020/11/cunt-icon03.png",
    "Cardiology Department": "https://shtheme.org/demosd/mecare/wp-content/uploads/2020/11/sr-icon03.png"
  })

  // console.log(departments)

  return (
    <div>
      <h1 className='content__title1'>Departments</h1>
      <div className="container">

        <div className="container_left">
          {
            departments.slice(0, 3).map((department, i) => (

              <DepOne key={i} department={department} image={images[department.title]} />
            ))
          }

        </div>
        <div className="container_right" style={{ marginLeft: '80px' }}>
          <img style={{ width: '100%', height: '480px' }} src="https://media.discordapp.net/attachments/769481992294236170/790258202981040138/unknown.png?width=479&height=467" alt="departments" />
        </div>
      </div>
      <div className="container" style={{ marginTop: "50px" }}>
        <div className="container_right" style={{ marginRight: '80px' }}>
          <img style={{ width: '100%', height: '480px' }} src="https://shtheme.org/demosd/mecare/wp-content/uploads/2020/11/ap-illustration.png" alt="departments" />
        </div>
        <div className="container_left">
          {
            departments.slice(3, departments.length - 1).map((department, i) => (

              <DepOne key={i} department={department} image={images[department.title]} />
            ))
          }

        </div>
      </div>
    </div>


  )
}

export default CardsList


