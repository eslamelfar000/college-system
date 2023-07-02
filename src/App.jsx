import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './IntroPages/HomePage/HomePage'
import Footer from './Components/Footer/Footer'
import SignUpIntro from './IntroPages/SignUpIntro/SignUpIntro'
import LoginIntro from './IntroPages/LoginIntro/LoginIntro'
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react'


function App() {


  const { i18n } = useTranslation();

  useEffect(() => {
    let language = localStorage.getItem('lang');
    let language2 = localStorage.getItem('i18nextLng');

    if (language === 'ar' || language2 === "ar") {
      document.documentElement.lang = 'ar';
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.lang = 'en';
      document.documentElement.dir = 'ltr';
    }

    if (language === 'en') {
      i18n.changeLanguage('en')
    } else {
      i18n.changeLanguage('ar')
    }
  }, [i18n])


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/sign-up' element={<SignUpIntro />} />
          <Route path='/login' element={<LoginIntro />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
