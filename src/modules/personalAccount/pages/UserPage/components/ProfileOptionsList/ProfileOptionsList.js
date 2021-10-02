import React from 'react'
import {Link} from 'react-router-dom'

const ProfileOptionsList = () => {
  return (
    <div className="c_profile_options_list">
        <div className="line clearfix">
          <div className="item">День рождения</div>
          <div className="value">2 марта 1985</div>
        </div>
        <div className="line clearfix">
          <div className="item">Район</div>
          <div className="value">Гатчина и Гатчинский район</div>
        </div>
        <div className="line clearfix">
          <div className="item">Семейное положение</div>
          <div className="value">Замужем</div>
        </div>
        <div className="line clearfix">
          <div className="item">Деятельность</div>
          <div className="value">Одежда модных брендов</div>
        </div>

        <div className="separator"></div>

        <div className="line clearfix">
          <div className="item">Телефон</div>
          <div className="value">8 (921) 344-44-33</div>
        </div>
        <div className="line clearfix">
          <div className="item">E-mail</div>
          <div className="value"><Link to="mailto:email@mai.ru">email@mai.ru</Link></div>
        </div>
        <div className="line clearfix">
          <div className="item">ICQ</div>
          <div className="value">435627646456546</div>
        </div>
        <div className="line clearfix">
          <div className="item">Skype</div>
          <div className="value">skype_123</div>
        </div>
    </div>
  )
}

export default ProfileOptionsList
