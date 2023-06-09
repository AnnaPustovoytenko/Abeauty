import React from 'react'
import './style.scss'
const ONasPage = () => {
  return (
    <div className="o_nas">
      <div>
        <div className="Pr01">Присоединяйтесь к нам</div>
          <div className="Pr02">
            Подпишитесь на наш аккаунт @A'beauty<br></br> и узнавайте о
            новиках и акциях первыми
          </div>
          <button className={'but2'}>Подробнее</button>
          <div class={"line3"}></div>
      </div>    
      <div className="o_nas_header">
        <div className="o_nas_con">
          <div className="o_nas1">О компании</div>
          <div className="o_nas_text">
            Компания «A'beauty» является лидером в сфере разработки и производства
            косметических средств полного цикла на территории России. Продукция предприятия 
            широко представлена на рынке собственными торговыми марками, товарами популярных 
            лицензионных брендов и продукцией контрактного производства. Наша косметика поставляется 
            на рынки стран ЕАС, а также — всех субъектов Российской Федерации. Главным направлением в 
            повседневной деятельности компании является разработка и производство косметики, отвечающей 
            всем нормам безопасности и действующего законодательства. Широкий ассортимент продукции 
            нашей компании имеет как товары, заслужившие почет и доверие клиентов за долгие годы, что 
            товар стоит на полках, так и регулярные новинки, которые наша компания производит
            каждый сезон, отслеживая все мировые тренды и веяния. Структура компании рассчитана 
            на комфортную и быструю связь между клиентами и нашими сотрудниками. Для клиентов 
            предусмотрена гибкая система скидок, акций и индивидуальных бонусов.
          </div>
          <div className="prozrachost"></div>
        </div>
      </div>
      
    </div>
  )
}

export default ONasPage