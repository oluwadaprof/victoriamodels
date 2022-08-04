import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar';

function About (){
    return (
        <div>
            <Navbar/>
            <h1>About</h1>
            <Link to='/' >go back</Link>
        </div>
    )
}

export default About;