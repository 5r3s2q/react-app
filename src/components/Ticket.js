import React, {Component} from 'react'
import './scss/ticket/ticket.scss'

class Ticket extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isFilter: true
        }
        this.handleChange = this.props.handleChange.bind(this)
    }
    render () {
        const {ticket, isShow} = this.props
        console.log('--- ticket props',this.props)
        const body = (isShow === ticket.stops || isShow===true) &&
            <div className='ticket'>
                <div className="left-case">
                    <button onClick={this.handleClick}>
                         {'Купить за ' + ticket.price}
                    </button>
                </div>
                <div className="right-case">
                    <div className="from">
                        <div className="time">
                            {ticket.departure_time}
                        </div>
                        <div className="place">
                            {ticket.origin},{ticket.origin_name}
                        </div>
                        <div className="date">
                            {ticket.departure_date}
                        </div>
                    </div>
                    <div className="transfer">
                        {ticket.stops >= 2 ? ticket.stops + ' пересадки' : ticket.stops !== 0 ? ticket.stops + ' пересадка': 'без пересадок'}
                    </div>
                    <div className="to">
                        <div className="time">
                            {ticket.arrival_time}
                        </div>
                        <div className="place">
                            {ticket.destination_name},{ticket.destination}
                        </div>
                        <div className="date">
                            {ticket.arrival_date}
                        </div>
                    </div>
                </div>
            </div>
        return (
            <div>
                {body}
            </div>
        )
    }
}

export  default Ticket