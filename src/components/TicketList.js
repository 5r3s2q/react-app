import React, {PureComponent} from 'react'
import Ticket from './Ticket'

export default  class TicketList extends PureComponent{
    constructor (props) {
        super(props)
        this.state = {
            showTicket: this.props.filter
        }
        this.handleChange = this.props.handleChange.bind(this)
    }

    render () {
        console.log('--- ticket list',this.props)

        const {price, filter,tickets} = this.props
        const ticketel = tickets.sort((a, b) => a.price - b.price).map(
            (ticket,index) =>
                <section key = {index}>
                    <Ticket ticket={ticket} isShow={filter}  price = {price} handleChange={this.handleChange}/>
                </section>
        )
        return (
            <section className={''}>
                {ticketel}
            </section>

        )
    }


}