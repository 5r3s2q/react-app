import React, {Component} from 'react'
import '../scss/sidebar/transfer.scss'



class Transfer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataFilter: this.props.filter.checked
        };
        this.handleChange = this.props.handleChange.bind(this);
        console.log(this.props.filter.checked)
    }
     componentWillReceiveProps(nextProps) {
        console.log('--- Receive Props',nextProps);
        if (nextProps.dataFilter !== this.state.dataFilter) this.setState({
            dataFilter: nextProps.filter.checked,
        })
    }
    componentWillUpdate(nextProps,nextState) {
        console.log('--- transfer update', nextProps,nextState)
    }

    render () {

        return (
            <div className={'transfer-block'}>
                <h3>Колличество пересадок</h3>
                <div className="transfer">
                    <label className='test-checkbox'>
                        <input className="checkbox" type="checkbox" value={-1}
                               onChange={this.handleChange}
                            checked={this.state.dataFilter.includes(-1)}
                        />
                        <span className="label">Все</span>
                    </label>

                    <label className='test-checkbox'>
                        <input className="checkbox" type="checkbox"  value={+0} onChange={this.handleChange}
                               checked={this.state.dataFilter.includes(+0)}/>
                        <span className="label">Без пересадок</span>
                    </label>
                    <label className='test-checkbox'>
                        <input className="checkbox" type="checkbox"  value={+1} onChange={this.handleChange}
                               checked={this.state.dataFilter.includes(+1)}/>
                        <span className="label">1 пересадка</span>
                    </label>
                    <label className='test-checkbox'>
                        <input className="checkbox" type="checkbox" value={+2} onChange={this.handleChange}
                               checked={this.state.dataFilter.includes(+2)}/>
                        <span className="label">2 пересадки</span>
                    </label>
                    <label className='test-checkbox'>
                        <input className="checkbox" type="checkbox" value={+3} onChange={this.handleChange}
                               checked={this.state.dataFilter.includes(+3)}/>
                        <span className="label">3 пересадки</span>
                    </label>
                </div>
            </div>
        )
    }
}

export  default Transfer