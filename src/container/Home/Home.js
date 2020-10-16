import React from 'react'
import Post from '../../components/Post/Post'
import "./Home.css"
import img1 from "../../photos/img1.jpg"
import img2 from "../../photos/img2.jpg"
import img3 from "../../photos/img3.jpg"
import img4 from "../../photos/img4.jpg"
import img5 from "../../photos/img5.jpg"
import img6 from "../../photos/img6.jpg"
import img7 from "../../photos/img7.jpg"
import img8 from "../../photos/img8.jpg"
import img9 from "../../photos/img9.jpg"
import profile from "../../photos/profile.png"

export default function Home() {
    return (
        <div className="homeLayout">
        <input type="text" className="searchButton" placeholder="Search..." />        
        <div className="postLayout">
        <Post image={img1} name={"Olivia Smith"}/>
        <Post image={img2} name={"William Jones"}/>
        <Post image={img3} name={"Liam Garcia"}/>
        <Post image={img4} name={"Logan Paul"}/>
        <Post image={profile} name={"Swan Htet"}/>
	<Post image={img5} name={"Mason Davis"}/>
        <Post image={img6} name={"Daniel Johnson"}/>
        <Post image={img7} name={"Ava Miller"}/>
        <Post image={img8} name={"Emma Lopez"}/>
        <Post image={img9} name={"Sophia Martinez"}/>

	</div>
        </div>
    )
}
