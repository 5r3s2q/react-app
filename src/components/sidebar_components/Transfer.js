import React, {Component} from 'react'
import '../scss/sidebar/transfer.scss'



class Transfer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value: 'all',
            isChecked: this.props.dataFilter
        };
        this.handleChange = this.props.handleChange.bind(this)
    }
     componentWillReceiveProps(nextProps) {
        if (nextProps.dataFilter !== this.state.isFilter) this.setState({
            isChecked: !nextProps.dataFilter,
        })
    }
    render () {

        return (
            <div className={'transfer-block'}>
                <h3>Колличество пересадок</h3>
                <div className="transfer">
                    <label className='test-checkbox'>
                        <input className="checkbox" type="checkbox" value={this.state.value} defaultChecked={true}
                               onChange={this.handleChange}
                            checked={this.state.isChecked}
                        />
                        <span className="label">Все</span>
                    </label>

                    <label className='test-checkbox'>
                        <input className="checkbox" type="checkbox"  value={+0} onChange={this.handleChange}/>
                        <span className="label">Без пересадок</span>
                    </label>
                    <label className='test-checkbox'>
                        <input className="checkbox" type="checkbox"  value={+1} onChange={this.handleChange}/>
                        <span className="label">1 пересадка</span>
                    </label>
                    <label className='test-checkbox'>
                        <input className="checkbox" type="checkbox" value={+2} onChange={this.handleChange}/>
                        <span className="label">2 пересадки</span>
                    </label>
                    <label className='test-checkbox'>
                        <input className="checkbox" type="checkbox" value={+3} onChange={this.handleChange}/>
                        <span className="label">3 пересадки</span>
                    </label>
                </div>
            </div>
        )
    }

}

export  default Transfer