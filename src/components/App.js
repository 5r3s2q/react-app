import React , {Component}from 'react'
import Ticket from './Ticket'
import tickets from './../tickets.json'
import Sidebar from './Sidebar'

class App extends Component {
    constructor (props) {
        super(props)
        this.state = {
            currentFilterTransfer: 'all',
            priceFormat: true,
            dataFilter: {'checked': ['all'],
                        'unchecked':[0,1,2,3]}
        }

        this.handleChange = this.handleChange.bind(this)
    }
    render () {
        // console.log('--- app props',this.data.priceFormat,this.data.currentFilterTransfer )

        const ticketel = tickets.tickets.sort((a, b) => a.price - b.price).map(
            (ticket,index) =>
                <section key = {index}>
                    <Ticket ticket={ticket} isShow={this.state.currentFilterTransfer}  price = {this.state.priceFormat}
                            dataFilter={this.state.dataFilter} handleChange={this.handleChange}/>
                </section>
        )
        return (
            <div className={'grid'}>
                <div className="flex">
                    <Sidebar price = {this.state.priceFormat} filter = {this.state.currentFilterTransfer} handleChange={this.handleChange}/>
                    <section className={''}>
                        {ticketel}
                    </section>

                </div>
            </div>
        )
    }
    handleChange(event) {
        this.setState(
            {
            // currentFilterTransfer: Boolean(event.target.value),
            currentFilterTransfer:  event.target.value,
            dataFilter:  {
                'checked': this.state.dataFilter.checked.includes(+event.target.value) ? this.state.dataFilter.checked.slice(-1) :this.state.dataFilter.checked.concat(+event.target.value),
                'unchecked': this.state.dataFilter.unchecked.includes(+event.target.value) ? this.state.dataFilter.unchecked.slice(-1) :this.state.dataFilter.unchecked.concat(+event.target.value)
            }
            // dataFilter:  event.target.checked
        })
        // console.log('---handle change', id)
        // console.log('---', event.target.value, event.target.checked, this.state.dataFilter)
    }
}
export  default App