import './style.scss'

const SkidkiPage = () => {
  return (
    <div className="katalog">
      <div class={"line"}></div>
      <img className={'kartinki1'} src={'/images/20.png'}></img>
      <div className="katalog_header">
        <h1 class="sohr1">Просто радуйся. Улыбайся.<br></br> Носи помаду!</h1>
        <div>
          <div className="Pr11">Присоединяйтесь к нам</div>
          <div className="Pr111">
            Подпишитесь на наш аккаунт @A'beauty<br></br> и узнавайте о
            новиках и акциях первыми
          </div>
          <button className={'but1'}>Подробнее</button>
        </div>
        <img className={'kartinki4'} src={'/images/4.png'} />
        <h3 className="product">Каталог косметики</h3>
        <div className={'tovars'}>
          <div className={'tovar'}>
            <img className={'t1'} src={'/images/g1.png'}></img>
            <table>
              <tr>
                <th>Sun</th>
                <th>90pуб</th>
              </tr>
              <tr>
                <td>бомбочка для ванны</td>
                <td>20g</td>
              </tr>
            </table>
            <div>
              <button className={'Podrob'}>Подробнее</button>
            </div>
          </div>
          <div className={'tovar'}>
            <img className={'t2'} src={'/images/t2.png'}></img>
            <table>
              <tr>
                <th>Levender</th>
                <th>290pуб</th>
              </tr>
              <tr>
                <td>мыло ручной работы</td>
                <td>50g</td>
              </tr>
            </table>
            <div>
              <button className={'Podrob'}>Подробнее</button>
            </div>
          </div>
          <div className={'tovar'}>
            <img className={'t3'} src={'/images/t3.png'}></img>
            <table>
              <tr>
                <th>Lotos</th>
                <th>890pуб</th>
              </tr>
              <tr>
                <td>маска для лица</td>
                <td>50ml</td>
              </tr>
            </table>
            <div>
              <button className={'Podrob'}>Подробнее</button>
            </div>
          </div>
          <div className={'tovar'}>
            <img className={'t4'} src={'/images/t4.png'}></img>
            <table>
              <tr>
                <th>Coconut</th>
                <th>990pуб</th>
              </tr>
              <tr>
                <td>масло для тела</td>
                <td>300ml</td>
              </tr>
            </table>
            <div>
              <button className={'Podrob'}>Подробнее</button>
            </div>
          </div>
          <div className={'tovar'}>
            <img className={'t5'} src={'/images/t5.png'}></img>
            <table>
              <tr>
                <th>Clean</th>
                <th>490pуб</th>
              </tr>
              <tr>
                <td>маска для лица</td>
                <td>100g</td>
              </tr>
            </table>
            <div>
              <button className={'Podrob'}>Подробнее</button>
            </div>
          </div>
          <div className={'tovar'}>
            <img className={'t6'} src={'/images/t6.png'}></img>
            <table>
              <tr>
                <th>Violet</th>
                <th>890pуб</th>
              </tr>
              <tr>
                <td>крем для лица</td>
                <td>50ml</td>
              </tr>
            </table>
            <div>
              <button className={'Podrob'}>Подробнее</button>
            </div>
          </div>
          <div className={'tovar'}>
            <img className={'t7'} src={'/images/t7.png'}></img>
            <table>
              <tr>
                <th>Paradise</th>
                <th>590pуб</th>
              </tr>
              <tr>
                <td>минеральная пудра</td>
                <td>15g</td>
              </tr>
            </table>
            <div>
              <button className={'Podrob'}>Подробнее</button>
            </div>
          </div>
          <div className={'tovar'}>
            <img className={'t8'} src={'/images/t8.png'}></img>
            <table>
              <tr>
                <th>Milk</th>
                <th>790pуб</th>
              </tr>
              <tr>
                <td>масло для тела</td>
                <td>150ml</td>
              </tr>
            </table>
            <div>
              <button className={'Podrob'}>Подробнее</button>
            </div>
          </div>
          <div className={'tovar'}>
            <img className={'t9'} src={'/images/t9.png'}></img>
            <table>
              <tr>
                <th>Rose</th>
                <th>890pуб</th>
              </tr>
              <tr>
                <td>крем для лица</td>
                <td>50ml</td>
              </tr>
            </table>
            <div>
              <button className={'Podrob'} href="/kartochka">
                Подробнее
              </button>
            </div>
          </div>
        </div>
        <div className="Pr12">Скидка 15 % на все товары на покупку от 5000 рублей.</div>     
      </div>
    </div>
  )
}

export default SkidkiPage