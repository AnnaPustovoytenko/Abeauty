import './style.scss'

const ContactPage = () => {
  return (
    
    <div className="contacts">
       <div class={"line3"}></div>
      <div className="contacts_header">
        <div className={'contact1'}>
          <img className={'Kar11'} src={'/images/25.png'}></img>
          <div className={'Contacti11'}>Контакты</div>
          <div className={'naz11'}>Адрес</div>
          <div className={'tex11'}> ул. Ленина, 46</div>
          <div className={'naz11'}>Телефон</div>
          <div className={'tex11'}>+7 (923) 888-99-66</div>
          <div className={'naz11'}>E-mail</div>
          <div className={'tex11'}>info@A'beauty.ru</div>
          <div>
        <div className="Pr03">Присоединяйтесь к нам</div>
          <div className="Pr103">
            Подпишитесь на наш аккаунт @A'beauty<br></br> и узнавайте о
            новиках и акциях первыми
          </div>
          <button className={'but3'}>Подробнее</button>
          
          <div className="prozrachost"></div>
      </div>  
        </div>
      </div>
    </div>
  )
}

export default ContactPage