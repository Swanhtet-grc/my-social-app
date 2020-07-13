import React from 'react'
import "./UploadContent.css"
export default function UploadContent() {
    return (
        <div className="UploadContent">
        <form className="contentInput">
        <textarea/>
        <input className="postUpload" type="submit" value="Post" />
      </form>
        </div>
    )
}
