import React from 'react'
import {Link} from 'react-router-dom'

import PageLayout from './../../PageLayout/PageLayout'

import './../../components/css/lk_user_data.css'

const EditProfilePage = () => {
  return (
    <PageLayout>
      <div className="c_header_section_title">
        <Link className="c_button_large link_right" to="">Перейти к настройкам анкеты</Link> Редактирование анкеты
      </div>

      <div className="c_settings_layout clearfix">
        <div className="setting_sections_block">
          <div className="section_title">Разделы</div>
          <div className="section_link active"><Link to="">Основные настройки</Link></div>
          <div className="section_link"><Link to="">Основные настройки</Link></div>
          <div className="section_link"><Link to="">Основные настройки</Link></div>
          <div className="section_link"><Link to="">Основные настройки</Link></div>
        </div>

          <div className="layout_inner">
            <div className="layout_inner_space">

              <div className="layout_section_title">Общие настройки</div>
              <div className="title_underline"></div>

              <form>
              <div className="form_line_horiz">
                <div className="caption"><label htmlFor="name">Имя:</label></div>
                <input className="c_input full_width" id="name" type="text" />
              </div>

              <div className="form_line_horiz">
                <div className="caption"><label htmlFor="surname">Фамилия:</label></div>
                <input className="c_input full_width" id="surname" type="text" />
              </div>

              <div className="form_line_horiz">
                <div className="caption"><label htmlFor="gender">Пол:</label></div>
                <select className="full_width" id="gender">
                  <option>Женский</option>
                  <option>Мужской</option>
                </select>
              </div>

              <div className="form_line_horiz">
                <div className="caption">Дата рождения:</div>
                <select className="date_input third_part">
                  <option>День</option>
                </select>
                <select className="date_input third_part">
                  <option>День</option>
                </select>
                <select className="date_input third_part_last">
                  <option>День</option>
                </select>

                <div className="after_inputs_text">
                  <label className="c_form_checkbox"><input type="checkbox"/> <span>Не показывать</span></label>
                </div>
              </div>

              <div className="form_line_horiz">
                <div className="caption"><label htmlFor="gender">Пол:</label></div>
                <select className="full_width" id="gender">
                  <option>Женский</option>
                  <option>Мужской</option>
                </select>
              </div>

              <div className="form_line_horiz">
                <input className="c_button_settings" type="submit" value="Сохранить" />
              </div>
            </form>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default EditProfilePage
