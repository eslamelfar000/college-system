import React, { useEffect } from 'react'
import './Navbar.css'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next';


const openSide = () => {
    let side = document.querySelector('.side-cover');
    if (side) {
        side.classList.add('show-side')
    }
}

const closeSide = () => {
    let side = document.querySelector('.side-cover');
    if (side) {
        side.classList.remove('show-side')
    }
}


function Navbar() {

    const { t, i18n } = useTranslation();
    const location = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location])

    return (
        <div className='site-nav'>
            <div className="container">
                <div className="nav-content">
                    <div className="logo">
                        <Link to={'/'}>
                            <h2>{t('logo')}</h2>
                        </Link>
                    </div>

                    <div className="list">
                        <ul className="nav-list">
                            <li>
                                <Link to={'/'}>{t('home')}</Link>
                            </li>
                            <li className='auth'>
                                <Link to={'/login'}>{t('login')}</Link>
                            </li>
                            <li className='auth'>
                                <Link to={'/sign-up'}>{t('sign-up')}</Link>
                            </li>
                        </ul>

                        <ul className="lang">
                            <li className='list-icon'>
                                <i className="bi bi-list-nested" onClick={openSide}></i>
                            </li>
                            <li>
                                {i18n.language === 'ar' ? (
                                    <a href="#" onClick={() => {
                                        localStorage.setItem('lang', 'en')
                                        document.location.reload()
                                    }}>En</a>
                                ) : (
                                    <a href="#" onClick={() => {
                                        localStorage.setItem('lang', 'ar')
                                        document.location.reload()
                                    }}>Ar</a>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>


                <div className={`side-cover`}>
                    <div className={`side-nav ${i18n.language === 'en' ? 'en-dir' : ''}`}>

                        <div className="close-btn" onClick={closeSide}>
                            <i className="bi bi-x-lg"></i>
                        </div>

                        <div className="logo">
                            <Link to={'/'}>
                                <h2>{t('logo')}</h2>
                            </Link>
                        </div>

                        <ul className="">
                            <li>
                                <Link to={'/'} onClick={closeSide}>
                                    {i18n.language === 'en' ? (
                                        <>
                                            <i className="bi bi-chevron-double-right"></i>
                                            {t('home')}
                                        </>
                                    ) : (
                                        <>
                                            <i className="bi bi-chevron-double-left"></i>
                                            {t('home')}
                                        </>
                                    )}
                                </Link>
                            </li>
                            <li className='auth'>
                                <Link to={'/login'} onClick={closeSide}>
                                    {i18n.language === 'en' ? (
                                        <>
                                            <i className="bi bi-chevron-double-right"></i>
                                            {t('login')}
                                        </>
                                    ) : (
                                        <>
                                            <i className="bi bi-chevron-double-left"></i>
                                            {t('login')}
                                        </>
                                    )}
                                </Link>
                            </li>
                            <li className='auth'>
                                <Link to={'/sign-up'} onClick={closeSide}>
                                    {i18n.language === 'en' ? (
                                        <>
                                            <i className="bi bi-chevron-double-right"></i>
                                            {t('sign-up')}
                                        </>
                                    ) : (
                                        <>
                                            <i className="bi bi-chevron-double-left"></i>
                                            {t('sign-up')}
                                        </>
                                    )}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
