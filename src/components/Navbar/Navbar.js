import React from 'react'
import "./Navbar.css"
export default function Navbar() {
    return (
        <div>
        <nav className="navbar">
        <a href="/"><p className="siteName">My Social App</p></a>
        <a href="/upload"><p className="choices">New Post</p></a>
        <a href="/profile"><p className="choices">My Profile</p></a>
        </nav>
    </div>
    )
}
