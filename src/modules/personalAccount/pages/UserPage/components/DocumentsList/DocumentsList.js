import React from 'react'
import {Link} from 'react-router-dom'

const DocumentsList = () => {
  return (
    <div className="c_documents_list">
      <div className="list_item">
        <Link to="">Прайс лист компании (xls)</Link>
      </div>
      <div className="list_item">
        <Link to="">Список гостей на день рождения (doc)</Link>
      </div>
      <div className="list_item">
        <Link to="">Еще документ (rar)</Link>
      </div>
    </div>
  )
}

export default DocumentsList
