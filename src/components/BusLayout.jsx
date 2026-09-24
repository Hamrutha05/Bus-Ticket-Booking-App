import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
background-color: #f0f0f0;
padding: 1rem;
border-radius: 5px;
box-shadow: 0px 4px 8px rgba(0,0,0,0.2);
`
const TicketContainer = styled.div`
padding: 0.5rem;
`
const TicketItem = styled.li`
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

    const seatWidth = isSleeper ? '80px' : '25px'

  return (
    <Container>
        <h2>{selectedBus.name}</h2>
        <h4>Tickets</h4>
        <h5>{selectedBus.busType}</h5>
        <div className='d-flex '>
            <div className='d-flex mb-2 align-items-center'>
                <h6>Available -</h6>
                <TicketItem style={{width: seatWidth}}>
                    {1}
                </TicketItem>
            </div>
        </div>
    </Container>
  )
}
