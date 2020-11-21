import React from 'react'
import { Formik } from 'formik';
import * as yup from 'yup';
import { Container, ErrorText, Layout, Forget, Header, Wrapper } from './style'
import Input from '../Input'
import Button from '../Button'
import { Circle1, Circle2, Rectangular1, Rectangular2 } from '../Shapes'

const validationSchema = yup.object().shape({
  password: yup
    .string()
    .label('password')
    .required('Required'),

  login: yup
    .string()
    .required('Required')
    .label("login"),
});
const Form = ({ onSubmit }) => {
  return (
    <Wrapper>
      <Circle1 />
      <Circle2 />
      <Rectangular1 />
      <Rectangular2 />
      <Layout>
        <Header>
          Hello <br />
          Welcome Back
        </Header>
        <Formik
          initialValues={{ login: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              onSubmit && onSubmit(values)
              // alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
              <Container onSubmit={handleSubmit}>
                <Input
                  id="outlined-basic-3"
                  type="text"
                  size="large"
                  name="login"
                  label="Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.status}
                />
                <ErrorText>
                  {errors.login && touched.login && errors.login}
                </ErrorText>
                <Input
                  id="outlined-basic-2"
                  type="password"
                  name="password"
                  label="Password"
                  password
                  size="large"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <ErrorText>
                  {errors.password && touched.password && errors.password}
                </ErrorText>
                <Forget>Forget Password</Forget>
                <Button
                  block
                  title="LOGIN"
                  size="large"
                  type="submit"
                />
              </Container>
            )
          }
        </Formik >
      </Layout>
    </Wrapper>
  )
};

export default Form;
