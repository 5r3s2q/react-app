import React from 'react'
import '../scss/sidebar/transfer.scss'



function Transfer (props) {
    return (
            <div className={'transfer-block'}>
                <h3>Колличество пересадок</h3>
                <div className="transfer">
                        <label className='test-checkbox'>
                            <input className="checkbox" type="checkbox" defaultChecked={true} name="all" onChange={() => props.handleChange('all')}/>
                                <span className="label">Все</span>
                        </label>

                        <label className='test-checkbox'>
                            <input className="checkbox" type="checkbox" name="0" onChange={() => props.handleChange('0')}/>
                                <span className="label">Без пересадок</span>
                        </label>
                        <label className='test-checkbox'>
                            <input className="checkbox" type="checkbox" name="1" onChange={() => props.handleChange('1')}/>
                                <span className="label">1 пересадка</span>
                        </label>
                        <label className='test-checkbox'>
                            <input className="checkbox" type="checkbox" name="2" onChange={() => props.handleChange('2')}/>
                                <span className="label">2 пересадки</span>
                        </label>
                        <label className='test-checkbox'>
                            <input className="checkbox" type="checkbox" name="3" onChange={() => props.handleChange('3')}/>
                                <span className="label">3 пересадки</span>
                        </label>
                </div>
            </div>
    )
}

export  default Transfer