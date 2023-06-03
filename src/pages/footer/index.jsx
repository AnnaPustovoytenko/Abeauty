import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
export const FooterPage = () => {
  return (
    <div className={'footer'}>
      <div className={'footer__menu'}>
        <p className="alignright">
          <img src={'/assest/logo1.png'} />
        </p>
        <p className={'str'}>
          <Link to={'/'}>Главная </Link>
        </p>
        <p className={'str'}>
          <Link to={'/ONas'}>О компании </Link>
        </p>
        <p className={'str'}>
          <Link to={'/Skidki'}>Скидки </Link>
        </p>
        <p className={'str'}>
          <Link to={'/contact'}>Контакты</Link>
        </p>
        <p className={'str'}>
          <Link to={'/katalog'}>Каталог </Link>
        </p>
      </div>
      <div className={'Contacti'}>Контакты</div>
          <div className={'naz'}>Адрес</div>
          <div className={'tex'}> ул. Ленинап, 46</div>
          <div className={'naz'}>Телефон</div>
          <div className={'tex'}>+7 (923) 888-99-66</div>
          <div className={'naz'}>E-mail</div>
          <div className={'tex'}>info@A'beauty.ru</div>
    </div>
  )
}