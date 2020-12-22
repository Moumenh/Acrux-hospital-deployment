import React from 'react'
import RandomCard from './RandomCard'
import AboutUs from './AboutUs'
import Services from './Services'
import { Link } from 'react-router-dom'
import './HomePage.css'

const HomePage = ({ departments }) => {
    const random = (arr) => {
        let array = [...arr]
        let result = []
        for (let i = 0; i < 3; i++) {
            let index = Math.floor(Math.random() * array.length)
            result.push(array[index])
            array.splice(index, 1)
        }
        return result
    }

    const res = random(departments)
    return (
        <div className='homepage'>
            <div className='homepage__picture'></div>
            <Link to='/about' className='homepage__text' style={{ textDecoration: "none" }}><h1 style={{ textDecoration: 'none', color: 'white' }} >Welcome To Our Hospital</h1></Link>
            <AboutUs />
            <div style={{ width:'100%' }}>
                <Services />
            </div>

            <h2 className='content__title' style={{ marginTop: '100px' }}>We Take Care Of Your Life Healthy Health</h2>
            <div className='random'>
                {
                    res[0] ?
                        res.map((department, i) => <RandomCard key={i} department={department} />) :
                        <div></div>
                }
            </div>



        </div>
    )
}

export default HomePage