import React from 'react'
import {Link} from 'react-router-dom'

const ProfileOptionsList = ({lookingForAJob, lookingForAJobDescription, fullName, contacts}) => {
  return (
    <div className="c_profile_options_list">
        <div className="line clearfix">
          <div className="item">lookingForAJob</div>
          <div className="value">{lookingForAJob}</div>
        </div>
        <div className="line clearfix">
          <div className="item">lookingForAJobDescription</div>
          <div className="value">{lookingForAJobDescription}</div>
        </div>
        <div className="line clearfix">
          <div className="item">fullName</div>
          <div className="value">{fullName}</div>
        </div>

        <div className="separator"></div>

        <div className="line clearfix">
          <div className="item">github</div>
          <div className="value">{contacts.github}</div>
        </div>
        <div className="line clearfix">
          <div className="item">vk</div>
          <div className="value">{contacts.vk}</div>
        </div>
        <div className="line clearfix">
          <div className="item">facebook</div>
          <div className="value">{contacts.facebook}</div>
        </div>
        <div className="line clearfix">
          <div className="item">instagram</div>
          <div className="value">{contacts.instagram}</div>
        </div>
        <div className="line clearfix">
          <div className="item">mainLink</div>
          <div className="value">{contacts.mainLink}</div>
        </div>
        <div className="line clearfix">
          <div className="item">youtube</div>
          <div className="value">{contacts.youtube}</div>
        </div>
        <div className="line clearfix">
          <div className="item">website</div>
          <div className="value">{contacts.website}</div>
        </div>
        <div className="line clearfix">
          <div className="item">twitter</div>
          <div className="value">{contacts.twitter}</div>
        </div>

        <div className="separator"></div>

        <div className="line clearfix">
          <div className="item">???????? ????????????????</div>
          <div className="value">2 ?????????? 1985</div>
        </div>
        <div className="line clearfix">
          <div className="item">??????????</div>
          <div className="value">?????????????? ?? ???????????????????? ??????????</div>
        </div>
        <div className="line clearfix">
          <div className="item">???????????????? ??????????????????</div>
          <div className="value">??????????????</div>
        </div>
        <div className="line clearfix">
          <div className="item">????????????????????????</div>
          <div className="value">???????????? ???????????? ??????????????</div>
        </div>

        <div className="separator"></div>

        <div className="line clearfix">
          <div className="item">??????????????</div>
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
