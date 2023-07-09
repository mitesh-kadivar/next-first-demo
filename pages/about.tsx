import React from 'react'
import Link from 'next/link'

export default function about() {
  return (
    <>
    <h2>about</h2>
    <div>
      <Link href='/blog'>
      Blog Page
      </Link>
    </div>
    </>
  )
}
