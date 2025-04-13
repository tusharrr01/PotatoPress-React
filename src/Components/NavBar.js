import React, { useState } from 'react'
import {
  Link,
} from "react-router-dom";

const NavBar = (props)=>{
  const [name,setname] = useState("DarkMode")
  const ModeName = ()=> {
      if(name === "DarkMode"){
        setname("WhiteMode")
      }else{
        setname("DarkMode")
      }
  }
    return (
      <>
        <nav key="navbar" className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} fixed-top`}>
          <div className="container-fluid ">
            <Link className="navbar-brand" to="#">PotatoPress</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><Link className="nav-link" to="/general">General </Link> </li>
                <li className="nav-item"><Link className="nav-link" to="/technology">Technology </Link> </li>
                <li className="nav-item"><Link className="nav-link" to="/science">Science </Link> </li>
                <li className="nav-item"><Link className="nav-link" to="/business">Business </Link> </li>
                <li className="nav-item"><Link className="nav-link" to="/sports">Sports </Link> </li>
                <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment </Link> </li>
                <li className="nav-item"><Link className="nav-link" to="/health">Health </Link> </li>
              </ul>
            </div>
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`} >
              <input className="form-check-input" onClick={props.toggleMode} onMouseDown={ModeName} type="checkbox" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`Enable ${name}`}</label>
            </div>
          </div>
        </nav>
      </>
    )
}
export default NavBar
