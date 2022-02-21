import React from "react"
import {Link} from "react-router-dom"

const PeopleItem = ({users, follow, unfollow}) => {
  return (
    <>
    {
        users && users.map(user => (
          <div className="person" key = {user.id}>
            <Link className="photo" to="#"><img alt="" src={user.photos.small != null ? user.photos.small : "images/pic-ava-100x100.jpg"} /></Link>
            <div className="first-line">
              <Link className="name" to="#">{user.name}</Link>
            </div>
            <div className="actions">
              {
                user.followed ?
                <button onClick = {() => {unfollow(user.id)}}>Unfollow</button> :
                <button onClick = {() => {follow(user.id)}}>Follow</button>
              }
            </div>
          </div>
        ))
    }
    </>
  )
}

export default PeopleItem
