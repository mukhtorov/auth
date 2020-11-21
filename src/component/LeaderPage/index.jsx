import React from 'react'
import { Container, Wrapper } from './style'
const Home = ({ location: { pathname } }) => {
  return (
    <Container>
      <Wrapper>
        King Page => {pathname}
      </Wrapper>
    </Container>
  )
}

export default Home