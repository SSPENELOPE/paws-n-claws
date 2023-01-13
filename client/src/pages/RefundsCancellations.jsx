import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'


const RefundsCancellations = () => {
  return (
    <div>
      <Header />
      <div className="contact">
        <h1><strong>Refunds and Cancellations</strong></h1>
        <h3 className='text-center'>We're sorry that we weren't able to meet your expectations. Here is our policy regarding Refunds/Cancellations.</h3>
        <h1><u>Cancellations</u></h1>
        <ul>
          <li>
            <h3>We completely understand that things happen, and you may be unable to keep your appointment.
              You are welcome to cancel at any time.
              All we ask is that you provide a 24 hr notice so that we may accommodate other dogs. If you cancel with less than 24 hrs notice, you may be charged a cancellation fee with the card associated with your account.</h3>
          </li>
          <li>
            <h3> If your dog isn't friendly with other dogs, we do not recommend booking a session with us. They will be walking with other dogs around the area and while we will do our best to keep them safe, we cannot guarantee that.</h3>
          </li>
          <li>
            <h3> Please have your dog ready to go. If your dog is not present at the scheduled time, that session will be considered a no show and will be charged a no-show fee with the card associated with your account. </h3>
          </li>
          <li>
            <h3> Failure to adhere to these guidelines repeatedly may result in termination of your account. This is to ensure a quality service to all our beloved clients. </h3>
          </li>
          <li>
            <h3>In extreme weather circumstances, we reserve the right to cancel and ask for a reschedule. Our top priority is your dog, and if we do have to cancel, you will not be charged a fee and will be credited for the same service at a date of your chosing!</h3>
          </li>
          <li>
            <h3> We will be more than willing to reschedule to a more appropriate time. We will do our best to search for alternatives to an outdoor walk, but we cannot guarantee it.
            </h3>
          </li>
        </ul>






        <h1><u>Refunds</u></h1>
        <ul>
          <li>
            <h3>  While we do not offer refunds, we do allow you to use the credit towards a future walk. This credit will be valid for 1 year after the original appointment and will be applied to your next walk. </h3>
          </li>
        </ul>

        <h3 className='text-center'><i>If you have any questions about this policy, please use the Contact Us form and select General Support. </i></h3>
        <Footer />
      </div>
    </div>
  )
}

export default RefundsCancellations;