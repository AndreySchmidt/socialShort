import React from 'react'
import MenuBlock from './../MenuBlock/MenuBlock'
import AdsList from './../../../../../app/components/AdsList/AdsList'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <MenuBlock />
      <AdsList />
    </div>
  )
}

export default Sidebar
