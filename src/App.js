import React from 'react';
import Navbar from "./components/navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Team from "./pages/Team"
import logo from "./resources/logo.png"

function App() {
  let component
  switch (window.location.pathname) {
    case "/": 
      component = <Home />
      break
    case "/about":
      component = <About />
      break
    case "/team":
      component = <Team />
      break
    case "/contact":
      component = <Contact />
      break
  }
  return (
    <>
    <div className='top'>
      <img className='logoimage' src={logo} alt="Logo"s/>
      <div>
        <h2>Razoration</h2>
        <p>The Social Barber Project</p>
      </div>
    </div>
    <Navbar />
    <div className='container'>
      {component}
    </div>
    </>
  )
}

export default App;
