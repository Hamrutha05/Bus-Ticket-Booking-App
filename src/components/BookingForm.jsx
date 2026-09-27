import React from 'react'
import { Button, Form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { locations } from '../utilis';

const Page = styled.div`
  min-height: calc(100vh - 70px);
  background: #f1f5f9;
  padding: 40px 20px;
`;

const Container = styled.div`
  max-width: 750px;
  margin: auto;
  background: white;
  padding: 30px;
  border-radius: 18px;
  box-shadow: 0 8px 25px rgba(15, 23, 42, 0.12);
`;

const Title = styled.h2`
  text-align: center;
  color: #0f172a;
  font-weight: 700;
  margin-bottom: 8px;
`;

const Subtitle = styled.p`
  text-align: center;
  color: #64748b;
  margin-bottom: 25px;
`;

const TripCard = styled.div`
  background: #eff6ff;
  border: 1px solid #dbeafe;
  padding: 18px;
  border-radius: 12px;
  margin-bottom: 25px;
`;

const Route = styled.h5`
  text-align: center;
  color: #1e3a8a;
  font-weight: 600;
`;

const DateText = styled.p`
  text-align: center;
  color: #475569;
  margin: 5px 0 0;
`;

const PassengerCard = styled.div`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 18px;
`;

const SeatTitle = styled.h5`
  color: #2563eb;
  font-weight: 700;
  margin-bottom: 18px;
`;

const Field = styled.div`
  margin-bottom: 15px;
`;

const StyledLabel = styled(Form.Label)`
  font-weight: 600;
  color: #334155;
`;

const StyledControl = styled(Form.Control)`
  height: 45px;
  border-radius: 8px;

  &:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
  }
`;

const PayButton = styled(Button)`
  display: block;
  margin: 25px auto 0;
  padding: 11px 45px;
  border-radius: 9px;
  font-weight: 600;
`;

export default function BookingForm({
  searchState,
  setSearchState,
  selectedSeats,
  setSelectedSeats
}) {

  const navigate = useNavigate();
  const handleBooking = () => {

  const newBooking = {
    id: Date.now(),
    from: searchState.from,
    to: searchState.to,
    date: searchState.date,
    seats: selectedSeats,
    status: "Confirmed"
  }

  const oldBookings =
    JSON.parse(localStorage.getItem("bookings")) || []

  oldBookings.push(newBooking)

  localStorage.setItem(
    "bookings",
    JSON.stringify(oldBookings)
  )

  alert("Your tickets booked successfully 🎉")

  setSelectedSeats([])

  navigate("/my-bookings")
}

  return (
    <Page>

      <Container>

        <Title>Complete Your Booking 🎫</Title>

        <Subtitle>
          Enter passenger details to continue
        </Subtitle>

        <TripCard>

          <Route>
            🚌 {searchState.from} → {searchState.to}
          </Route>

          <DateText>
            📅 Travel Date: {searchState.date}
          </DateText>

        </TripCard>

        <h5 className="mb-3">
          Passenger Details
        </h5>

        {selectedSeats.map((data) => (

          <PassengerCard key={data}>

            <SeatTitle>
              💺 Seat No: {data}
            </SeatTitle>

            <Field>
              <StyledLabel>
                Name
              </StyledLabel>

              <StyledControl
                placeholder="Enter passenger name"
                type="text"
              />
            </Field>

            <Field>
              <StyledLabel>
                Age
              </StyledLabel>

              <StyledControl
                placeholder="Enter passenger age"
                type="number"
              />
            </Field>

          </PassengerCard>

        ))}

        <PayButton
          variant="success"
          onClick={handleBooking}
        >
          💳 Pay Now
        </PayButton>

      </Container>

    </Page>
  );
}