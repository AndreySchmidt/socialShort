import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { getUserStatus, updateUserStatus } from './../../../../../../thunk'

const Status = ( {userId, status, getUserStatus, updateUserStatus} ) => {

  useEffect(() => {
    getUserStatus(userId)
    // setStatus(status)
  }, [userId, status])

  const [editMode, toggleEditMode] = useState(false)
  const [statusText, setStatus] = useState(status)

  const activateEditMode = () => {
    toggleEditMode (true)
  }

  const deactivateEditMode = () => {
    toggleEditMode (false)
    console.log('status', statusText)
    updateUserStatus(statusText)
  }

  const changeStatus = (e) => {
    setStatus (e.currentTarget.value)
  }

  return (
    <div className="status_text">
      <span onDoubleClick = { activateEditMode }>{ statusText || "empty"}&nbsp;&nbsp;</span>
      <Link className="change_status" to="">изменить статус</Link>

      { editMode &&
        <div onBlur = { deactivateEditMode } className="c_change_status_form">
          <textarea className="c_post_comment_area" value={ statusText } autoFocus = { true } onChange = { changeStatus }></textarea>

          <div className="save_button_wrapper">
            <input className="c_status_button" type="submit" value="Сохранить"/>
          </div>
        </div>
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    status: state.personalAccountReducer.status,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUserStatus: (userId) => dispatch(getUserStatus(userId)),
    updateUserStatus: (userStatus) => dispatch(updateUserStatus(userStatus)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Status)
// export default Status
