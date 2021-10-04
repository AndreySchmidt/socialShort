import React from 'react'
import './css/normalize.css'
import './css/buttons-forms.css'
import './css/page.css'

import JumpToTopBtn from './components/JumpToTopBtn/JumpToTopBtn'
import Header from './components/Header/Header'

const AppPageLayout = ({ children }) => (
  <>
    <JumpToTopBtn />
    <Header />
    <div className="back_ad_wrapper">{children}</div>
  </>
)

// PageLayout.propTypes = {
//   children: PropTypes.element.isRequired,
// }

export default AppPageLayout
