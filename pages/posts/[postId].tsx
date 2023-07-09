import React from 'react'
import { useRouter } from 'next/router'

export default function PostDetails({post}: any) {
  const router = useRouter()

  // -- Only when fallback true used
  if (router.isFallback) {
    return <h1>Loading...</h1>
  }
  // -- Only when fallback true

  return (
    <>
    <u><h1>Post Details</h1></u>
        <h2>
            {post.id} : {post.title}
        </h2>
        <p> {post.body} </p>
    </>
  )
}

export async function getStaticPaths() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

    // Getting all ids for pre rendering path for that HTML
    const paths = data.map((post: any)=> {
        return {
            params: { postId: `${post.id}` }
        }
    })

    return {
        paths : [
            {
                params: { postId: '1'}
            },
            {
                params: { postId: '2'}
            },
            {
                params: { postId: '3'}
            },
        ],

        // paths,
        fallback: true //false
    }
}

export async function getStaticProps(context:any) {
    const { params } = context
    const respose = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await respose.json()

    // -- Only when fallback true (It will redirect 404 page if page(path) not found)
    if (!data.id) {
        return {
            notFound: true
        }
    }
    console.log(`Generating post for /posts/${params.postId}`)
    // -- Only when fallback true

    return {
        props : {
            post : data
        }
    }
}