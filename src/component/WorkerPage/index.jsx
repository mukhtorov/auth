import React from 'react'
import { Container, Wrapper } from './style'
const Home = ({ location: { pathname } }) => {
  return (
    <Container>
      <Wrapper>
        Worker Page => {pathname}
      </Wrapper>
    </Container>
  )
}

export default Home