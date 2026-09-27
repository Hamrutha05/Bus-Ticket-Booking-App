import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Buses } from "../utilis";
import { Button } from 'react-bootstrap';
import BusList from './BusList';


const Container = styled.div`
  min-height: calc(100vh - 70px);
  background: #f1f5f9;
  padding: 35px 20px;
`;

const MainCard = styled.div`
  max-width: 1000px;
  margin: auto;
  background: white;
  padding: 30px;
  border-radius: 18px;
  box-shadow: 0 8px 25px rgba(15, 23, 42, 0.12);
`;

const BusHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #0f172a;
  color: white;
  padding: 20px;
  border-radius: 14px;
  margin-bottom: 25px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;

const BusName = styled.h2`
  margin: 0;
  font-size: 1.5rem;
`;

const BusType = styled.span`
  background: #2563eb;
  padding: 7px 14px;
  border-radius: 20px;
  font-size: 13px;
`;

const Legend = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
  margin: 25px 0;
  flex-wrap: wrap;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  color: #475569;
  font-size: 14px;
`;

const LegendSeat = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 6px;
  background: ${props => props.bg};
  border: 1px solid #cbd5e1;
`;

const TicketContainer = styled.div`
  background: #f8fafc;
  padding: 25px;
  margin: 20px auto;
  border-radius: 15px;
  border: 1px solid #e2e8f0;
  max-width: 450px;
`;

const FloorTitle = styled.h5`
  text-align: center;
  color: #0f172a;
  font-weight: 700;
  margin-bottom: 20px;
`;

const TicketItem = styled.div`
  list-style-type: none;
  margin: 5px;
  padding: 8px 4px;
  background: white;
  border-radius: 7px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.08);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 35px;
  font-size: 12px;
  font-weight: 600;
  border: 1px solid #cbd5e1;
  transition: 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const SelectedBox = styled.div`
  text-align: center;
  background: #eff6ff;
  color: #1d4ed8;
  padding: 15px;
  border-radius: 10px;
  margin-top: 25px;
  font-weight: 600;
`;

const BookButton = styled(Button)`
  display: block;
  margin: 20px auto 0;
  padding: 10px 35px;
  border-radius: 9px;
  font-weight: 600;
