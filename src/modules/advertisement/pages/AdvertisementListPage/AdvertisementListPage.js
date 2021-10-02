import React from 'react'

import PageLayout from './../../PageLayout/PageLayout'
import Pagination from './components/Pagination/Pagination'
import ShortView from './components/ShortView/ShortView'
import Search from './components/Search/Search'
import MiddleView from './components/MiddleView/MiddleView'
import FullView from './components/FullView/FullView'

import './../../../app/components/css/ad_list_page.css'

const AdvertismentListPage = () => {
  return (
    <PageLayout>
    <Search />
    <Pagination />
    <ShortView />
    <MiddleView />
    <FullView />
    <Pagination />
    </PageLayout>
  )
}

export default AdvertismentListPage
