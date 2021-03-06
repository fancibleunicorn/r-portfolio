import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {

    const [ formState, setFormState ] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');

    const { name, email, message } = formState;

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if(!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            } 

        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        
        if (!errorMessage) {
         setFormState({...formState, [e.target.name]: e.target.value})
        }

        console.log('errorMessage', errorMessage);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return(
        <section id="contact-form" className="contact-form card text-light p-2 m-1 pb-5">
            <div className="border-bottom mb-5">
                <h2 className="section-header card-title text-center">Contact Me</h2>
            </div>
            <form className="px-5" id='contact-form' onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor='name'>Name:</label>
                    <input className="form-control col-3" type='text' defaultValue={name} onBlur={handleChange} name="name" />
                </div>
                <div>
                    <label htmlFor='email'>Email address:</label>
                    <input className="form-control col-3" type='email' defaultValue={email} onBlur={handleChange} name="email" />
                </div>
                <div>
                    <label htmlFor='message'>Message:</label>
                    <textarea className="form-control col-6" name='message' defaultValue={message} onBlur={handleChange} rows='5' />
                    {errorMessage && (
                        <div>
                            <p ClassName="error-text">{errorMessage}</p>
                        </div>
                    )}
                </div>
                <button className="btn btn-lg btn-outline-light text-light mt-3" type='submit'>Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;