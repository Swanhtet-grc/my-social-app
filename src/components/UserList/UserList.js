import React from 'react'
import Card from '../Card/Card'
import "./UserList.css"
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

export default function UserList() {
    return (
        <div className="userListContainer">
        <div className="userList">
	<Card image={img1} name={"Olivia Smith"}/>
        <Card image={img2} name={"William Jones"}/>
        <Card image={img3} name={"Liam Garcia"}/>
        <Card image={img4} name={"Logan Paul"}/>
        <Card image={profile} name={"Swan Htet"}/>
        <Card image={img5} name={"Mason Davis"}/>
        <Card image={img6} name={"Daniel Johnson"}/>
        <Card image={img7} name={"Ava Miller"}/>
        <Card image={img8} name={"Emma Lopez"}/>
        <Card image={img9} name={"Sophia Martinez"}/>

	</div>
        </div>
    )
}
