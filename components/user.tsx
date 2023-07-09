import React from 'react'

export default function user({user}: any) {
  return (
    <>
        <p>{user.name}</p>
        <p>{user.email}</p>
    </>
  )
}
