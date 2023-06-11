import React, { useState } from 'react'
import './style.scss'
import { Link } from 'react-router-dom'


export const HeaderPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleLogoClick = () => {
    if (window.innerWidth <= 1200) {
      handleMenuToggle()
    }
  }

  return (
    <div className="header">
      <div className="header__logo" onClick={handleLogoClick}>
        <img src="/assest/logo1.png" alt="Logo" />
      </div>
      <div className={`header__menu ${isMenuOpen ? 'open' : ''}`}>
        <div>
          <Link to="/" onClick={handleMenuToggle}>
            Главная
          </Link>
        </div>
        <div>
          <Link to="/katalog" onClick={handleMenuToggle}>
            Каталог
          </Link>
        </div>
         <div>
          <Link to="/Skidki" onClick={handleMenuToggle}>
            Скидки
          </Link>
        </div>
       <div>
          <Link to="/ONas" onClick={handleMenuToggle}>
            О компании
          </Link>
        </div>
        <div>
          <Link to="/contact" onClick={handleMenuToggle}>
            Контакты
          </Link>
        </div>
      </div>
      <div className="header__icons">
        <div
          className={`header__burger-menu ${isMenuOpen ? 'visible' : ''}`}
          onClick={handleMenuToggle}
        >
          <div>
            <img src="/assest/logo2.png" alt="Logo2" />
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}