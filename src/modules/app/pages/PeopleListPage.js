import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {setCurrentPage} from './../actions'
import {getUserList, follow, unfollow} from './../../../thunk'

import PageLayout from './../PageLayout/PageLayout'
import Pagination from './../components/Pagination/Pagination'
import IsFetchingBlock from './../components/IsFetchingBlock/IsFetchingBlock'
import PeopleItem from './components/PeopleItem'

import './../components/css/ad_list_page.css'
import './people_list.css'

const PeopleListPage = ({follow, unfollow, getUserList, users, pageSize, totalUsersQuan, currentPage, setCurrentPageDispatch, isFetching}) => {

  useEffect(() => {
    getUserList(currentPage, pageSize)
  }, [currentPage, pageSize])

  return (
    <PageLayout>
      <Pagination pageSize={pageSize} totalUsersQuan={totalUsersQuan} setCurrentPage={setCurrentPageDispatch} currentPage={currentPage} />
      <div className="c_people_list clearfix">
        {isFetching? <IsFetchingBlock loadingBlock="People List Block" /> : null}
        <PeopleItem users = {users} follow = {follow} unfollow = {unfollow} />
      </div>
      <Pagination pageSize={pageSize} totalUsersQuan={totalUsersQuan} setCurrentPage={setCurrentPageDispatch} currentPage={currentPage} />
    </PageLayout>
  )
}

const mapStateToProps = (state) => {
  return {
    users: state.appReducer.users,
    pageSize: state.appReducer.pageSize,
    totalUsersQuan: state.appReducer.totalUsersQuan,
    currentPage: state.appReducer.currentPage,
    isFetching: state.appReducer.isFetching,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
     follow: (userId) => {dispatch(follow(userId))},
     unfollow: (userId) => {dispatch(unfollow(userId))},
     getUserList: (currentPage, pageSize) => {dispatch(getUserList(currentPage, pageSize))},
     setCurrentPageDispatch: (pageId) => {dispatch(setCurrentPage(pageId))},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleListPage)
