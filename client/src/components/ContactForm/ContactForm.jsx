import React, { useState, useRef } from 'react';
import Header from '../Header';
import Footer from '../Footer/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';


const ContactForm = () => {
    const [option, setOption] = useState( { select: '', name: '', email: '', text: ''} );
    const form = useRef();

    /* set the state when the form values are changed */
    const handleChange = (e) => {
       const { name, value } = e.target;

       setOption({
        ...option,
        [name]: value,
       })
    }

    /* function to have the form sent to desired location use emailjs */
    const handleFormSubmit = (e) => {
        e.preventDefault();
       
        if (option.select === 'tech') {
            emailjs.sendForm('service_cma7mwq', 'template_mlcfw7g', form.current, 'UVIfb9mkfrjrr5Kzu')
            .then((result) => {
                console.log(result.text);
                console.log('message sent')
            }, (error) => {
                console.log(error.text);
            });
        } else if (option.select === 'paws') {
            emailjs.sendForm('service_key for owner', 'template_key for owner', form.current, 'UVIfb9mkfrjrr5Kzu')
            .then((result) => {
                console.log(result.text);
                console.log('message sent')
            }, (error) => {
                console.log(error.text);
            });
        } else {
            alert('Please selct what you need help with')
        }
    }
   
    return (
        <div>
            <Header />
                <div className='bg-silk contactBody'>
                    <h1 className='text-center'>Contact Us</h1>

                    {/* contact form  */}
                    <div className='contactForm'>
                        <form className='d-flex flex-column' ref={form} onSubmit={handleFormSubmit}>
                            <h4>Please select the type of assistance you need</h4>

                            {/* support select dropdown */}
                            <select onChange={handleChange} name='select' className='my-2'>
                                <option value='default'></option>
                                <option value='tech'>Technical Support</option>
                                <option value='paws'>Customer Support</option>
                            </select>

                               {/*  name input */}
                            <h4 className='my-2'>Name</h4>
                                <input 
                                required
                                placeholder='John Doe' 
                                type='text' 
                                name='name' 
                                id='name' 
                                value={option.name}
                                onChange={handleChange}
                                ></input>

                                {/* email input */}
                            <h4 className='my-2'>Email</h4>
                                <input 
                                required
                                placeholder='johndoe@email.com' 
                                type='text' 
                                name='email' 
                                id='email' 
                                value={option.email}
                                onChange={handleChange}
                                ></input>

                                {/* text area for problem */}
                            <h4 className='my-2'>What can we help you with?</h4>
                                <textarea 
                                required
                                placeholder='describe what we can help you with here'
                                name='text'
                                id='text'
                                value={option.text}
                                onChange={handleChange}
                                className='contactText'
                                ></textarea>

                               {/*  submit button */}
                            <input type='submit' name='Submit' value='Submit' className='btn my-2 bg-green' />
                        </form>
                    </div>
                   
                    <div className='text-center d-flex flex-column'>
                        <a className="priceFont" href="tel:PHONE-NUM"><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> PHONE_NUM</a>
                        <a className="priceFont" href='mailto:email@email.com'><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> email@email.com</a>
                    </div>
                    <h2></h2>
                </div>
            <Footer />
        </div>
    );

}


export default ContactForm
