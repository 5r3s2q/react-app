import React, {PureComponent} from 'react'
import Ticket from './Ticket'

export default  class TicketList extends PureComponent{

    state = {
        showTicket: true
    }

    render () {
        const ticketel = this.props.tickets.map(
            (ticket,index) =>
                <section key = {index}>
                    <Ticket ticket={ticket} isShow={this.state.showTicket}/>
                </section>
        )
        return (
            <section className={''}>
                {ticketel}
            </section>

        )
    }


}