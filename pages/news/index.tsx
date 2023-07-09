import React from 'react'

export default function index({articles}: any) {
  return (
    <>
        <h1>News Articles List</h1>
        {
            articles.map((article: any) => {
                return (
                    <div key={article.id}>
                        <h3>{article.id} {article.title} | {article.category}</h3>
                    </div>
                )
            })
        }
    </>
  )
}

export async function getServerSideProps() {
    const response = await fetch("http://localhost:4000/news")
    const data = await response.json()

    console.log("Pre-rendering News articales");
    return {
        props: {
            articles: data
        }
    }
}