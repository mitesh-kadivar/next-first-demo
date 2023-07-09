import React from 'react'
import { useRouter } from 'next/router'

export default function Project({project}: any) {

    const router = useRouter();
    if (router.isFallback) {
        return <h1>Loading...</h1>
    }

  return (
    <>
        <div>Project Details Page</div>
        <h2>{project.id}  {project.title} ${project.price}</h2>
        <p>{project.description}</p>
    </>
  )
}

export async function getStaticPaths() {
    return {
        paths: [
            { 
                params: { projectId: '1'} 
            }
        ],
        fallback: true
    }
}

export async function getStaticProps(context:any) {
    const { params } = context
    console.log(`Generating / Re generating Project - ${params.projectId}`);
    const response = await fetch(`http://localhost:4000/projects/${params.projectId}`)
    const data = await response.json()

    return {
        props: {
            project: data
        },
        revalidate: 20
    }
}