`;

export default function BusLayout({ selectedSeats, setSelectedSeats }) {

    const { id } = useParams();

    const navigate = useNavigate();

    const selectedBus = Buses.find((data) => data.id === parseInt(id));

    const isSleeper = selectedBus.busType === 'Sleeper';

    const seatWidth = isSleeper ? '80px' : '25px';

    const isSeatAvailable = (seat) => selectedBus.availableSeats.includes(seat);

    const selectSeat = (seat) => {
        if(selectedSeats?.includes(seat)){
            const seats = selectedSeats.filter((selectedSeat) => selectedSeat !== seat );
            setSelectedSeats(seats);
            return
        }
        setSelectedSeats((prevState) => ([...prevState, seat]));
    };

    const isSeatSelected = (seat) => selectedSeats.includes(seat);

    const generateSeats = (array, key = "") =>
        array.map(seats =>
            Array.isArray(seats) ? (
                <div className="d-flex">

                    {
                        seats.map((seat) => (
                            <TicketItem 
                                style={{ 
                                    width: seatWidth, 
                                    background: isSeatSelected(`${key}${seat}`) 
                                        ? "#318beb" 
                                        :  isSeatAvailable(`${key}${seat}`) 
                                        ? "#fff" 
                                        : "#b6b4b4",
                                    cursor: isSeatAvailable(`${key}${seat}`) ? "pointer" : "",
                                    }} key={seat}
                                    onClick={() => selectSeat(`${key}${seat}`)}
                                    >
                                {key}{seat}
                            </TicketItem>
                        ))}
                </div>
            ) : (<TicketItem 
                style={{
                    width: seatWidth,
                    background: isSeatSelected(`${key}${seats}`) 
                                        ? "#318beb" 
                                        :  isSeatAvailable(`${key}${seats}`) 
                        ? "#fff" 
                        : "#b6b4b4",
                    cursor: isSeatAvailable(`${key}${seats}`) ? "pointer" : "",
            }}
            onClick={() => selectSeat(`${key}${seats}`)}
            >
                {key} {seats}
            </TicketItem>));

    return (
    <Container>

        <MainCard>

            <BusHeader>
                <div>
                    <BusName>🚌 {selectedBus.name}</BusName>

                    <div style={{ marginTop: "6px", fontSize: "14px" }}>
                        {selectedBus.source} → {selectedBus.destination}
                    </div>

                    <div style={{ marginTop: "5px", fontSize: "13px" }}>
                        {selectedBus.departureTime} → {selectedBus.arrivalTime}
                    </div>
                </div>

                <BusType>
                    {selectedBus.busType}
                </BusType>
            </BusHeader>

            <h4 className="text-center">
                Select Your Seats 💺
            </h4>

            <Legend>

                <LegendItem>
                    <LegendSeat bg="#ffffff" />
                    Available
                </LegendItem>

                <LegendItem>
                    <LegendSeat bg="#b6b4b4" />
                    Booked
                </LegendItem>

                <LegendItem>
                    <LegendSeat bg="#318beb" />
                    Selected
                </LegendItem>

            </Legend>

            <ul className="d-flex flex-wrap justify-content-center p-0">

                {isSleeper ? (
                    <>
                        <TicketContainer>

                            <FloorTitle>
                                🛏️ Upper Deck
                            </FloorTitle>

                            <div className="d-flex flex-wrap justify-content-center">
                                {generateSeats(
                                    selectedBus.seatLayout.upper.first,
                                    "U"
                                )}

                                <div className="d-flex mt-4">
                                    {generateSeats(
                                        selectedBus.seatLayout.upper.second,
                                        "U"
                                    )}
                                </div>
                            </div>

                        </TicketContainer>

                        <TicketContainer>

                            <FloorTitle>
                                🛏️ Lower Deck
                            </FloorTitle>

                            <div className="d-flex flex-wrap justify-content-center">
                                {generateSeats(
                                    selectedBus.seatLayout.lower.first,
                                    "L"
                                )}

                                <div className="d-flex mt-4">
                                    {generateSeats(
                                        selectedBus.seatLayout.lower.second,
                                        "L"
                                    )}
                                </div>
                            </div>

                        </TicketContainer>
                    </>
                ) : (
                    <TicketContainer>

                        <FloorTitle>
                            💺 Seater
                        </FloorTitle>

                        <h6 className="text-center mb-3">
                            Lower
                        </h6>

                        <div className="d-flex flex-wrap justify-content-center">
                            {generateSeats(
                                selectedBus.seatLayout.lower.first,
                                "L"
                            )}

                            <div className="d-flex flex-wrap mt-4">
                                {generateSeats(
                                    selectedBus.seatLayout.lower.second,
                                    "L"
                                )}
                            </div>
                        </div>

                        <h6 className="text-center mt-4 mb-3">
                            Upper
                        </h6>

                        <div className="d-flex flex-wrap justify-content-center">
                            {generateSeats(
                                selectedBus.seatLayout.upper.first,
                                "U"
                            )}

                            <div className="d-flex mt-4">
                                {generateSeats(
                                    selectedBus.seatLayout.upper.second,
                                    "U"
                                )}
                            </div>
                        </div>

                    </TicketContainer>
                )}

            </ul>

            {selectedSeats?.length > 0 && (
                <SelectedBox>
                    💺 Selected Seats : {selectedSeats.join(", ")}
                </SelectedBox>
            )}

            <BookButton
                variant="primary"
                onClick={() => navigate("/bus/book")}
                disabled={
                    !(selectedSeats && selectedSeats?.length > 0)
                }
            >
                Continue to Booking →
            </BookButton>

        </MainCard>

    </Container>
);
}
