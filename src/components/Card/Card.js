import React from 'react'
import './Card.css'
import profile from "../../photos/profile.png"
export default function Card() {
    return (
        <div className="Card">
        <img className="userPhoto" src={profile}></img>
        <h2>My Name</h2>
        </div>
    )
}
