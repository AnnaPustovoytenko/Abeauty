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
            <img className={'t1'} src={'/images/t1.png'}></img>
            <table>
              <tr>
                <th>Sun</th>
                <th>990pуб</th>
              </tr>
              <tr>
                <td>Масло для тела</td>
                <td>100g</td>
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
                <th>Lava</th>
                <th>390pуб</th>
              </tr>
              <tr>
                <td>Мыло рдля лица</td>
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
                <th>Sakura</th>
                <th>1090pуб</th>
              </tr>
              <tr>
                <td>Лосьон для тела</td>
                <td>150ml</td>
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
                <th>Nova</th>
                <th>790pуб</th>
              </tr>
              <tr>
                <td>Молочко для тела</td>
                <td>200ml</td>
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
                <th>Luna</th>
                <th>490pуб</th>
              </tr>
              <tr>
                <td>Пудра</td>
                <td>50g</td>
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
                <th>Tina</th>
                <th>490pуб</th>
              </tr>
              <tr>
                <td>Крем против морщин</td>
                <td>150ml</td>
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
                <th>Didi</th>
                <th>890pуб</th>
              </tr>
              <tr>
                <td>Крем для рук</td>
                <td>80ml</td>
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
                <th>Star</th>
                <th>1190pуб</th>
              </tr>
              <tr>
                <td>Мыло целебное</td>
                <td>300g</td>
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
                <th>Alli</th>
                <th>390pуб</th>
              </tr>
              <tr>
                <td>Тоник</td>
                <td>450ml</td>
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