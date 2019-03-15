import React, {Component} from 'react'
import '../scss/sidebar/transfer.scss'



class Transfer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value: ''
        };
        this.handleChange = this.props.handleChange.bind(this)
    }
    render () {

        return (
            <div className={'transfer-block'}>
                <h3>Колличество пересадок</h3>
                <div className="transfer">
                    <label className='test-checkbox'>
                        <input className="checkbox" type="checkbox"   value={this.state.value}
                               defaultChecked={false} onChange={this.handleChange}/>
                        <span className="label">Все</span>
                    </label>

                    <label className='test-checkbox'>
                        <input className="checkbox" type="checkbox" defaultChecked={true} onChange={this.handleChange}/>
                        <span className="label">Без пересадок</span>
                    </label>
                    <label className='test-checkbox'>
                        <input className="checkbox" type="checkbox" onChange={this.handleChange}/>
                        <span className="label">1 пересадка</span>
                    </label>
                    <label className='test-checkbox'>
                        <input className="checkbox" type="checkbox" onChange={this.handleChange}/>
                        <span className="label">2 пересадки</span>
                    </label>
                    <label className='test-checkbox'>
                        <input className="checkbox" type="checkbox" onChange={this.handleChange}/>
                        <span className="label">3 пересадки</span>
                    </label>
                </div>
            </div>
        )
    }

}

export  default Transfer