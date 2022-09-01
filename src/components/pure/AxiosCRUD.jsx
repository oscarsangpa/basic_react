import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import {login, getAllUsers, getAllPagedUsers, getUserById, createUser, deleteUserByID, updateUserbyID } from '../../services/axiosService';

const loginSchema = Yup.object().shape(
  {
    email: Yup.string()
                .email("Invalid email format")
                .required("Email is required"),

    password: Yup.string()
                .required("Password is required")
  }
)


const AxiosCRUD = () => {

  const initialCredentials = {
    email: '',
    password: ''
  }

  const authLogin = (values) => {
    login(values.email, values.password)
      .then((response) => {
        if (response) {
          alert(JSON.stringify(response.data.token))
          sessionStorage.setItem('token', response.data.token)
        } else {
          sessionStorage.removeItem('token')
          throw new Error("Login failure");
        }  
      })
      .catch((err) => { 
        console.log("Something went wrong:", err)
        sessionStorage.removeItem('token')
      })
  }

  const obteinAllUser = () => {
    getAllUsers()
      .then((response) => {
        alert(JSON.stringify(response.data.data))
      })
      .catch((err) => alert("Somethin went wrong!", err))
  } 

  const obteinAllPagedUser = (page) => {
    getAllPagedUsers(page)
      .then((response) => {
        if (response) {
          alert(JSON.stringify(response.data.data))
        }else {
          alert("Somethin went wrong!")
          
        }
      })
      .catch((err) => alert("Somethin went wrong!", err))
  }

  const obteinUserByID = (id) => {
    getUserById(id)
      .then((response) => {
        if (response) {
          alert(JSON.stringify(response.data.data))
        }else {
          alert("Somethin went wrong!")
          
        }
      })
      .catch((err) => alert("Somethin went wrong!", err))
  } 

  const createNewUser = (name, job) => {
    createUser(name, job )
      .then((response) => {
        if (response.status === 201) {
          alert(JSON.stringify(response.data))
        } else {
          throw new Error("Created user failure")
        }
      })
      .catch((err) => alert("Somethin went wrong!", err))
  } 

  const updateUser = (id, name, job) => {
    updateUserbyID(id, name, job)
      .then((response) => {
        if (response.status === 200 && response.data) {
          alert(JSON.stringify(response.data))
        }else {
          alert("Somethin went wrong!")
          
        }
      })
      .catch((err) => alert("Somethin went wrong!", err))
  } 

  const deleteUser = (id) => {
    deleteUserByID(id)
      .then((response) => {
        if (response.status === 204) {
          alert("User detele!")
        }else {
          alert("Somethin went wrong!")
          
        }
      })
      .catch((err) => alert("Somethin went wrong!", err))
  } 


 

  return (
    <div>
      <h4>Login Formik</h4>
      <Formik
        initialValues={initialCredentials}
        validationSchema={ loginSchema }
        onSubmit={async (values) => {
          authLogin(values)
        }}
      >

        {({values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur}) => (
                <Form>
                <label htmlFor="email">Email</label>
                <Field
                  id="email"
                  name="email"
                  placeholder="example@email.com"
                  type="email"
                />

                {
                  errors.email && touched.email && (
                    <ErrorMessage name="email" component={"div"}/>
                  )
                }

                <label htmlFor="password">Password</label>
                <Field
                  id="password"
                  name="password"
                  placeholder="password"
                  type="password"
                />


                 {
                  errors.password && touched.password && (
                    <ErrorMessage name="password" component={"div"}/>
                  )
                }
                <button type="submit">Login</button>
                {isSubmitting ? (<p>Login your credentials...</p>) : null}
              </Form>
                
        )}

      
      </Formik>
                <div>
                  <button onClick={ obteinAllUser }> Get All Users </button>
                  <button onClick={ () => obteinAllPagedUser(1) }> Get All Paged Users </button>
                  <button onClick={ () => obteinUserByID(1) }> Get user by id </button>
                  <button onClick={ () => createNewUser("morpheus", "leader") }> Create user </button>
                  <button onClick={ () => updateUser(1, "morpheus", "developer") }> update user </button>
                  <button onClick={ () => deleteUser(1) }> delete user </button>
                  
                </div>
    </div>
  )
}

export default AxiosCRUD