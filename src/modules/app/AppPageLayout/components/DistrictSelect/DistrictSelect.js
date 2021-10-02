import React from 'react'
import {Link} from 'react-router-dom'

const DistrictSelect = () => {
  return(
    <div className="c_district_select">
      <div className="selected_district">
        Район: <span className="selected_district_name">Гатчина и Гатчинский район</span> <i className="down-arrow"></i>
        <ul className="hover_district_list">
          <li className="list_item"><Link to="">Гатчина и Гатчинский район</Link></li>
          <li className="list_item"><Link to="">Бокситогорск и Бокситогорский район</Link></li>
          <li className="list_item"><Link to="">Волосово и Волосовский район</Link></li>
          <li className="list_item"><Link to="">Волхов и Волховский район</Link></li>
          <li className="list_item"><Link to="">Всеволожск и Всеволожский район</Link></li>
          <li className="list_item"><Link to="">Выборг и Выборгский район</Link></li>
          <li className="list_item"><Link to="">Кингисепп и Кингисеппский район</Link></li>
          <li className="list_item"><Link to="">Кириши И Киришский район</Link></li>
          <li className="list_item"><Link to="">Кировск и Кировский район</Link></li>
          <li className="list_item"><Link to="">Лодейное поле и Лодейнопольский район</Link></li>
          <li className="list_item"><Link to="">Ломоносов и Ломоносовский район</Link></li>
          <li className="list_item"><Link to="">Луга и Лужский район</Link></li>
          <li className="list_item"><Link to="">Подпорожье и Подпорожский район</Link></li>
          <li className="list_item"><Link to="">Приозерск и Приозерский район</Link></li>
          <li className="list_item"><Link to="">Сланцы и Сланцевский район</Link></li>
          <li className="list_item"><Link to="">Тихвин и Тихвинский район</Link></li>
          <li className="list_item"><Link to="">Тосно и Тосненский район</Link></li>
          <li className="list_item"><Link to="">Санкт-Петергург</Link></li>
          <li className="list_item"><Link to="">Другой</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default DistrictSelect
