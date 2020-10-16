import React from 'react'
import './Card.css'
import profile from "../../photos/profile.png"
export default function Card(image) {
	console.log(image)
    return (
        <div className="Card">
        <img className="userPhoto" src={image.image}></img>
        <h2>My Name</h2>
        </div>
    )
}
