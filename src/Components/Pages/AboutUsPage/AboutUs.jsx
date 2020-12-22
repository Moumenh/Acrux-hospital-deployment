import React from 'react'
import './About.css'

class AboutUs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div>
                 <div className='about_picture'></div>
                    
                <div className='about'>
                   
                    <div className='about__avatar'>

                    </div>

                    <div className='about__content'>
                        <h2 className='content__title'>We Are Specialize in Medical Diagnositics</h2>
                        <p className='content__desc'>
                            Acrux is a website that enables users to know
                            the departments and doctors in the hospital,
                            enables the patient to book an appointment
                            with the doctor and communicate with him.
                </p>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />

                <div className='team'>
                    <span>TESTIMONIALS</span>
                    <p>What Our Client’s Say’s</p>
                    <br />
                    <br />
                    <br />
                    <div className='user_details'>
                        <img src="https://shtheme.org/demosd/mecare/wp-content/uploads/2020/11/testimonial-img.png" />
                        <div className='user_detail'>
                            <h3>Adam Mcwilliams</h3>
                            <h5 >CEO & Founder</h5>
                        </div>
                        <br />
                        <div>
                            <p>Welcome to our website through it you can see our departments and doctors ,the patient can book an appointment and chat  with him directly through his account.</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }


}


export default AboutUs

