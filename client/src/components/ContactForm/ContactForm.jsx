import React from 'react';
import Header from '../Header'
import Footer from '../Footer/index'

const ContactForm = () => {
    return (
        <div>
            <Header />
        <div className="contact">
          <h1>Contact Us!</h1>
          <form
            id="contactForm"
            action="https://formsubmit.co/4967479015bb1363cd174fe9a839dc12"
            method="POST"
          >
            <input type="hidden" name="_captcha" value="false"></input>
            <input
              type="hidden"
              name="_next"
              value="http://localhost:3000/"
            ></input>
            <input type="email" name="Email" placeholder="Your Email"></input>
            <input type="text" name="Name" placeholder="Name" required></input>
            <input type="subject" name="Subject" placeholder="Subject"></input>
            <textarea
              id="description"
              type="text"
              name="Description"
              placeholder="Description"
              required
            ></textarea>
            <button type="submit">Send</button>
          </form>
          <Footer />
        </div>
        </div>
        
      );
    // const [formStatus, setFormStatus] = React.useState('Send')
    // const onSubmit = (e) => {
    //     e.preventDefault()
    //     setFormStatus('Submitting...')
    //     const { name, email, message } = e.target.elements
    //     let contact = {
    //         name: name.value,
    //         email: email.value,
    //         message: message.value,
    //     }
    //     console.log(contact)
    // }
    // return (
    //     <div className='container mt-5'>
    //         <h2 className='mb-3'>Contact Us</h2>
    //         <form onSubmit={onSubmit}>
    //             <div className='mb-3'>
    //                 <label className='form-label' htmlFor='name'>
    //                     Name
    //                 </label>
    //                 <input className='form-control' type='text' id='name' required />
    //             </div>
    //             <div className='mb-3'>
    //                 <label className='form-label' htmlFor='email'>
    //                     Email
    //                 </label>
    //                 <input className='form-control' type='email' id='email' required />
    //             </div>
    //             <div className='mb-3'>
    //                 <label className='form-control' htmlFor='message'>
    //                     Message
    //                 </label>
    //                 <textarea className='form-control' id='message' required />
    //             </div>
    //             <button className='btn btn-danger' type='submit'>
    //                 {formStatus}
    //             </button>
    //         </form>
        // </div>
    // )
}

export default ContactForm
