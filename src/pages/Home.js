import React from 'react'
import background from '../resources/oldmarketsquare.jpeg'
import { Wrapper, Status } from "@googlemaps/react-wrapper";

function home() {
    /*const myStyle={
        backgroundImage: `url(${background})` ,
        height:'100vh',
        marginTop:'-15px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '1425px',
        
    };*/
  return (
    <>
    <div className='container'>
      <img src={background}/>
      <div className='content'>
        <h4><b>ABOUT RAZORATION</b></h4>
        <p>Razoration is a social enterprise striving to eradicate poverty in the UK 
          through equipping homeless individuals with employable skills to enhance their 
          job prospects, bringing them out of poverty and improving their standard of living. 
          We aim to eradicate poverty through establishing a door-to-door hairdressing service 
          for students in Nottingham. The profits from these haircuts will cross-subsidise the 
          costs of providing homeless individuals with haircuts and financing their enrolment 
          onto barbering courses. <br></br><br></br>
          Razoration hopes to tackle the issue of poverty within Nottinghamshire and raise awareness 
          around homelessness. Our mission is to develop careers for passionate individuals through 
          assisting them into employment. In addition, we hope to change society’s mindset, through 
          reducing social isolation and the stigma associated with homelessness. <br></br><br></br>
          The Sustainable Development Goals which Razoration tackle are no poverty, decent work and 
          economic growth and reduced inequalities. We are working towards no poverty through enrolling 
          homeless individuals onto our barbering courses to assist them in work, where a living wage 
          can then be earned to bring them out of poverty. Through increasing the number of homeless 
          individuals working, we will subsequently be reducing the unemployment rate of the UK. 
          If all 320,000 homeless individuals in the UK were able to obtain work, this would reduce 
          the UK’s unemployment rate by 0.5%, further increasing the Countries GDP. Assisting some of 
          the poorest individuals in the country obtain work, and start earning an income, will help 
          reduce the significantly large income and wealth gap we experience here in the UK. We aim to 
          bring society closer together, both physically, mentally and financially. </p>
      </div>
    </div>
    <div className='instagram'>
    <h5>Follow our <a href='https://www.instagram.com/razoration/'>Instagram</a> to stay up to date!</h5>
    </div>
    <div className='map'>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d76918.07803628106!2d-1.2401012355048777!3d52.95400191531059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487832d2390779cd%3A0x108063201919db15!2sNottingham!5e0!3m2!1sen!2suk!4v1662218559432!5m2!1sen!2suk" width="1000" height="600" loading="lazy"></iframe>
    </div>
    </>
  )
}

export default home