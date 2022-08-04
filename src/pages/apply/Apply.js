import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'

const Apply = () => {
  return (
    <div>
        <Navbar/>
        Apply
       
        <Link to='/' >go back</Link>
    </div>
  )
}

export default Apply