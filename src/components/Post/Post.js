import React from 'react'
import "./Post.css"
import profile from "../../photos/profile.png"
export default function Post() {
    return (
        <div className="postContainer">
        <div className="post">
            <div className="imageContainer">
            <img className="profilePhotoInPost" src={profile}></img>
            <h3 className="userName">My Name</h3>
            </div>
            <p className="postContent">A paragraph is a series of related
             sentences developing a central idea, called the topic. 
             Try to think about paragraphs in terms of thematic unity: 
             a paragraph is a sentence or a group of sentences that supports 
             one central, unified idea. Paragraphs add one idea at a time to
              your broader argument.</p>
        </div>
        </div>
    )
}
