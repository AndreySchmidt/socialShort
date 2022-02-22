import React from 'react'
import {Link} from 'react-router-dom'

import nophoto from './../../../../../../images/no-photo.gif'

import AsideLinks from './../AsideLinks/AsideLinks'
import BirthdayList from './../BirthdayList/BirthdayList'
import FriendsPhotoList from './../FriendsPhotoList/FriendsPhotoList'
import AlbumsList from './../AlbumsList/AlbumsList'
import VideoList from './../VideoList/VideoList'
import DocumentsList from './../DocumentsList/DocumentsList'
import PossibleFriendsList from './../PossibleFriendsList/PossibleFriendsList'

const MainContentAside = ({photo}) => {
  return (
    <div className="main_content_aside">
      <div className="avatar_image_container">
        <img className="avatar_image" src={photo || nophoto} alt="" />
      </div>
      <AsideLinks />

      <div className="c_aside_title">Сегодня день рождения</div>
      <BirthdayList />

      <div className="c_aside_title">
        <Link className="side_link" to="">1200 друзей</Link> Мои друзья
      </div>
      <FriendsPhotoList />

      <div className="c_aside_title">
        <Link className="side_link" to="">5 альбомов</Link> Фотографии
      </div>
      <AlbumsList />

      <div className="c_aside_title">
        <Link className="side_link" to="">10 видеозаписей </Link> Видео
      </div>
      <VideoList />

      <div className="c_aside_title">
        <Link className="side_link" to="">20 документов </Link> Документы
      </div>
      <DocumentsList />

      <div className="c_aside_title">Вы знакомы?</div>
      <PossibleFriendsList />
    </div>
  )
}

export default MainContentAside
