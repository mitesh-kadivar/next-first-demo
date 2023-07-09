import Link from 'next/link'
import React from 'react'

export default function index({projects}: any) {
  return (
    <>
    <h1>Projects List</h1>
    {
        projects.map((project: any)=> {
            return (
                <div key={project.id}>
                    <Link href={`projects/${project.id}`}>
                        <h3>{project.id} {project.title}  - ${project.price}</h3> <hr />
                    </Link>
                </div>
                )
        })
    }
    </>
  )
}

export async function getStaticProps() {
    console.log("Generating / Re generating Project Lists");
    const response = await fetch("http://localhost:4000/projects")
    const data = await response.json()

    return {
        props: {
            projects: data
        },
        revalidate: 15  // value in second
    }
}
