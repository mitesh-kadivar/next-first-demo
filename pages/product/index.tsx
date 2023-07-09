import React from 'react'
import Link from 'next/link'

function Productlist({productId = 100}) {
  return (
    <>
        <div>Product List</div>
        <hr />
        <h2><Link href='/product/1'>Product 1</Link></h2>
        <h2><Link href='/product/2'>Product 2</Link></h2>
        <h2><Link href='/product/3' replace>Product 3</Link></h2>
        <h2><Link href={`/product/${productId}`}>Product 100</Link></h2>
    </>
  )
}

export default Productlist
