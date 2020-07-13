import React from 'react'
import Post from '../../components/Post/Post'
import "./Home.css"
export default function Home() {
    return (
        <div className="homeLayout">
        <div className="postLayout">
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
