import React from 'react'
import { Link } from 'react-router-dom'
import Floatnav from '../../components/floatnav/Floatnav'
import Navbar from '../../components/navbar/Navbar'
import './models.scss'

const Models = () => {
  return (
    <div className='model' >
        <Navbar/>
        <div>
          <Floatnav/>
        </div>
        {/* <h1>Models</h1> */}
        {/* <Link to='/' >go back</Link> */}
    </div>
  )
}

export default Models