import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Buses } from "../utilis";
import BusList from './BusList';


const Container = styled.div`
background-color: #f0f0f0;
padding: 1rem;
border-radius: 5px;
box-shadow: 0px 4px 8px rgba(0,0,0,0.2);
`
const TicketContainer = styled.div`
padding: 0.5rem;
`
const TicketItem = styled.div`
list-style-type: none;
margin: 0.5rem;
padding: 1px;
background-color: white;
border-radius: 5px;
box-shadow: 0px 4px 8px rgba(0,0,0,0.2);
display: flex;
justify-content: center;
align-items: center;
text-align: center;
`

export default function BusLayout({selectedSeats, setSelectedSeats}) {

    const {id} = useParams();

    const navigate = useNavigate();

    const selectedBus = Buses.find((data) => data.id === parseInt(id));

    const isSleeper = selectedBus.bustype === 'Sleeper'

    const seatWidth = isSleeper ? '80px' : '25px';

    const generateSeats = (array, key="") => array.map(seats => Array.isArray(seats) ? <>

        {
            seats.map(seat => <TicketItem style={{width: seatWidth}} key={seat}>
                {key}{seat}
            </TicketItem>)
        }
    </> 
    : <TicketItem style={{
        width: seatWidth,
    }}>
        {key} {seats}
    </TicketItem>);

  return (
    <Container>
        <h2>{selectedBus.name}</h2>
        <h4>Tickets</h4>
        <h5>{selectedBus.busType}</h5>
        <div className='d-flex '>
            <div className='d-flex ms-2 align-items-center'>
                <h6>Available -</h6>
                <TicketItem style={{width: seatWidth}}>
                    {1}
                </TicketItem>
            </div>
            <div className='d-flex ms-2 align-items-center'>
                <h6>Booked -</h6>
                <TicketItem style={{width: seatWidth, background: "#b6b4b4"}}>
                    {1}
                </TicketItem>
            </div>
            <div className='d-flex ms-2 align-items-center'>
                <h6>Selected -</h6>
                <TicketItem style={{width: seatWidth, background: "#318beb"}}>
                    {1}
                </TicketItem>
            </div>
        </div>
        <ul className='d-flex flex-wrap'>
            {isSleeper ? <>  <TicketContainer className='d-flex align-items-center'>
                <h6 className='p-3'>Upper</h6>
                <div className='d-flex flex-wrap'>
                    {generateSeats(selectedBus.seatLayout.upper.first,"U")}
                </div>
                <div className='d-flex mt-4'>
                    {generateSeats(selectedBus.seatLayout.upper.second,"U")}
                </div>
                </TicketContainer>
                </> : <> </>}
        </ul>
    </Container>
  );
}
