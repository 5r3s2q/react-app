import React, {Component} from 'react'
import '../scss/sidebar/currency.scss'

class Currency extends  Component {
    render () {
        return (
            <div className={'currency-block'}>
                <h3>Валюта</h3>
                <div className="currency">
                    <div className="rub">RUB</div>
                    <div className="usd">USD</div>
                    <div className="eur">EUR</div>
                </div>
            </div>
        )
    }
}

export  default Currency