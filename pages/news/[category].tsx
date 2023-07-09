import React from 'react'

export default function Category({articles, category}: any) {
  return (
    <>
        <h1>Showing News articles for category <i>{category}</i></h1>
        {/* {
            console.log(articles)
        } */}
        {
            articles.map((article:any) => {
                return (
                    <div key={article.id}>
                        <h2>{article.id} {article.title}</h2>
                        <p>{article.description}</p>
                        <hr />
                    </div>
                )
            })
        }
    </>
  )
}

export async function getServerSideProps(context: any) {
    const { params } = context
    const { category } = params

    const response = await fetch(`http://localhost:4000/news?category=${category}`)
    const data = await response.json()

    // console.log(data);
    console.log(`Pre-rendering News articale for category ${category}`);

    return {
        props: {
            articles: data,
            category
        }
    }
}
