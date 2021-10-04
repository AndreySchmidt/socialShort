import React from 'react'

import './../../app/AppPageLayout/css/lk_page.css'
import AppPageLayout from './../../app/AppPageLayout/AppPageLayout'

import Footer from './../../app/components/Footer/Footer'
import Sidebar from './../pages/UserPage/components/Sidebar/Sidebar'

const PageLayout = ({ children }) => (
  <AppPageLayout>
    <div className="main_content_wrapper">
      <div className="container clearfix">
        <Sidebar />
        <div className="main_content">
          {children}
        </div>
      </div>
      <Footer />
      <div className="trasparent-stripe-left"></div>
      <div className="trasparent-stripe-right"></div>
    </div>
  </AppPageLayout>
)

export default PageLayout
