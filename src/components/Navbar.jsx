import '../App.css';
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <>
        <div className="site-mobile-menu site-navbar-target">
            <div className="site-mobile-menu-header">
                <div className="site-mobile-menu-close mt-3">
                    <span className="icon-close2 js-menu-toggle"></span>
                </div>
            </div>
            <div className="site-mobile-menu-body"></div>
        </div> 
        
        
        <div className="site-navbar-wrap">
            <div className="site-navbar-top">
                <div className="container py-3">
                    <div className="row align-items-center">
                        <div className="col-6">
                            <div className="d-flex mr-auto">
                                <Link to="/" className="d-flex align-items-center mr-4">
                                    <span className="icon-envelope ms-2 text-dark"></span>
                                    <span className="d-none d-md-inline-block text-dark ms-1">mehmadk05@gmail.com</span>
                                </Link>
                                <Link to="/" className="d-flex align-items-center mr-auto">
                                    <span className="icon-phone ms-3 text-dark"></span>
                                    <span className="d-none d-md-inline-block text-dark ms-1" style={{fontFamily: 'Georgia, Times New Roman, Times, serif'}}>+92 320 933 79 39</span>
                                </Link>
                            </div>
                        </div>
                        <div className="col-6 text-end">
                            <div className="mr-auto">
                                <Link to="/" className="ms-5 p-2 pl-0 text-dark"><span className="icon-twitter"></span></Link>
                                <Link to="/" className="ms-1 p-2 pl-0 text-dark"><span className="icon-facebook"></span></Link>
                                <Link to="/" className="ms-1 p-2 pl-0 text-dark"><span className="icon-google"></span></Link>
                                <Link to="/" className="ms-1 p-2 pl-0 text-dark"><span className="icon-instagram"></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="site-navbar site-navbar-target js-sticky-header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-2">
                            <h1 className="my-0 site-logo text-dark"><Link to="/">Pixelium</Link></h1>
                        </div>
                        <div className="col-10">
                            <nav className="site-navigation text-right" role="navigation">
                                <div className="container" style={{marginRight: -100}} >
                                    <div className="d-inline-block d-lg-none ml-md-0 mr-auto py-3">
                                        <Link to="/" className="site-menu-toggle js-menu-toggle text-white"><span className="icon-menu h3"></span></Link>
                                    </div>

                                    <ul className="site-menu main-menu js-clone-nav d-flex">
                                        <li className="">
                                            <Link to="/" className="nav-link text-dark">{props.home}</Link>
                                        </li>
                                        <li>
                                            <Link to="/services" className="nav-link text-dark">{props.services}</Link>
                                        </li>
                                        <li>
                                            <Link to="/portfolio" className="nav-link text-dark">{props.portfolio}</Link>
                                        </li>
                                        <li><Link to="/about" className="nav-link text-dark">{props.about}</Link></li>
                                        <li><Link to="/gallery" className="nav-link text-dark">{props.gallery}</Link></li>
                                        <li><Link to="/contact" className="nav-link text-dark">{props.contact}</Link></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="hero">
            
        </div>

    </>
  )
}

export default Navbar