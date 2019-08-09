import React, {Component} from 'react'
import './scss/ticket/ticket.scss'

class Ticket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFilter: this.props.isShow,
            isCheck: this.props.dataFilter
        };
        this.handleChange = this.props.handleChange.bind(this);
    }
    componentWillMount(){
        // console.log('--- mounting', this.state.isCheck)
    }
    componentWillReceiveProps(nextProps) {
        console.log('--- ticket next props',nextProps);
        if (nextProps.isShow !== this.state.isFilter ||nextProps.isCheck !== this.state.isCheck) this.setState({
            isFilter: nextProps.isShow,
            isCheck: nextProps.dataFilter
        })
            // console.log(nextProps.dataFilter)
    }
    componentWillUpdate(nextProps,nextState) {
        // console.log('-- will update',nextProps,nextState);
        // if (nextProps.isShow !== this.state.isFilter) this.setState({
        //     isFilter: nextProps.isShow
        // })
    }
    render () {
        const {ticket} = this.props;
        // const {check} = this.state.Check
        // console.log('--- ticket props',this.props)
        // console.log(ticket.stops,typeof ticket.stops)
        const body = (this.state.isCheck.checked.includes(ticket.stops) || this.state.isCheck.checked.includes(-1)) &&
            <div className='ticket'>
                <div className="left-case">
                    <button >
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
            </div>;
        return (
            <>
                {body}
            </>
        )
    }
}

export  default Ticket