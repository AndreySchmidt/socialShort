import React from 'react'
import {Link} from 'react-router-dom'

import PageLayout from './../../PageLayout/PageLayout'

import './c_calk_list.css'
import './calculator.css'
import './../../components/css/lk_user_data.css'

const CalcListPage = () => {
  return (
    <PageLayout>
      <div className="c_header_section_title">
        <Link to="" className="c_button_large link_right">Добавить список расходов</Link> Калькулятор расходов
      </div>

      <div className="content_container">
        <div className="calculator_header">Готовые списки расходов</div>

        <div className="c_calk_list">
          <Link className="name" to="/user/15/calculator_item">Свадебный банкет от фирмы "Bon Voyage"</Link>
          <Link className="control delete" to="#" title="Удалить">Удалить</Link>
          <Link className="control edit" to="#" title="Редактировать">Редактировать</Link>
        </div>

        <div className="c_calk_list">
          <Link className="name" to="/user/15/calculator_item">Свадебный от фирмы "Bon Voyage"</Link>
          <Link className="control delete" to="#" title="Удалить">Удалить</Link>
          <Link className="control edit" to="#" title="Редактировать">Редактировать</Link>
        </div>
      </div>
    </PageLayout>
  )
}

export default CalcListPage
