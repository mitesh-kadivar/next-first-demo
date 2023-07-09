import React from 'react'
import { styled } from 'styled-components'

const Title = styled.h1`
    font-size: 50px,
    color: ${( {theme} ) => theme.colors.primary};
`

export default function cssInJs() {
  return (
    <>
    <Title>Style Compenent</Title>
    <div style={{color: 'red'}}>Hello World</div>
    </>
  )
}
