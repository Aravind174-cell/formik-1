import React from 'react';
import './App.css';
import { useFormik } from 'formik';

const Formik = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },
    onSubmit:(values) => {
      console.log('form values', formik.values)
    },
    validate:(values) =>{
      let errors = {};
      if(!values.name){
        errors.name = "Name Rquired"
      }
      if(!values.email){
        errors.email = "Email Rquired"
      }
      if(!values.password){
        errors.password = "Password Rquired"
      }
      return errors;
    }
  });

 
  return (
    <div className="APP">
      {/* <h1>-----Formik</h1> */} 
      <form autoComplete="off" onSubmit={formik.handleSubmit}>  {/* Turned off autocomplete for the entire form */}
        <label>Name</label> <br/>
        <input 
          type="text" 
          name="name" 
          id="name" 
          value={formik.values.name} 
          onChange={formik.handleChange} 
          autoComplete="off"  // Turned off for this input
        /> 
        {formik.errors.name?<div>{formik.errors.name}</div>:null}

        <br/>

        <label>E-mail</label> <br/>
        <input 
          type="text" 
          name="email" 
          id="email" 
          value={formik.values.email} 
          onChange={formik.handleChange} 
          autoComplete="off"  // Turned off for this input
        />
        {formik.errors.email?<div>{formik.errors.email}</div>:null}

        <br/>

        <label>Password</label> <br/>
        <input 
          type="text" 
          name="password" 
          id="password" 
          value={formik.values.password} 
          onChange={formik.handleChange} 
          autoComplete="off"  // Turned off for this input
        /> 
        {formik.errors.password?<div>{formik.errors.password}</div>:null}

        <br/>
        <br/>
        <button type="submit">Register</button>
        {/*example */}
      </form>
    </div>
  )
}

export default Formik;
