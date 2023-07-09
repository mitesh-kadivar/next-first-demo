import Link from 'next/link'
import React from 'react'

export default function index( {posts} :any ) {
  return (
    <>
        <h1>List of posts</h1>
        {
            posts.map((post: any) => {
                return (
                    <div key={post.id}>
                        <Link href={`posts/${post.id}`}>
                            <h3>{post.id} - {post.title}</h3><hr />
                        </Link>
                    </div>
                )
            })
        }
    </>
  )
}

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

    return {
        props : {
            // posts: data
            posts: data.slice(0, 3)
        }
    }
}
