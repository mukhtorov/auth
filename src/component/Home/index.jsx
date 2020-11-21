import React from 'react'
import { Container, Wrapper } from './style'
const Home = ({ location: { pathname } }) => {
  return (
    <Container>
      <Wrapper>
        Home Page
      </Wrapper>
    </Container>
  )
}

export default Home