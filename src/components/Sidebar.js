import React, {Component} from 'react'
import Transfer from './sidebar_components/Transfer'
import Currency from './sidebar_components/Currency'
import './scss/sidebar/sidebar.scss'
// import tickets from '../tickets.json'

class Sidebar extends  Component {
    render () {
        return (<div className={'sidebar'}>
            <Currency/>
            <Transfer/>
        </div>)
    }
}

export  default Sidebar