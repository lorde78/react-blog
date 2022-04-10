import React from 'react'

const Article = ({postTitle, postContent, userName}) => {
    return (
        <>
        <div>
            <h2>{postTitle}</h2>
            <h3>{userName}</h3>
            <p>{postContent}</p>
        </div>
        </>
    )
}

export default Article