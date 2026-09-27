import React from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const BusListContainer = styled.div`
  max-width: 1100px;
  margin: 35px auto;
  padding: 25px;
`;

const Title = styled.h2`
  color: #0f172a;
  font-weight: 700;
  margin-bottom: 20px;
`;

const BusItem = styled.div`
  background: white;
  padding: 25px;
  margin: 15px 0;
  border-radius: 16px;
  box-shadow: 0px 5px 18px rgba(15, 23, 42, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.2s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0px 8px 25px rgba(15, 23, 42, 0.15);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: 20px;
  }
`;

const BusName = styled.h3`
  margin: 0 0 8px;
  color: #0f172a;
  font-size: 1.4rem;
`;

const Route = styled.p`
  margin: 0 0 18px;
  color: #475569;
  font-size: 15px;
`;

const TimeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  margin-bottom: 18px;
`;

const Time = styled.div`
  text-align: center;

  strong {
    display: block;
    font-size: 17px;
    color: #0f172a;
  }

  span {
    font-size: 13px;
    color: #64748b;
  }
`;

const Arrow = styled.span`
  font-size: 20px;
  color: #2563eb;
`;

const Details = styled.div`
  display: flex;
  gap: 25px;
  flex-wrap: wrap;
`;

const Detail = styled.div`
  font-size: 14px;
  color: #64748b;

  strong {
    color: #334155;
  }
`;

const RightSection = styled.div`
  text-align: right;
  min-width: 150px;

  @media (max-width: 768px) {
    text-align: left;
  }
`;

const Price = styled.h3`
  color: #2563eb;
  margin-bottom: 8px;
`;

const Seats = styled.p`
  color: #16a34a;
  font-weight: 600;
`;

const BookButton = styled(Button)`
  width: 140px;
  border-radius: 9px;
  font-weight: 600;
  background: #0f172a;
  border: none;

  &:hover {
    background: #0f172a;
  }
`;

export default function BusList({ buses }) {

  const navigate = useNavigate()

  return (
    <BusListContainer>

      <Title>Available Buses 🚌</Title>

      {buses.map((bus) => (

        <BusItem key={bus.id}>

          <div>

            <BusName>
              🚌 {bus.name}
            </BusName>

            <Route>
              {bus.source} <strong>→</strong> {bus.destination}
            </Route>

            <TimeContainer>

              <Time>
                <strong>{bus.departureTime}</strong>
                <span>{bus.source}</span>
              </Time>

              <Arrow>→</Arrow>

              <Time>
                <strong>{bus.arrivalTime}</strong>
                <span>{bus.destination}</span>
              </Time>

            </TimeContainer>

            <Details>

              <Detail>
                <strong>Type:</strong> {bus.busType}
              </Detail>

              <Detail>
                <strong>Seats:</strong> {bus.availableSeats.length}
              </Detail>

            </Details>

          </div>

          <RightSection>

            <Price>{bus.price}</Price>

            <Seats>
              {bus.availableSeats.length} seats available
            </Seats>

            <BookButton
              onClick={() => navigate(`bus/${bus.id}`)}
            >
              Book Now
            </BookButton>

          </RightSection>

        </BusItem>

      ))}

    </BusListContainer>
  );
}