import React from 'react'
import Post from '../../components/Post/Post'
import "./Home.css"
export default function Home() {
    return (
        <div className="homeLayout">
        <input type="text" className="searchButton" placeholder="Search..." />        
        <div className="postLayout">
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        </div>
        </div>
    )
}
