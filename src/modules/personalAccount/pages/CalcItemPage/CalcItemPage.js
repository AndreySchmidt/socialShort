import React from 'react'
import {Link} from 'react-router-dom'

import PageLayout from './../../PageLayout/PageLayout'

// import './c_calk_list.css'
// import './calculator.css'
import './../../components/css/lk_user_data.css'

const CalcItemPage = () => {
  return (
    <PageLayout>
      <div className="c_header_section_title">
        <Link className="c_button_large link_right" to="">Добавить список расходов</Link> Калькулятор расходов
      </div>

      <div className="content_container">
        <div className="calculator_header">
          <Link className="back" to="">Вернуться к спискам</Link> Заголовок списка расходов
        </div>

        <div className="form_title">Добавить статью расходов</div>

        <form>

          <div className="c_form_line_calc_horiz">
            <div className="caption"><label htmlFor="name">Название:</label></div>
            <input className="c_input calc_form_input" id="name" type="text" />
          </div>

          <div className="c_form_line_calc_horiz">
            <div className="caption"><label htmlFor="category">Категория:</label></div>
            <select id="category" className="styled">
              <option>Выберите категорию</option>
              <option>Выберите категорию</option>
            </select>
          </div>


          <div className="c_form_line_calc_horiz">
            <input className="c_button_settings calc_form" type="submit" value="Добавить" />
          </div>

        </form>


        <div className="c_divider_line"></div>

        <div className="c_print_row">
          <Link className="print" to=""><span>Распечатать список</span></Link>
        </div>

        <div className="c_calculator_table">
          <div className="row table_header">
            <div className="name cell">Наименование</div>
            <div className="price cell">Цена</div>
            <div className="quantity cell">Кол-во</div>
            <div className="total cell">Итого</div>
            <div className="options cell">&nbsp;</div>
          </div>

          <div className="row">
            <div className="name row_title cell">Банкет</div>
            <div className="price cell">&nbsp;</div>
            <div className="quantity cell">&nbsp;</div>
            <div className="total cell">&nbsp;</div>
            <div className="options cell">&nbsp;</div>
          </div>

          <div className="row colored">
            <div className="name cell">Место на одного человека</div>
            <div className="price cell">
              <input className="c_calc_input" type="text" value="1500" />
            </div>
            <div className="quantity cell">
              <input className="c_calc_input" type="text" value="10" />
            </div>
            <div className="total cell">
              <input className="c_calc_input" type="text" value="15000" />
            </div>
            <div className="options cell">
              <Link className="edit_option" to=""></Link>
              <Link className="delete_option" to=""></Link>
            </div>
          </div>

          <div className="row">
            <div className="name cell">Место на одного человека</div>
            <div className="price cell">
              <input className="c_calc_input" type="text" value="1500" />
            </div>
            <div className="quantity cell">
              <input className="c_calc_input" type="text" value="10" />
            </div>
            <div className="total cell">
              <input className="c_calc_input" type="text" value="15000" />
            </div>
            <div className="options cell">
              <Link className="edit_option" to=""></Link>
              <Link className="delete_option" to=""></Link>
            </div>
          </div>

          <div className="row colored">
            <div className="name cell">Место на одного человека</div>
            <div className="price cell">
              <input className="c_calc_input" type="text" value="1500" />
            </div>
            <div className="quantity cell">
              <input className="c_calc_input" type="text" value="10" />
            </div>
            <div className="total cell">
              <input className="c_calc_input" type="text" value="15000" />
            </div>
            <div className="options cell">
              <Link className="edit_option" to=""></Link>
              <Link className="delete_option" to=""></Link>
            </div>
          </div>

          <div className="row">
            <div className="name row_title cell">Банкет</div>
            <div className="price cell">&nbsp;</div>
            <div className="quantity cell">&nbsp;</div>
            <div className="total cell">&nbsp;</div>
            <div className="options cell">&nbsp;</div>
          </div>

          <div className="row colored">
            <div className="name cell">Место на одного человека</div>
            <div className="price cell">
              <input className="c_calc_input" type="text" value="1500" />
            </div>
            <div className="quantity cell">
              <input className="c_calc_input" type="text" value="10" />
            </div>
            <div className="total cell">
              <input className="c_calc_input" type="text" value="15000" />
            </div>
            <div className="options cell">
              <Link className="edit_option" to=""></Link>
              <Link className="delete_option" to=""></Link>
            </div>
          </div>

          <div className="row">
            <div className="name cell">Место на одного человека</div>
            <div className="price cell">
              <input className="c_calc_input" type="text" value="1500" />
            </div>
            <div className="quantity cell">
              <input className="c_calc_input" type="text" value="10" />
            </div>
            <div className="total cell">
              <input className="c_calc_input" type="text" value="15000" />
            </div>
            <div className="options cell">
              <Link className="edit_option" to=""></Link>
              <Link className="delete_option" to=""></Link>
            </div>
          </div>

        </div>

        <div className="c_print_row">
          <div className="total_price">Итого: 90 000 руб.</div>
          <Link className="print" to=""><span>Распечатать список</span></Link>
        </div>
      </div>
    </PageLayout>
  )
}

export default CalcItemPage
