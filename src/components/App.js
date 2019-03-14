import React , {Component}from 'react'
import TicketList from './TicketList'
import tickets from './../tickets.json'
import Sidebar from './Sidebar'

class App extends Component {
    constructor (props) {
        super(props)
        this.data = {
            currentFilterTransfer: true,
            priceFormat: true
        }

        this.handleChange = this.handleChange.bind(this)
    }
    render () {
        console.log('--- app props',this.data.priceFormat,this.data.currentFilterTransfer )
        return (
            <div className={'grid'}>
                <div className="flex">
                    <Sidebar price = {this.data.priceFormat} filter = {this.data.currentFilterTransfer} handleChange={this.handleChange}/>
                    <TicketList tickets = {tickets.tickets} price = {this.data.currentFilterTransfer} filter = {this.data.currentFilterTransfer} handleChange={this.handleChange}/>
                </div>
            </div>
        )
    }
    handleChange(id) {
        this.setState({
            currentFilterTransfer: id
        })
        console.log('---handle change', id)
    }
}
export  default App