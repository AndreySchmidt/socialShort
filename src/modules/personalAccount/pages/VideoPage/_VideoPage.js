import React from 'react'
import {Link} from 'react-router-dom'

import PageLayout from './../../PageLayout/PageLayout'
import './VideoPage.css'


const VideoPage = () => {
  return (
    <PageLayout>
        <div className="c_blog_search">
            <form action="#" method="GET">
                <div className="search_form">
                    <input className="search_query" type="text" placeholder="Поиск по видеофайлам" />
                    <input className="search_submit" type="submit" value="Найти" />
                </div>
            </form>
        </div>

        <div className="c_video_index">


            <h3 className="header">Видео пользователей <Link to="#">Смотреть все</Link></h3>

            <div className="c_type_select">
                <Link to="#" className="active">Популярные</Link>
                <Link to="#">Наиболее обсуждаемые</Link>
                <Link to="#">Новые</Link>
            </div>

            <div className="video_category">

                <div className="video_row">
                    <div className="video_tmb_container">
                        <Link to="#"><img src="./images/video-thumb.jpg" className="video_img" alt="" /></Link>
                    </div>
                    <h4 className="title"><Link to="#">Заголовок видео</Link></h4>
                    <div className="descr">Краткое описание под видео об этом видео. Смотрите новые выпуски прямо у нас!</div>
                </div>

                <div className="video_row">
                    <div className="video_tmb_container">
                        <Link to="#"><img src="./images/video-thumb.jpg" className="video_img" alt="" /></Link>
                    </div>
                    <h4 className="title"><Link to="#">Заголовок видео</Link></h4>
                    <div className="descr">Краткое описание под видео об этом видео. Смотрите новые выпуски прямо у нас!</div>
                </div>

                <div className="video_row">
                    <div className="video_tmb_container">
                        <Link to="#"><img src="./images/video-thumb.jpg" className="video_img" alt="" /></Link>
                    </div>
                    <h4 className="title"><Link to="#">Заголовок видео</Link></h4>
                    <div className="descr">Краткое описание под видео об этом видео. Смотрите новые выпуски прямо у нас!</div>
                </div>

                <div className="video_row">
                    <div className="video_tmb_container">
                        <Link to="#"><img src="./images/video-thumb.jpg" className="video_img" alt="" /></Link>
                    </div>
                    <h4 className="title"><Link to="#">Заголовок видео</Link></h4>
                    <div className="descr">Краткое описание под видео об этом видео. Смотрите новые выпуски прямо у нас!</div>
                </div>

            </div>


            <h3 className="header">Видео со страниц организаций <Link to="#">Смотреть все</Link></h3>

            <div className="c_type_select">
                <Link to="#" className="active">Популярные</Link>
                <Link to="#">Наиболее обсуждаемые</Link>
                <Link to="#">Новые</Link>
            </div>

            <div className="video_category">

                <div className="video_row">
                    <div className="video_tmb_container">
                        <Link to="#"><img src="./images/video-thumb.jpg" className="video_img" alt="" /></Link>
                    </div>
                    <h4 className="title"><Link to="#">Заголовок видео</Link></h4>
                    <div className="descr">Краткое описание под видео об этом видео. Смотрите новые выпуски прямо у нас!</div>
                </div>

                <div className="video_row">
                    <div className="video_tmb_container">
                        <Link to="#"><img src="./images/video-thumb.jpg" className="video_img" alt="" /></Link>
                    </div>
                    <h4 className="title"><Link to="#">Заголовок видео</Link></h4>
                    <div className="descr">Краткое описание под видео об этом видео. Смотрите новые выпуски прямо у нас!</div>
                </div>

                <div className="video_row">
                    <div className="video_tmb_container">
                        <Link to="#"><img src="./images/video-thumb.jpg" className="video_img" alt="" /></Link>
                    </div>
                    <h4 className="title"><Link to="#">Заголовок видео</Link></h4>
                    <div className="descr">Краткое описание под видео об этом видео. Смотрите новые выпуски прямо у нас!</div>
                </div>

                <div className="video_row">
                    <div className="video_tmb_container">
                        <Link to="#"><img src="./images/video-thumb.jpg" className="video_img" alt="" /></Link>
                    </div>
                    <h4 className="title"><Link to="#">Заголовок видео</Link></h4>
                    <div className="descr">Краткое описание под видео об этом видео. Смотрите новые выпуски прямо у нас!</div>
                </div>

            </div>


            <h3 className="header">Видео с мероприятий <Link to="#">Смотреть все</Link></h3>

            <div className="c_type_select">
                <Link to="#" className="active">Популярные</Link>
                <Link to="#">Наиболее обсуждаемые</Link>
                <Link to="#">Новые</Link>
            </div>

            <div className="video_category">

                <div className="video_row">
                    <div className="video_tmb_container">
                        <Link to="#"><img src="./images/video-thumb.jpg" className="video_img" alt="" /></Link>
                    </div>
                    <h4 className="title"><Link to="#">Заголовок видео</Link></h4>
                    <div className="descr">Краткое описание под видео об этом видео. Смотрите новые выпуски прямо у нас!</div>
                </div>

                <div className="video_row">
                    <div className="video_tmb_container">
                        <Link to="#"><img src="./images/video-thumb.jpg" className="video_img" alt="" /></Link>
                    </div>
                    <h4 className="title"><Link to="#">Заголовок видео</Link></h4>
                    <div className="descr">Краткое описание под видео об этом видео. Смотрите новые выпуски прямо у нас!</div>
                </div>

                <div className="video_row">
                    <div className="video_tmb_container">
                        <Link to="#"><img src="./images/video-thumb.jpg" className="video_img" alt="" /></Link>
                    </div>
                    <h4 className="title"><Link to="#">Заголовок видео</Link></h4>
                    <div className="descr">Краткое описание под видео об этом видео. Смотрите новые выпуски прямо у нас!</div>
                </div>

                <div className="video_row">
                    <div className="video_tmb_container">
                        <Link to="#"><img src="./images/video-thumb.jpg" className="video_img" alt="" /></Link>
                    </div>
                    <h4 className="title"><Link to="#">Заголовок видео</Link></h4>
                    <div className="descr">Краткое описание под видео об этом видео. Смотрите новые выпуски прямо у нас!</div>
                </div>

            </div>


            <div className="c_video_last_comments clearfix">
                <h3 className="header">Последние комментарии</h3>
                <div className="video_container">
                    <Link to="#"><img src="./images/video-last-comment.jpg" className="video_img" alt="" /></Link>
                </div>
                <div className="comment_list">
                    <div className="comment ">
                        <Link to="#"><img className="user-avatar" src="images/wall-avatar-1.jpg" alt="" /></Link>
                        <Link to="#" className="name">Павел Кравцов</Link>
                        <div className="text">Супер мне понравилось.</div>
                        <span title="Добавлено: 29.10.2013" className="date">29.10.2013</span>
                    </div>
                    <div className="comment">
                        <Link to="#"><img className="user-avatar" src="images/wall-avatar-1.jpg" alt="" /></Link>
                        <Link to="#" className="name">Павел Кравцов</Link>
                        <div className="text">С пивасом потянет.</div>
                        <span title="Добавлено: 29.10.2013" className="date">29.10.2013</span>
                    </div>
                    <div className="comment ">
                        <Link to="#"><img className="user-avatar" src="images/wall-avatar-1.jpg" alt="" /></Link>
                        <Link to="#" className="name">Павел Кравцов</Link>
                        <div className="text">Раньше ученые полагали, что трехкомпонентное образование распознает диэтиловый эфир, однако между карбоксильной группой и аминогруппой может возникнуть солевой мостик.</div>
                        <span title="Добавлено: 29.10.2013" className="date">29.10.2013</span>
                    </div>
                </div>
            </div>

        </div>
    </PageLayout>
  )
}

export default VideoPage
