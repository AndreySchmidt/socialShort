import React from 'react'

import AppPageLayout from './../../app/AppPageLayout/AppPageLayout'

import Footer from './../../app/components/Footer/Footer'

const PageLayout = ({ children }) => (
  <AppPageLayout>
    <div className="main_content_wrapper">
      <div className="container clearfix">

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
