import React from 'react'
import {Link} from 'react-router-dom'

import PageLayout from './../../PageLayout/PageLayout'

import './../../../app/components/css/breadcrumbs_bar.css'
import Search from './../../../app/components/Search/Search'
import './blog_page.css'

const BlogItemPage = () => {
  return (
    <PageLayout>
      <div className="c_blog_page">
        <Search />
        <div className="c_breadcrumbs_bar">
          <Link className="back" to="#">Назад</Link>
          <div className="breadcrumbs">
            <Link to="#">Блоги</Link>
            <span className="separator">&gt;</span>
            <Link to="#">Категория</Link>
          </div>
        </div>
        <div className="blog_layout_aside">
          <Link to="#"><img src="images/pic-ava-100x100.jpg" title="Елизавета Владимировна" alt="Елизавета Владимировна" /></Link><br />
          <Link className="author" to="#">Елизавета Владимировна</Link><br />
          <span className="status online">online</span>
        </div>
        <div className="blog_layout_inner">
          <div className="date">29.10.2013</div>
          <h3 className="title">Заглавие публикации</h3>
          <div className="text">
            <p>Самонаблюдение последовательно. Краснозём, в первом приближении, неустойчиво притягивает удельный латерит, все дальнейшее далеко выходит за рамки текущего исследования и не будет здесь рассматриваться. Чувство аннигилирует депрессивный интеракционизм, что лишний раз подтверждает правоту Докучаева. Однако Э.Дюркгейм утверждал, что гумин последовательно просветляет код, однозначно свидетельствуя о неустойчивости процесса в целом. Стимул усиливает ил только в отсутствие тепло- и массообмена с окружающей средой. В ходе валового анализа пространственная вариабельность почвенного покрова выбирает гештальт одинаково по всем направлениям.</p>
            <p>Парарендзина приводит к появлению песчаный подбур, следовательно тенденция к конформизму связана с менее низким интеллектом. Стратификация, иcходя из того, что аннигилирует биокосный режим, хотя Уотсон это отрицал. Особую ценность, на наш взгляд, представляет архетип непараметрически растворяет групповой бурозём, хотя этот факт нуждается в дальнейшей тщательной экспериментальной проверке. Как мы уже знаем, лесополоса дает концептуальный коллоид, и этот процесс может повторяться многократно. С учетом всех вышеизложенных обстоятельств, можно считать допустимым, что воспитание однородно осознаёт биокосный конформизм только в отсутствие тепло- и массообмена с окружающей средой.</p>
            Проверим как выглядит список:
            <ol>
              <li>list item</li>
              <li>list item</li>
              <li>list item</li>
            </ol>
            <div className="align-center">
              <img src="images/57.jpg" alt="" />
            </div>
          </div>
          Comments component name="c_wall"
        </div>
      </div>
    </PageLayout>
  )
}

export default BlogItemPage
