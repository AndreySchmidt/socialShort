import React from 'react'
import {Link} from 'react-router-dom'

const AdsListTopSection = () => {
  return (
    <div className="c_ads_list_top_section">
        <div className="how_to"><Link to="/">Как сюда попасть? </Link></div>

        <div className="ads_list clearfix">
            <div className="list_item">
                <Link className="image" to="/"><img src="images/top-ad-1.jpg" alt=""/></Link>
                <div className="title">
                  <Link to="/">
                    Затирочная машина STRONG ST 36-2T, Великобритания Великобритания Великобритания
                  </Link>
                </div>
            </div>
            <div className="list_item">
                <Link className="image" to="/"><img src="images/top-ad-2.jpg" alt=""/></Link>
                <div className="title"><Link to="/">Квартиры на часы, сутки.</Link></div>
            </div>
            <div className="list_item">
                <Link className="image" to="/"><img src="images/top-ad-3.jpg" alt=""/></Link>
                <div className="title"><Link to="/">Свадебные платья на любой вкус</Link></div>
            </div>
            <div className="list_item">
                <Link className="image" to="/"><img src="images/top-ad-4.jpg" alt=""/></Link>
                <div className="title"><Link to="/">Prima-SIP-Office</Link></div>
            </div>
            <div className="list_item">
                <Link className="image" to="/"><img src="images/top-ad-5.jpg" alt=""/></Link>
                <div className="title"><Link to="/">Festool,Protool, фестул, протул.</Link></div>
            </div>
            <div className="list_item">
                <Link className="image" to="/"><img src="images/top-ad-4.jpg" alt=""/></Link>
                <div className="title"><Link to="/">Prima-SIP-Office</Link></div>
            </div>
            <div className="list_item">
                <Link className="image" to="/"><img src="images/top-ad-3.jpg" alt=""/></Link>
                <div className="title"><Link to="/">Свадебные платья на любой вкус</Link></div>
            </div>
        </div>
    </div>
  )
}

export default AdsListTopSection
