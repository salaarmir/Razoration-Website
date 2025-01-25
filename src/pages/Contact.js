import React from 'react'


function Contact() {
  return (
    <>
    <br></br>
    <div>Contact Razoration</div>
    <br></br><br></br>
    <Form />
    </>
  )
}

function Form() {
    return (
        <>
        <body className='contactbody'>
          <h5>Get in touch using this form to learn more about our work, or if you have any queries.</h5>
          <center><a href="mailto:razoration@enactusnottingham.co.uk">razoration@enactusnottingham.co.uk</a></center>
          <br></br><br></br><br></br>
          <form className='contactform'>
            <label className='name'>
              <input type="text" id="name" name="name" required></input>
              <span className='nameplaceholder'>Name</span>
            </label>
            <label className='email'>
              <input type="text" id="email" name="email" required></input>
              <span className='emailplaceholder'>Email</span>
            </label>
          <br></br> <br></br> 
            <label className='subject'>
              <input type="text" id="subject" name="subject" className="subjectinput" required></input>
              <span className='subjectplaceholder'>Subject</span>
            </label>
          <br></br><br></br> 
            <label className='message'>
              <textarea type="text" id="subject" name="subject" className="messageinput" placeholder='Type your message...' required></textarea>
            </label>
          <br></br><br></br>
            <input className='submit' type='submit'></input>
          </form>
        </body>
        </>
    )
}

export default Contact