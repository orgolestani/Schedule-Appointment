import "./Navbar.css";
import avatar from "../../assets/avatar.png";

import React from 'react'

function Navbar({sidebarOpen, openSidebar}) {
    return (
        <nav className="navbar">
        <div className="nav_icon" onClick={() => openSidebar()}>
            <i className="fa fa-bars"></i>
        </div>
        <div className="navbar__left">
            <a href="https://www.figma.com/file/mKzoI91JtjUTMFsl1MKWe2/HomePage?node-id=4%3A25">1</a>
            <a >2</a>
            <a className="active_link" >3</a>
        </div>

        <div className="navbar__right">
           
            <a>
                <img width="30" src={avatar} alt="avatar"/>
            </a>
        </div>
        </nav>
    )
}
export default Navbar;