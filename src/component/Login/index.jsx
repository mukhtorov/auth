import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { Container } from './style'
import Form from '../Generic/Form'
import { auth } from '../../root/auth'


const Home = () => {

  const history = useHistory()
  const onSubmit = (value) => {
    axios.post('http://134.209.202.19/api/login', {
      login: value.login,
      pass: value.password
    })
      .then(function (res) {
        auth.login(() => {
          history.push('/home')
        })
        localStorage.setItem('token', res.data.user.status)
      })
      .catch(function (error) {
        alert("Check your login and password")
      });
  }
  return (
    <Container>
      <Form onSubmit={onSubmit} />
    </Container>
  )
}

export default Home