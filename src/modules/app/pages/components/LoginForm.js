import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'

const LoginForm = ( props ) => {

  // const handleSubmit = ( formData ) = {
  // const handleSubmit = (  ) => {
  //
  // }

  return (
    <div>
      <h1>Login form</h1>
      <Formik initialValues = {{
        name: '',
        secondName: '',
        email: '',
        login: '',
        password: '',
        confirmPassword: '',
      }}
      validateOnBlur
      onSubmit = {( values ) => { console.log(values) }}>
      {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => {
        return (
          <div>
            <p><label htmlFor = 'name'>Name</label></p>
            <p><input type = 'text' name = 'name' onChange = { handleChange } onBlur = { handleBlur } value = { values.name } /></p>
            <p><button disabled = { !isValid && !dirty } onClick = { handleSubmit } type = 'submit' >Ok</button></p>
          </div>
        )}}
      </Formik>
    </div>
  )
}


// Предположительные данные новой пандемии обезьяньей оспы:
// 15 мая - 5 июня 2022 небольшая необычная вспышка обезьяньей оспы (1421 случай заражения и 4 смертельно)
// 10 января 2023 (83 страны с вирусом, 70 миллионов заболевших, более 1,3 миллионов умерло)
// 10 мая 2023 года (более 480 миллионов случаев заражения, 27 миллионов погибших от обезьяней оспы в мире)
// 1 декабря 2023 года 3,2 миллиарда заражений, 271 миллион смертей от этой новой заразы...
//
// Хорошего Вам настроения )

// <form onSubmit = { handleSubmit }>
//   <div><Field name="login" component="input" type="text" placeholder="login" /></div>
//   <div><Field name="password" component="input" type="password" placeholder="password" /></div>
//   <div><Field name="remember" component="input" type="checkbox" /> remember me</div>
//   <div><button>Ok</button></div>
// </form>

// export default reduxForm( { form: 'login' } )( LoginForm )
export default LoginForm



// РАБОЧИЙ КОД НА АПРЕЛЬ 2022
//  Formik, канал Codevolution, также посмотреть Димыча  видео номер 13 с Путь Самурая 2.0
// https://www.youtube.com/watch?v=K6f8GAhLGKA&list=PL8zashR68iUcVCSeyqRdX5Y8WV-MbT0MH

// import React from 'react';
// import {Formik, Form, Field, ErrorMessage} from "formik";
// import * as Yup from "yup";
//
//
// const validateLoginForm = values => {
//    const errors = {};
//    if (!values.email) {
//       errors.email = 'Required 1';
//    } else if (
//       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test( values.email )
//    ) {
//       errors.email = 'Invalid email address';
//    }
//    return errors;
// };
//
// const validationSchemaLoginForm = Yup.object().shape( {
//
//    password: Yup.string()
//       .min( 2, "Must be longer than 2 characters" )
//       .max( 5, "Must be shorter than 5 characters" )
//       .required( "Required 2" )
// } );
//
//
// const Login = () => {
//
//    return (
//       <div>
//          <h2> ... Login 555 </h2>
//
//          <Formik
//             initialValues={{
//                email: "",
//                password: "",
//                rememberMe: false
//             }}
//             validate={validateLoginForm}
//             validationSchema={validationSchemaLoginForm}
//             onSubmit={(values) => {
//                console.log( values )
//             }}
//          >
//             {() => (
//                <Form>
//                   <div>
//                      <Field
//                         name={'email'}
//                         type={'text'}
//                         placeholder={'e-mail'} />
//                   </div>
//                   <ErrorMessage name="email" component="div" />
//
//                   <div>
//                      <Field
//                         name={'password'}
//                         type={'password'}
//                         placeholder={'password'} />
//                   </div>
//                   <ErrorMessage name="password" component="div" />
//
//                   <div>
//                      <Field
//                         type={'checkbox'}
//                         name={'rememberMe'}
//                         id='rememberMe' />
//                      <label htmlFor={'rememberMe'}> remember me </label>
//                   </div>
//
//                   <button type={'submit'}>Login</button>
//                </Form>
//             )}
//          </Formik>
//
//          <div>
//             ...
//          </div>
//
//       </div>
//    )
// }
//
// export default Login;
