import React from 'react'
import { Formik } from 'formik';
import * as yup from 'yup';
import { Container, ErrorText, ButtonsGroup, Header, Wrapper, Button, Input } from './style'



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
      <Header>Login Form</Header>
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
                name="login"
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
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <ErrorText>
                {errors.password && touched.password && errors.password}
              </ErrorText>
              <ButtonsGroup>
                <Button>Login</Button>
              </ButtonsGroup>

            </Container>
          )
        }
      </Formik >
    </Wrapper>
  )
};

export default Form;
