import React from 'react'
import {Link} from 'react-router-dom'

import pic1 from './../../../app/AppPageLayout/images/pic-1.jpg'
import catalog from './../../../app/AppPageLayout/images/catalog.jpg'
import eventpic from './../../../app/AppPageLayout/images/event-pic.jpg'

import PageLayout from './../../PageLayout/PageLayout'
import Pagination from './../../../app/components/Pagination/Pagination'

import './MyListPage.css'
import './lk_my_list_remark.css'
import './lk_my_list_controls.css'
import './../../components/css/lk_user_data.css'

const MyListPage = () => {
  return (
    <PageLayout>
      <div className="c_header_section_title">Мой список</div>

      <div className="c_settings_layout clearfix">
        <div className="setting_sections_block">
          <div className="section_title">Фильтры поиска</div>

          <div className="section_link active"><Link to="#">Все записи</Link></div>
          <div className="section_link"><Link to="#">Страницы организаций</Link></div>
          <div className="section_link"><Link to="#">Недвижимость</Link></div>
          <div className="section_link"><Link to="#">Доска объявлений</Link></div>
          <div className="section_link"><Link to="#">Товары</Link></div>
          <div className="section_link"><Link to="#">Мероприятия</Link></div>
          <div className="section_link"><Link to="#">Вакансии</Link></div>
          <div className="section_link"><Link to="#">Резюме</Link></div>
        </div>

        <div className="layout_inner">
          <div className="layout_inner_space">

          <div className="c_lk_my_list">

            <div className="c_type_select">
              <Link className="active" to="#">Все</Link>
              <Link to="#">Только с моими заметками</Link>
            </div>

            <div className="c_quick_search clearfix">
              <form action="#" method="GET">
                <div className="search_form">
                  <input className="search_query" type="text" placeholder="Быстрый поиск" />
                  <input className="search_reset" type="reset" value="Очистить" />
                  <input className="search_submit hidden" type="submit" value="Найти" />
                </div>
              </form>
            </div>

            <div className="list_item clearfix">

              <h4 className="title"><Link to="#">Ижора-Строй. Материалы и оборудование с доставкой по России.</Link></h4>

              <div className="contacts">
                <span className="phone">+7 (921) 344-56-77</span>
                <Link className="mail" to="mailto:company@yandex.ru">company@yandex.ru</Link>
                <Link className="site" to="">www.company-site.ru</Link>
              </div>
              <div className="text">Межкомнатные двери от производителя</div>
              <div className="links">
                <Link to="">Скидки и акции (3)</Link>
                <Link to="">Отзывы (4)</Link>
                <Link to="">Товары (34)</Link>
                <Link to="">Новости</Link>
                <Link to="">Фото </Link>
                <Link to="">Видео</Link>
              </div>

              <div className="c_lk_my_list_controls">
                <Link className="remove hidden" to="">Удалить заметку</Link>
                <Link className="edit hidden" to="">Редактировать заметку</Link>
                <Link className="add" to="">Добавить заметку</Link>
                <Link className="remove last" to="">Удалить из списка</Link>
              </div>

              <div className="c_lk_my_list_remark hidden">
                <div className="remark hidden"></div>
                <form className="remark_form" action="#">
                  <div>
                      <textarea className="field" placeholder="Текст заметки будет виден только вам."></textarea>
                      <input className="c_button_large submit" type="submit" value="Сохранить" />
                  </div>
                </form>
              </div>

            </div>

            <div className="list_item clearfix">

              <h4 className="title"><Link to="#">Ижора-Строй. Материалы и оборудование с доставкой по России.</Link></h4>

              <div className="contacts">
                <span className="phone">+7 (921) 344-56-77</span>
                <Link className="mail" to="mailto:company@yandex.ru">company@yandex.ru</Link>
                <Link className="site" to="">www.company-site.ru</Link>
              </div>
              <div className="text">Межкомнатные двери от производителя</div>
              <div className="links">
                <Link to="">Скидки и акции (3)</Link>
                <Link to="">Отзывы (4)</Link>
                <Link to="">Товары (34)</Link>
                <Link to="">Новости</Link>
                <Link to="">Фото </Link>
                <Link to="">Видео</Link>
              </div>

              <div className="c_lk_my_list_controls">
                <Link className="remove hidden" to="">Удалить заметку</Link>
                <Link className="edit hidden" to="">Редактировать заметку</Link>
                <Link className="add" to="">Добавить заметку</Link>
                <Link className="remove last" to="">Удалить из списка</Link>
              </div>

              <div className="c_lk_my_list_remark">
                <div className="remark hidden"></div>
                <form className="remark_form" action="#">
                  <div>
                    <textarea className="field" placeholder="Текст заметки будет виден только вам."></textarea>
                    <input className="c_button_large submit" type="submit" value="Сохранить" />
                  </div>
                </form>
              </div>

            </div>

            <div className="list_item clearfix">

              <h4 className="title"><Link to="#">Ижора-Строй. Материалы и оборудование с доставкой по России.</Link></h4>

              <div className="contacts">
                <span className="phone">+7 (921) 344-56-77</span>
                <Link className="mail" to="mailto:company@yandex.ru">company@yandex.ru</Link>
                <Link className="site" to="">www.company-site.ru</Link>
              </div>
              <div className="text">Межкомнатные двери от производителя</div>
              <div className="links">
                <Link to="">Скидки и акции (3)</Link>
                <Link to="">Отзывы (4)</Link>
                <Link to="">Товары (34)</Link>
                <Link to="">Новости</Link>
                <Link to="">Фото </Link>
                <Link to="">Видео</Link>
              </div>

              <div className="c_lk_my_list_controls">
                <Link className="remove" to="">Удалить заметку</Link>
                <Link className="edit" to="">Редактировать заметку</Link>
                <Link className="add hidden" to="">Добавить заметку</Link>
                <Link className="remove last" to="">Удалить из списка</Link>
              </div>

              <div className="c_lk_my_list_remark">
                <div className="remark">Пример добавленой заметки с возможностью редактирования и удаления.</div>
                <form className="remark_form hidden" action="#">
                  <div>
                    <textarea className="field">Пример добавленой заметки с возможностью редактирования и удаления.</textarea>
                    <input className="c_button_large submit" type="submit" value="Сохранить" />
                  </div>
                </form>
              </div>

            </div>

            <div className="list_item clearfix">

              <div className="pic_container">
                <Link to="#"><img src={pic1} alt="" /></Link>
              </div>

              <div className="inner">
                <h4 className="title title-line"><Link to="#">2-к квартира, 53м, 1/12 эт.</Link></h4>
                <div>1 955 000 руб.</div>
                <div>Агенство</div>
                <div className="date">Добавлено: 21.02.2013</div>
              </div>

              <div className="c_lk_my_list_controls">
                <Link className="remove hidden" to="">Удалить заметку</Link>
                <Link className="edit hidden" to="">Редактировать заметку</Link>
                <Link className="add" to="">Добавить заметку</Link>
                <Link className="remove last" to="">Удалить из списка</Link>
              </div>

              <div className="c_lk_my_list_remark hidden">
                <div className="remark hidden"></div>
                <form className="remark_form" action="#">
                  <div>
                    <textarea className="field" placeholder="Текст заметки будет виден только вам."></textarea>
                    <input className="c_button_large submit" type="submit" value="Сохранить" />
                  </div>
                </form>
              </div>

            </div>

            <div className="list_item clearfix">

              <div className="pic_container">
                <Link to="#"><img src={pic1} alt="" /></Link>
              </div>

              <div className="inner">
                <h4 className="title title-line"><Link to="#">Колеса в сборе ВАЗ 2107 на литых дисках R13</Link></h4>
                <div>12 000 руб.</div>
                <br />
                <div className="date">Добавлено: 21.02.2013</div>
              </div>

              <div className="c_lk_my_list_controls">
                <Link className="remove hidden" to="">Удалить заметку</Link>
                <Link className="edit hidden" to="">Редактировать заметку</Link>
                <Link className="add" to="">Добавить заметку</Link>
                <Link className="remove last" to="">Удалить из списка</Link>
              </div>

              <div className="c_lk_my_list_remark hidden">
                <div className="remark hidden"></div>
                <form className="remark_form" action="#">
                  <div>
                    <textarea className="field" placeholder="Текст заметки будет виден только вам."></textarea>
                    <input className="c_button_large submit" type="submit" value="Сохранить" />
                  </div>
                </form>
              </div>

            </div>

            <div className="list_item clearfix">

              <div className="image_catalog">
                <Link to="#"><img className="image" src={catalog} alt="" /></Link>
              </div>

              <div className="inner">
                <h4 className="title title-catalog"><Link to="#">Наматрасник "Стебель бамбука 160x200.</Link></h4>
                <div className="text_line">
                  <span className="label">Цена:</span>
                  <strong className="price">1 300 руб.</strong>
                  <span className="avalible">В наличии</span>
                </div>
                <div className="text_line">
                  <span className="label">Рейтинг:</span>
                  <strong className="rate">+ 50</strong>
                  <Link className="reviews" to="#">Отзывы (407)</Link>
                </div>
                <Link className="more" to="#">Узнать больше</Link>
              </div>

              <div className="c_lk_my_list_controls">
                <Link className="remove hidden" to="">Удалить заметку</Link>
                <Link className="edit hidden" to="">Редактировать заметку</Link>
                <Link className="add" to="">Добавить заметку</Link>
                <Link className="remove last" to="">Удалить из списка</Link>
              </div>

              <div className="c_lk_my_list_remark hidden">
                <div className="remark hidden"></div>
                <form className="remark_form" action="#">
                  <div>
                    <textarea className="field" placeholder="Текст заметки будет виден только вам."></textarea>
                    <input className="c_button_large submit" type="submit" value="Сохранить" />
                  </div>
                </form>
              </div>

            </div>

            <div className="list_item clearfix">

              <h4 className="title"><Link to="#">Менеджер по работе с клиентами</Link></h4>
              <div>до 35 000 руб.</div>
              <div>Банк Русский Стандарт</div>
              <div className="date">Добавлено: 21.02.2013</div>

              <div className="c_lk_my_list_controls">
                <Link className="remove hidden" to="">Удалить заметку</Link>
                <Link className="edit hidden" to="">Редактировать заметку</Link>
                <Link className="add" to="">Добавить заметку</Link>
                <Link className="remove last" to="">Удалить из списка</Link>
              </div>

              <div className="c_lk_my_list_remark hidden">
                <div className="remark hidden"></div>
                <form className="remark_form" action="#">
                  <div>
                    <textarea className="field" placeholder="Текст заметки будет виден только вам."></textarea>
                    <input className="c_button_large submit" type="submit" value="Сохранить" />
                  </div>
                </form>
              </div>

            </div>

            <div className="list_item clearfix">

              <h4 className="title"><Link to="#">Резюме/вакансии</Link></h4>
              <div>45 000 - 60 000 руб.</div>
              <div className="bold">Анна, 28 лет. Опыт работы: 3-5 лет</div>
              <div className="date">Добавлено: 21.02.2013</div>

              <div className="c_lk_my_list_controls">
                <Link className="remove hidden" to="">Удалить заметку</Link>
                <Link className="edit hidden" to="">Редактировать заметку</Link>
                <Link className="add" to="">Добавить заметку</Link>
                <Link className="remove last" to="">Удалить из списка</Link>
              </div>

              <div className="c_lk_my_list_remark hidden">
                <div className="remark hidden"></div>
                <form className="remark_form" action="#">
                  <div>
                    <textarea className="field" placeholder="Текст заметки будет виден только вам."></textarea>
                    <input className="c_button_large submit" type="submit" value="Сохранить" />
                  </div>
                </form>
              </div>

            </div>

            <div className="list_item clearfix">

              <div className="image_event">
                <Link to="#"><img className="image" src={eventpic} alt="" /></Link>
              </div>

              <div className="inner">
                <div className="title title-line"><Link to="#">RETRO-PARTY в ночном клубе Брюлов!</Link></div>
                <div className="text">Ночной клуб Брюлов ждет любтелей хорошо отдохнуть. Уже в эту пятницу долгожданное Retro-Party и море новых коктелей от лучших барменов...</div>
                <strong className="blue">7 декабря 2013 в 20:00</strong>
                <div className="category">Категория: <Link to="#">Дискотеки</Link></div>
                  <div className="links">
                    <Link to="#">Коментарии (14)</Link>
                    <Link to="#">Фото отчет (30)</Link>
                    <Link to="#">Видео отчет (5)</Link>
                  </div>
              </div>

              <div className="c_lk_my_list_controls">
                <Link className="remove hidden" to="">Удалить заметку</Link>
                <Link className="edit hidden" to="">Редактировать заметку</Link>
                <Link className="add" to="">Добавить заметку</Link>
                <Link className="remove last" to="">Удалить из списка</Link>
              </div>

              <div className="c_lk_my_list_remark hidden">
                <div className="remark hidden"></div>
                <form className="remark_form" action="#">
                  <div>
                    <textarea className="field" placeholder="Текст заметки будет виден только вам."></textarea>
                    <input className="c_button_large submit" type="submit" value="Сохранить" />
                  </div>
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>
      </div>
      <Pagination />
    </PageLayout>
  )
}

export default MyListPage
