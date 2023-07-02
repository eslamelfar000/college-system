import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='footer'>
            <div className="footer-cover">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <div className="logo-img">
                                <Link to={'/'}>
                                    <h2>
                                        Logo
                                    </h2>
                                </Link>
                            </div>
                        </div>

                        <div className="col-12 col-md-4">
                            <div className="some-links">
                                <ul>
                                    <li>
                                        <Link>
                                            <i className="bi bi-chevron-double-left"></i>

                                            سياسة الخصوصية
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            <i className="bi bi-chevron-double-left"></i>

                                            مساعدة
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            <i className="bi bi-chevron-double-left"></i>

                                            اسئلة شائعة
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-12 col-md-4">
                            <div className="social">
                                <ul>
                                    <li>
                                        <a href="#">
                                            <i className="bi bi-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="bi bi-linkedin"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="bi bi-twitter"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
