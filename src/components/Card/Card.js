import React from 'react'
import './Card.css'
import profile from "../../photos/profile.png"
export default function Card(props) {
    return (
        <div className="Card">
        <img className="userPhoto" src={props.image}></img>
        <h2>{props.name}</h2>
        </div>
    )
}
