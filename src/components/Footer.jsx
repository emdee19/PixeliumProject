import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
        <div className="mt-5">
            <footer className="text-white text-center text-lg-start bg-dark">
                <div className="container p-4">
                    <div className="row mt-4">
                        <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                            <h5 className="text-uppercase mb-4">About Pixelium</h5>

                            <p>
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                voluptatum deleniti atque corrupti.
                            </p>

                            <p>
                                Blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas
                                molestias.
                            </p>

                            <div className="mt-4 footerIcons">
                                <Link type="button" className="btn btn-floating btn-light btn-sm bg-dark text-light"><span className="icon-twitter"></span></Link>
                                <Link type="button" className="btn btn-floating btn-light btn-sm ms-1 bg-dark text-light"><span className="icon-facebook"></span></Link>
                                <Link type="button" className="btn btn-floating btn-light btn-sm ms-1 bg-dark text-light"><span className="icon-google"></span></Link>
                                <Link type="button" className="btn btn-floating btn-light btn-sm ms-1 bg-dark text-light"><span className="icon-instagram"></span></Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase mb-4 pb-1">Location</h5>

                            <ul className="fa-ul" style={{ marginLeft: `1.65em;`, lineHeight: 2 }}>
                                <li className="mb-3">
                                    <span className="fa-li"><i className="fas fa-home"></i></span><span className="ms-2">Mingora Swat, KP</span>
                                </li>
                                <li className="mb-3">
                                    <span className="fa-li"><i className="fas fa-envelope"></i></span><span className="ms-2">mehmadk05@gmail.com</span>
                                </li>
                                <li className="mb-3">
                                    <span className="fa-li"><i className="fas fa-phone"></i></span><span className="ms-2">+ 92 320 933 79 39</span>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase mb-4">Opening hours</h5>

                            <table className="table text-center text-white">
                                <tbody className="fw-bold" style={{lineHeight: 2}}>
                                    <tr>
                                        <td>Mon - Thu:</td>
                                        <td>9am - 5pm</td>
                                    </tr>
                                    <tr>
                                        <td>Fri:</td>
                                        <td>8am - 12.30pm</td>
                                    </tr>
                                    <tr>
                                        <td>Saturday:</td>
                                        <td>9am - 5pm</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            
                <div className="text-center p-3 bg-primary" style={{backgroundColor: `rgba(0, 0, 0, 0.2);`}}>
                    © 2022 Copyright:
                    <Link className="text-white ms-2" to="/">Pixelium</Link>
                </div>
            </footer>
        </div>

    </>
  )
}

export default Footer