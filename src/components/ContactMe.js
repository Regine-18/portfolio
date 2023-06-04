import React from 'react'
import Footer from '../components/Footer'
const ContactMe = () => {
  return (
    <>
      <div className='container-fluid p-5' id='contact-section'>
        <div className="container">
          <div className='contact-title'>
            <h3 className='section-title'>Contact</h3>
           <h1 className='description-page'>Love to hear from you, Get in touch</h1>
          </div>
          <div className="row pt-4">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="username" >Username:</label>
                <input type="text" className="form-control floating-label" id="username" placeholder="Enter username"/>
              </div>
            </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="lastname" >Last Name:</label>
              <input type="text" className="form-control floating-label" id="lastname" placeholder="Enter last name"/>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="firstname">First Name:</label>
              <input type="text" className="form-control floating-label" id="firstname" placeholder="Enter first name"/>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" className="form-control floating-label" id="email" placeholder="Enter email"/>
            </div>
          </div>
           <div className="form-group mb-4">
           <label htmlFor="textbox">Your Message</label>
            <div className="input-container">
               <input type="text"  className="input" id="textbox" placeholder="Starts here"/>
            <div class="underline"></div>
          </div>
          <a className='btn btn-primary mt-3' href='/' role='button'>
          Submit
        </a>
         </div>
       </div>
    </div>
    <Footer/>
</div>


    </>
  )
}

export default ContactMe