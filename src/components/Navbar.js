import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
            </li>
            
            </ul>
           
            
            {/* <div className="bg-warning mx-2"  onClick={()=>{props.toggleMode('warning')}} style={{height:'2em',width:'2em',cursor:'pointer',border:'1px solid'}}></div>
            <div className="bg-secondary mx-2"  onClick={()=>{props.toggleMode('secondary')}} style={{height:'2em',width:'2em',cursor:'pointer',border:'1px solid'}}></div>
            <div className="bg-primary mx-2"  onClick={()=>{props.toggleMode('primary')}} style={{height:'2em',width:'2em',cursor:'pointer',border:'1px solid'}}></div>
            <div className="bg-success mx-2"  onClick={()=>{props.toggleMode('success')}} style={{height:'2em',width:'2em',cursor:'pointer',border:'1px solid'}}></div>
            <div className="bg-light mx-2"  onClick={()=>{props.toggleMode('light')}} style={{height:'2em',width:'2em',cursor:'pointer',border:'1px solid'}}></div>
            <div className="bg-danger mx-2"  onClick={()=>{props.toggleMode('danger')}} style={{height:'2em',width:'2em',cursor:'pointer',border:'1px solid'}}></div> */}
            
           
            <div className={`custom-control custom-switch text-${props.mode === 'light' ? 'dark':'light'}`}>
                <input type="checkbox" onClick={()=>{props.toggleMode(null)}} className="custom-control-input" id="customSwitch1" />
                <label className="custom-control-label" htmlFor="customSwitch1">Enable Dark Mode</label>
            </div>
        </div>
    </nav>
  )
}


Navbar.propTypes = {
    title : PropTypes.string,
    about : PropTypes.string,
}