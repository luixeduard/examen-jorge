import React from 'react'
import { BrowserRouter, Router, Route, Link, browserHistory, IndexRoute, Routes, useNavigate } from "react-router";

export default function Nav_Bar() {
    return (
        <ul>
            <li><Link to="/">Login</Link></li>
            <li><Link to='/Welcome'>Inicio</Link></li>
            <li><Link to="/Crud usuarios">Usuarios</Link></li>
            <li><Link to="/Crud libros">Libros</Link></li>
            <li><Link to="/Crud clasificaciones">Clasificaciones</Link></li>
            <li><Link to="/Crud autores"> Autores</Link></li>
            <li><Link to='/Crud lenguajes'>Lenguajes</Link></li>
            <li><Link to='/Crud editoriales'>Editoriales</Link></li>
        </ul>
    )
}
