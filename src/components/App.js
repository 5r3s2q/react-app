import React , {Component}from 'react'
import Ticket from './Ticket'
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

        const ticketel = tickets.tickets.sort((a, b) => a.price - b.price).map(
            (ticket,index) =>
                <section key = {index}>
                    <Ticket ticket={ticket} isShow={this.data.currentFilterTransfer}  price = {this.data.priceFormat} handleChange={this.handleChange}/>
                </section>
        )
        return (
            <div className={'grid'}>
                <div className="flex">
                    <Sidebar price = {this.data.priceFormat} filter = {this.data.currentFilterTransfer} handleChange={this.handleChange}/>
                    <section className={''}>
                        {ticketel}
                    </section>

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