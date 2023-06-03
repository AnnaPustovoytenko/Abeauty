import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'

export const HeaderPage = () => {
  return (
    <div className={'header'}>
      <div className={'header__logo'}>
        <img src={'/assest/logo.png'} />
      </div>
      <div className={'header__menu'}>
        <div>
          <Link to={'/'}>Главная </Link>
        </div>
        <div>
          <Link to={'/katalog'}>Каталог </Link>
        </div>
        <div>
          <Link to={'/Skidki'}>Скидки </Link>
        </div>
        <div>
          <Link to={'/ONas'}>О компании </Link>
        </div>
        
        <div>
          <Link to={'/contact'}>Контакты</Link>
        </div>
      </div>
      <div className={'header__icons'}>
        <div>
          <img src={'/assest/logo2.png'} />
        </div>
        <div>
          <img src={'/assest/logo3.svg'} />
        </div>
      </div>
    </div>
  )
}