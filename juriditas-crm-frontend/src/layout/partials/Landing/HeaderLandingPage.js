import React from 'react'
import { Link } from 'react-router-dom'
import './HeaderLandingPage.css';

function  HeaderLandingPage () {
    return (
      <div className='container-box'>
        <div className='title'>Juriditas</div>
        <div className='menu-content'>
            <div>Partner</div>
            <div>Acerca</div>
            <div>Servicios</div>
        </div>
        <div className='auth-content'>
            <Link to='/login' className='login'>Ingresar</Link>
            <Link to='/register' className='register'>Registrar</Link>
        </div>
      </div>
    )
}

export default HeaderLandingPage
