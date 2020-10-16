import React from 'react'
import "./Profile.css"
import js from "../../photos/js.png"
import profile from "../../photos/profile.png"
import Post from '../Post/Post'
export default function Profile() {
    return (   
        <div className="middleContainer">
        <div className="containerWidth">
        <div className="profileLayout">
            <img className="coverPhoto" src={js}></img>
            <img className="profilePhoto" src={profile}></img>
        </div>
        <h2 className="userNameInProfile">Swan Htet</h2>
        <p>Software Engineer | Full-Stack Developer</p>
        <Post image={profile} name={"Swan Htet"}/>
        <Post image={profile} name={"Swan Htet"}/>
        <Post image={profile} name={"Swan Htet"}/>
        <Post image={profile} name={"Swan Htet"}/>
        <Post image={profile} name={"Swan Htet"}/>
        <Post image={profile} name={"Swan Htet"}/>
        <Post image={profile} name={"Swan Htet"}/>
        <Post image={profile} name={"Swan Htet"}/>
        <Post image={profile} name={"Swan Htet"}/>
        <Post image={profile} name={"Swan Htet"}/>
        <Post image={profile} name={"Swan Htet"}/>

        </div>
        </div>
    )
}
