import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'

const Models = () => {
  return (
    <div>
        <Navbar/>
        <h1>Models</h1>
        <Link to='/' >go back</Link>
    </div>
  )
}

export default Models