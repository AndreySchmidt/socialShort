import React from 'react'
import {Link} from 'react-router-dom'

import blog_files57 from './../../../../images/57.jpg'

import PageLayout from './../../PageLayout/PageLayout'

const MyBlogItemPage = () => {
  return (
    <PageLayout>
      <div className="c_header_section_title">
        <Link className="c_button_large link_right" to="#">Добавить запись</Link>
        Мой блог
      </div>

      <div className="c_settings_layout clearfix">
        <div className="setting_sections_block">
          <div className="section_title">Фильтры поиска</div>

          <div className="section_link active"><Link to="#">Все записи</Link> </div>
          <div className="section_link"><Link to="#">С комментариями</Link> </div>
        </div>

          <div className="layout_inner">
            <div className="layout_inner_space">
              <div className="c_lk_blog_page">

                <div className="c_lk_inner_breadcrumbs">
                  <Link className="back" to="#">Вернуться ко всем записям</Link>
                  <Link className="delete" to="#">Удалить запись</Link>
                </div>

                <div className="date">29.10.2013</div>
                <h3 className="title">Заглавие публикации</h3>

                <div className="publication">

                  <p>Самонаблюдение последовательно. Краснозём, в первом приближении, неустойчиво притягивает удельный латерит, все дальнейшее далеко выходит за рамки текущего исследования и не будет здесь рассматриваться. Чувство аннигилирует депрессивный интеракционизм, что лишний раз подтверждает правоту Докучаева. Однако Э.Дюркгейм утверждал, что гумин последовательно просветляет код, однозначно свидетельствуя о неустойчивости процесса в целом. Стимул усиливает ил только в отсутствие тепло- и массообмена с окружающей средой. В ходе валового анализа пространственная вариабельность почвенного покрова выбирает гештальт одинаково по всем направлениям.</p>

                  <p>Парарендзина приводит к появлению песчаный подбур, следовательно тенденция к конформизму связана с менее низким интеллектом. Стратификация, иcходя из того, что аннигилирует биокосный режим, хотя Уотсон это отрицал. Особую ценность, на наш взгляд, представляет архетип непараметрически растворяет групповой бурозём, хотя этот факт нуждается в дальнейшей тщательной экспериментальной проверке. Как мы уже знаем, лесополоса дает концептуальный коллоид, и этот процесс может повторяться многократно. С учетом всех вышеизложенных обстоятельств, можно считать допустимым, что воспитание однородно осознаёт биокосный конформизм только в отсутствие тепло- и массообмена с окружающей средой.</p>

                  Проверим как выглядит список:
                  <ol>
                    <li>list item</li>
                    <li>list item</li>
                    <li>list item</li>
                  </ol>

                  <div className="align-center">
                    <img src={blog_files57} alt="image max width 470px" />
                  </div>

                </div>
              c_wall
              Компонент комментариев component name="c_wall"
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default MyBlogItemPage
