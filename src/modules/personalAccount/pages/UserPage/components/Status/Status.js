import React from 'react'
import {Link} from 'react-router-dom'

const Status = (props) => {

  const state = {
    status: {
      editMode: false,
    }
  }

  const activateEditMode = () => {
    // state.status.editMode = true
    // debugger
  }

  const deactivateEditMode = () => {

  }

  return (
    <div className="status_text">
      <span onDoubleClick = { activateEditMode }>{ props.status }&nbsp;&nbsp;</span>
      <Link className="change_status" to="">изменить статус</Link>

      { state.status.editMode &&
        <div onBlur = { deactivateEditMode } className="c_change_status_form">
          <textarea className="c_post_comment_area" value={ props.status }></textarea>

          <div className="save_button_wrapper">
            <input className="c_status_button" type="submit" value="Сохранить"/>
          </div>
        </div>
      }
    </div>
  )
}

export default Status
