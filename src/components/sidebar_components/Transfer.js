import React, {Component} from 'react'
import '../scss/sidebar/transfer.scss'

class Transfer extends  Component {
    constructor(props) {
        super(props)
        this.state  = {
            filter : props
        }
    }
    render () {
        return (
            <div className={'transfer-block'}>
                <h3>Колличество пересадок</h3>
                <div className="transfer">
                        <label className='test-checkbox'>
                            <input className="checkbox" type="checkbox" name="all" onChange={this.handleChange}/>
                                <span className="label">Все</span>
                        </label>

                        <label className='test-checkbox'>
                            <input className="checkbox" type="checkbox" name="0" onChange={this.handleChange}/>
                                <span className="label">Без пересадок</span>
                        </label>
                        <label className='test-checkbox'>
                            <input className="checkbox" type="checkbox" name="1" onChange={this.handleChange}/>
                                <span className="label">1 пересадка</span>
                        </label>
                        <label className='test-checkbox'>
                            <input className="checkbox" type="checkbox" name="2" onChange={this.handleChange}/>
                                <span className="label">2 пересадки</span>
                        </label>
                        <label className='test-checkbox'>
                            <input className="checkbox" type="checkbox" name="3" onChange={this.handleChange}/>
                                <span className="label">3 пересадки</span>
                        </label>
                </div>
            </div>)
    }
    handleChange = (e) => {
        // console.log('---', 'change',e.target.name)
        this.setState({
            value: e.target.name
        })

    }
}

export  default Transfer