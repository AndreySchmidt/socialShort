import React from 'react'

const CurrencyBlock = () => {
  return (
    <div className="c_currency_block">
      <h3 className="header">Котировки <i></i></h3>
      <div className="curRates clearfix">
        <div className="rate odd"><strong>USD ЦБ</strong><br />30,1513<span className="shift">-0,1236</span></div>
        <div className="rate"><strong>EUR ЦБ</strong><br /> 40,5414</div>
      </div>
    </div>
  )
}

export default CurrencyBlock
