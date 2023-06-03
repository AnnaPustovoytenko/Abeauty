import React from 'react'
import './style.scss'
const HomePage = () => {
  return (
    <div className={'home'}>
      <div className={'home__header'}>
        <div class={"line"}></div>
        <div className={'medium-text'}>A'beauty</div>
        <div className={'medium-text-text'}>Макияж — это зеркало души. Это особенный вид 
        женской медитации. Время, проведенное
         наедине с собою и своими мыслями. Момент, 
         когда мягкие взмахи кистью буквально 
         преображают вашу внешность.</div>
        <button className={'but'}>Подробнее</button>
        <div className={'kartinki'}>
          <img className={'kartinki01'} src={'/images/1.png'} />
          <img className={'kartinki2'} src={'/images/2.png'} />
          <img className={'kartinki3'} src={'/images/3.png'} />
          <img className={'kartinki04'} src={'/images/4.png'} />
        </div>
        <div>
        <div className="pod0">
            Подпишитесь на наш аккаунт @A'beauty и узнавайте
            о новиках и акциях первыми
          </div>
          <div className="Best">Продукты, завоевавшие любовь наших клиентов</div>
          <img className={'kartinki11'} src={'/images/p_1.png'}></img>
          <img className={'kartinki12'} src={'/images/p_2 1.png'}></img>
          <img className={'kartinki13'} src={'/images/p_3 1.png'}></img>
         <div className="Best1">Косметика – философия женщин!</div>
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
          <img className={'g2'} src={'/images/g2.png'}></img>
          <img className={'g3'} src={'/images/g3png'}></img>
          <img className={'g4'} src={'/images/g4.png'}></img>
        </div>
        <div className={'contact'}>
          <img className={'Cont'} src={'/images/Rectangle 38.png'}></img>
          
        </div>
      </div>
      
      <div className={'footer'}>
      </div>
    </div>
  )
}
export default HomePage