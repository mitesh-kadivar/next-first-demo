import React, { useState } from 'react'

export default function index() {

    const [comments, setComments] = useState([])
    const [comment, setComment] = useState('')

    // Get Route
    const loadComments = async () => {
        const response = await fetch('api/comments')
        const data = await response.json()
        setComments(data)
    }

    // Post Route
    const submitComment = async () => {
        const response = await fetch('api/comments', {
            method: 'POST',
            body: JSON.stringify({comment}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        console.log(data);
    }

    // Delete Route
    const deleteComment = async (commentId: any) => {
        const response = await fetch(`api/comments/${commentId}`, {
            method: 'DELETE',
        })
        const data = await response.json()
        console.log(data);
        loadComments()
    }

  return (
    <>
        <input type="text" value={comment} onChange={ (e) => setComment(e.target.value)} />
        <button onClick={submitComment}>Submit Comment</button>
        <button onClick={loadComments}>Load comments</button>
        {
            comments.map(comment => {
                return (
                    <div key={comment.id}> 
                        <h2>{comment.id} {comment.text}  <button onClick={() => deleteComment(comment.id)} >Delete</button> </h2>
                    </div>
                )
            })
        }
    </>
  )
}
