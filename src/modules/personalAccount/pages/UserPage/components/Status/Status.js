import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const Status = (props) => {

  // const state = {
  //   status: {
  //     text: "",
  //     editMode: false,
  //   }
  // }

  const [editMode, toggleEditMode] = useState(false)
  const [status, setStatus] = useState(props.status)

  const activateEditMode = () => {
    toggleEditMode (true)
  }

  const deactivateEditMode = () => {
    toggleEditMode (false)
  }

  const changeStatus = (e) => {
    setStatus (e.currentTarget.value)
  }

  return (
    <div className="status_text">
      <span onDoubleClick = { activateEditMode }>{ status || "empty"}&nbsp;&nbsp;</span>
      <Link className="change_status" to="">изменить статус</Link>

      { editMode &&
        <div onBlur = { deactivateEditMode } className="c_change_status_form">
          <textarea className="c_post_comment_area" value={ status } autoFocus = { true } onChange = { changeStatus }></textarea>

          <div className="save_button_wrapper">
            <input className="c_status_button" type="submit" value="Сохранить"/>
          </div>
        </div>
      }
    </div>
  )
}

export default Status
