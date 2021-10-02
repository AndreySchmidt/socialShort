import React from 'react'
import {Link} from 'react-router-dom'

const Status = () => {
  return (
    <div className="status_text">
      Текст статуса!!!
      &nbsp;&nbsp;
      <Link className="change_status" to="">изменить статус</Link>

      <div className="c_change_status_form">
        <textarea className="c_post_comment_area"></textarea>

        <div className="save_button_wrapper">
          <input className="c_status_button" type="submit" value="Сохранить"/>
        </div>
      </div>
    </div>
  )
}

export default Status
