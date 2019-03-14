import React, {Component} from 'react'
import Transfer from './sidebar_components/Transfer'
import Currency from './sidebar_components/Currency'
import './scss/sidebar/sidebar.scss'
// import tickets from '../tickets.json'

class Sidebar extends  Component {
    constructor (props) {
        super(props)
        this.state = {
            showTicket: this.props.filter
        }
        this.handleChange = this.props.handleChange.bind(this)
    }
    render () {

        const {price,filter} = this.props
        console.log('--- sidebar props',price, filter)
        return (<div className={'sidebar'}>
            <Currency price = {price} />
            <Transfer filter = {filter} handleChange={this.handleChange}/>
        </div>)
    }
}

export  default Sidebar