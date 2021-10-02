import React from 'react'
import {Link} from 'react-router-dom'

const Search = () => {
  return (
    <div className="c_ad_search_section">
    <form>
      <div className="search_form_wrapper">
        <div className="form_line">
          <div className="caption">
            <label>Тип объекта:</label>
          </div>
          <div className="elements">
            <div className="c_type_select">
              <Link className="active" to="/">Квартиры</Link>
              <Link to="/">Комнаты</Link>
              <Link to="/">Дома, дачи, коттеджи</Link>
              <Link to="/">Участки</Link>
              <Link to="/">Коммерческая недвижимость</Link>
            </div>
          </div>
        </div>
        <div className="form_line">
          <div className="caption">
            <label>Тип объявления:</label>
          </div>
          <div className="elements">
            <div className="c_type_select">
              <Link className="active" to="/">Продам</Link>
              <Link to="/">Сдам</Link>
              <Link to="/">Куплю</Link>
              <Link to="/">Сниму</Link>
            </div>
            <div className="additional_elements">
              <label className="c_form_checkbox with_sizing"><input type="checkbox"/> <span>новостройки</span></label>
              <label className="c_form_checkbox with_sizing"><input type="checkbox"/> <span>вторичка</span></label>
            </div>
          </div>
        </div>
        <div className="form_line">
          <div className="caption">
            <label>Количество комнат:</label>
          </div>
          <div className="elements top-space">
            <label className="c_form_checkbox with_sizing"><input type="checkbox" /> <span>студия</span></label>
            <label className="c_form_checkbox with_sizing"><input type="checkbox" /> <span>1</span></label>
            <label className="c_form_checkbox with_sizing"><input type="checkbox" /> <span>2</span></label>
            <label className="c_form_checkbox with_sizing"><input type="checkbox" /> <span>3</span></label>
            <label className="c_form_checkbox with_sizing"><input type="checkbox" /> <span>4</span></label>
            <label className="c_form_checkbox with_sizing"><input type="checkbox" /> <span>5+</span></label>
          </div>
        </div>
        <div className="form_line">
          <div className="caption">
            <label>Цена (руб.):</label>
          </div>
          <div className="elements">
            <select className="c_form_input period_select">
              <option>от</option>
              <option>от</option>
              <option>от</option>
              <option>от</option>
            </select>
            <span className="dash_divider">&mdash;</span>
            <select className="c_form_input period_select">
              <option>до</option>
              <option>до</option>
              <option>до</option>
              <option>до</option>
            </select>
          </div>
        </div>
        <div className="form_line">
          <div className="caption">
            <label>Общая площадь (м²):</label>
          </div>
          <div className="elements">
            <input className="c_form_input small_width" type="text "/>
            <span className="dash_divider">&mdash;</span>
            <input className="c_form_input small_width" type="text" />
            <strong className="caption-inline">Жилая:</strong>
            <input className="c_form_input small_width" type="text" />
            <span className="dash_divider">&mdash;</span>
            <input className="c_form_input small_width" type="text" />
            <strong className="caption-inline">Кухня:</strong>
            <input className="c_form_input small_width" type="text" />
            <span className="dash_divider">&mdash;</span>
            <input className="c_form_input small_width" type="text" />
          </div>
        </div>
        <div className="form_line">
          <div className="caption">
            <label>Тип дома:</label>
          </div>
          <div className="elements">
            <select className="c_form_input period_select">
              <option>Не указано</option>
              <option>Не указано</option>
              <option>Не указано</option>
              <option>Не указано</option>
            </select>
            <strong className="caption-inline">Этаж:</strong>
            <select className="c_form_input period_select">
              <option>Не указано</option>
              <option>Не указано</option>
              <option>Не указано</option>
              <option>Не указано</option>
            </select>
          </div>
        </div>
        <div className="form_line">
          <div className="caption">
            <label>За период:</label>
          </div>
          <div className="elements">
            <select className="c_form_input period_select">
              <option>Без ограничений</option>
              <option>Без ограничений</option>
              <option>Без ограничений</option>
              <option>Без ограничений</option>
            </select>
            <strong className="caption-inline">Дополнительно:</strong>
            <label><input className="with_photo_checkbox" type="checkbox"/>С фото</label>
            <label><input className="with_photo_checkbox" type="checkbox"/> Ипотека</label>
          </div>
        </div>
        <div className="form_line district">
          <div className="caption">
            <label>Район:</label>
          </div>
          <div className="elements">
            <Link to="/">Выбрать районы</Link>
            <div className="selected_districts">Гатчина и Гатчинский район, Волосово и Волосовский район</div>
          </div>
        </div>
        <div className="form_line">
          <div className="elements">
            <div className="c_search_button">
              <input className="c_button" type="submit" value="НАЙТИ"/>
            </div>
          </div>
        </div>
      </div>
    </form>
    </div>
  )
}

export default Search
