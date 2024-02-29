import React from 'react'
// import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';


export default function NavBar(props) {
  return (
    <>
    
    <nav className={`navbar bg-${props.mode1} border-bottom border-body p-0" `}>
  
      <nav className="navbar navbar-expand-lg bg-body-primary " >
        <div className="container-fluid "  >
          <Link className={`navbar-brand text-${props.textColor}`} to="/"><h4>{props.title}</h4></Link>
          <button className="navbar-toggler" style={{backgroundColor:props.mode1==='dark'?'white':'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent" >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item ">
                <Link className={`nav-link active text-${props.textColor}`} aria-current="page" to="/"><h5>Home</h5></Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link active text-${props.textColor}`} to="/about"><h5>{props.about}</h5></Link>
              </li>

            </ul>



          </div>
        </div>
      </nav>
            <div className="form-check form-switch mx-3" >
              <input className="form-check-input " onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className={`form-check-label text-${props.textColor}`} htmlFor="flexSwitchCheckDefault"><h5>{props.buttonText} Mode</h5></label>
            </div>
</nav>
    </>
  )
}


