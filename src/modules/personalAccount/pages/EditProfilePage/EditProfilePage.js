import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import { connect } from 'react-redux'
import { compose } from 'redux'
import { savePhoto } from './../../../../thunk'
import AuthRedirect from './../../../app/components/HOC/AuthRedirect'

import PageLayout from './../../PageLayout/PageLayout'

import './../../components/css/lk_user_data.css'

const EditProfilePage = ( { userId, savePhoto } ) => {
  const onSelectFile = ( e ) => {

    if( e.target.files[0] && e.target.files.length ){
      // console.log('onSelectFile e', e)
      savePhoto(e.target.files[0])
    }
    // return true
  }
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
                  <option>Мужской</option>
                  <option>Женский</option>
                </select>
              </div>

              <div className="form_line_horiz">
                <input className="c_button_settings" type="file" onChange = { onSelectFile } />
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

const mapStateToProps = ( state ) => {
  return {
    userId: state.commonReducer.id,
  }
}

// export default connect( mapStateToProps, { savePhoto })( EditProfilePage )
export default compose( AuthRedirect, withRouter, connect( mapStateToProps, { savePhoto } ) )( EditProfilePage )
