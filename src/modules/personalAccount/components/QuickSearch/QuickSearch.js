import React from 'react'
import './QuickSearch.css'

const QuickSearch = (props) => {
  return (
    <div className="c_quick_search clearfix">
      <form action="#" method="GET">
        <div className="search_form">
          <input className="search_query" type="text" placeholder={props.placeholder} />
          <input className="search_reset" type="reset" title="Очистить" value="Очистить" />
          <input className="search_submit hidden" type="submit" value="Найти" />
        </div>
        <div className="search_results">
          <div className="search_result_line">строка строка строка</div>
          <div className="search_result_line">строка строка строка строка строка строка</div>
          <div className="search_result_line">Сравнительная характеристика на устройства производства Siemens и Bosh (от 12.03.2013).xls</div>
        </div>
      </form>
    </div>
  )
}

export default QuickSearch
