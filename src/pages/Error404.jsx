import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Error404 = () => {
    let location = useLocation();
    return (
        <div className='d-flex '>
            <h1>Error404</h1>
            <p>
                No se encontró la ruta: <code>{location.pathname}</code>
            </p>
            <Link to="/">Regresar al dashboard</Link>
        </div>
    )
}

export default Error404