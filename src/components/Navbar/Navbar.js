import React from 'react';
import './Navbar.css';
import { NavLink,Link  } from 'react-router-dom';

export default function Navbar(props) {

    return (
        <>
            <header>
                <nav className="navbar">
                    <div className="container-fluid">
                        <Link to="/" className="navbar-brand">BookNest</Link>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink  to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
                            </li>  
                            <li className="nav-item">
                                <NavLink  to="/addbook" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Add Book</NavLink>
                            </li>                          
                        </ul>                        
                    </div>
                </nav>
            </header>  
        </>
    )
}
