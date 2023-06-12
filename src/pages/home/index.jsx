import React from 'react'
import './style.scss'
const HomePage = () => {
  return (
    <div className={'home'}>
      <div className={'home__header'}>
        <div class={"line"}></div>
        <div className={'medium-text'}>A'beauty</div>
        <div className={'medium-text1'}>Макияж — это зеркало души. 
        Это особенный вид 
        женской медитации. Время, проведенное
         наедине с собою и своими мыслями. Момент, 
         когда мягкие взмахи кистью буквально 
         преображают вашу внешность.</div>
        <button className={'but'}>Подробнее</button>
        <div className={'kartinki'}>
          <img className={'kartinki01'} src={'/images/1.png'} />
          <img className={'kartinki02'} src={'/images/2.png'} />
          <img className={'kartinki03'} src={'/images/3.png'} />
          <img className={'kartinki04'} src={'/images/4.png'} />
        </div>
        <div>
        <div className="pod0">
            Подпишитесь на наш аккаунт @A'beauty и узнавайте
            о новиках и акциях первыми
          </div>
          <div className="Love">Продукты, завоевавшие любовь наших клиентов</div>
          <img className={'kartinki11'} src={'/images/p_1.png'}></img>
          <img className={'kartinki12'} src={'/images/p_2.png'}></img>
          <img className={'kartinki13'} src={'/images/p_3.png'}></img>
         <div className="Love1">Косметика – философия женщин!</div>
        </div>
        <button className={'but01'}>Подробнее</button>
        <div>
          <div className="Pr">Присоединяйтесь к нам</div>
          <div className="Pr1">
            Подпишитесь на наш аккаунт @A'beauty 
            и узнавайте о
            новиках и акциях первыми
          </div>
          <div className="Pr2">
            Если вы любите красоту, то делайте, пожалуйста,
            все возможное для того, чтобы ее создавать.
            Макияж лишь один из способов.
          </div>
          <img className={'g1'} src={'/images/g1.png'}></img>
          <img className={'g2'} src={'/images/g3.png'}></img>
          <img className={'g3'} src={'/images/g2.png'}></img>
          <img className={'g4'} src={'/images/g4.png'}></img>
        </div>
        <div className={'info'}>
          <img className={'info1'} src={'/images/38.png'}></img>
          
        </div>
        <h1 class="otstup0">Неважно</h1>    
      </div>
      <div className={'footer'}>
      </div>
    </div>
  )
}
export default HomePage