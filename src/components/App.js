import React from 'react'
import TicketList from './TicketList'
import tickets from './../tickets.json'
import Sidebar from './Sidebar'
function App() {
    return (
        <div className={'grid'}>
            <div className="flex">
                <Sidebar/>
                <TicketList tickets = {tickets.tickets}/>
            </div>
        </div>
    )
}
export  default App