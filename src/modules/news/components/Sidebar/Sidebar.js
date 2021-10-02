import React from 'react'

import NewsBlock from './../NewsBlock/NewsBlock'
import CurrencyBlock from './../CurrencyBlock/CurrencyBlock'
import AdsList from './../../../app/components/AdsList/AdsList'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <NewsBlock />
      <CurrencyBlock />
      <AdsList />
    </div>
  )
}

export default Sidebar
