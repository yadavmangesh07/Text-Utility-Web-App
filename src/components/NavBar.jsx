import React from 'react'
// import PropTypes from 'prop-types'


export default function NavBar(props) {
  return (
    <>
    <nav className={`navbar bg-${props.mode1} border-bottom border-body" `}>
  
      <nav className="navbar navbar-expand-lg bg-body-primary ">
        <div className="container-fluid " >
          <a className={navbar-brand text-${props.textColor}} href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <a className={nav-link active text-${props.textColor}} aria-current="page" href="/about">Home</a>
              </li>
              <li className="nav-item">
                <a className={nav-link active text-${props.textColor}} href="/about">{props.about}</a>
              </li>

            </ul>



          </div>
        </div>
      </nav>
            <div className="form-check form-switch mx-3" >
              <input className="form-check-input " onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className={form-check-label text-${props.textColor}} htmlFor="flexSwitchCheckDefault">Enable {props.buttonText} Mode</label>
            </div>
</nav>
    </>
  )
}
// NavBar.propTypes = {
//   React: PropTypes.string.isRequired

// }
// NavBar.defaultProps = {
//   React: 'bhfbewfb',

// }
