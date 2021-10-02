import React from 'react'

import AppPageLayout from './../../app/AppPageLayout/AppPageLayout'

import Footer from './../../app/components/Footer/Footer'
import Search from './../../app/components/Search/Search'
import Sidebar from './../components/Sidebar/Sidebar'

const PageLayout = ({ children }) => (
  <AppPageLayout>
    <div className="main_content_wrapper">
      <div className="container clearfix">
      <h1 className="grandHeader">Новости Ленинградской области</h1>
        <Search />
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
