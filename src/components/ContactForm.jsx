import React from 'react'
import './ContactForm.css'
import { useForm, ValidationError } from '@formspree/react';

const MyForm = () => {

    const [state, handleSubmit] = useForm('ENTER YOUR CODE HERE');
    if (state.succeeded)
     {    return <div>Form Submitted!</div>;  }

  return (
    <div  className='fromcontainer'>
        <form className='form' onSubmit={handleSubmit}>
            <label className='labels' htmlFor="name">Name</label>
            <input className='inputarea' id="name"type="text" name="name" />
            <ValidationError  prefix="Name" field="name" errors={state.errors}/>

            <label className='labels' htmlFor="email">Email Address</label>
            <input className='inputarea' id="email"type="email" name="email" />
            <ValidationError  prefix="Email" field="email" errors={state.errors}/>

            <label className='labels' htmlFor="message">Message</label>
            <textarea className='messagearea' id="message"name="message"/>
            <ValidationError prefix="Message" field="message"errors={state.errors} />

            <button className='submitbutton' type="submit" disabled={state.submitting}> Submit</button>   
         </form>
    </div>
  )
}

export default MyForm