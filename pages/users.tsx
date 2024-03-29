import User from '@/components/user'
import React from 'react'

export default function user( {users} : any ) {
  return (
    <>
      <h1>List of users</h1>
      {
        users.map((user: any) => {
          return (
            <div key={user.id}>
              <User user={user} />
            </div>
          )
        })
      }
    </>
  )
}

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  console.log(data);
  return {
    props: {
      users: data
    }
  }
}