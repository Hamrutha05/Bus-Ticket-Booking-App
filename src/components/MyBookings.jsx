import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Page = styled.div`
  min-height: calc(100vh - 70px);
  background: #f1f5f9;
  padding: 40px 20px;
`

const Container = styled.div`
  max-width: 900px;
  margin: auto;
`

const BookingCard = styled.div`
  background: white;
  padding: 25px;
  margin-bottom: 20px;
  border-radius: 16px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.1);
`

const Status = styled.span`
  background: #dcfce7;
  color: #15803d;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: bold;
`

export default function MyBookings() {

  const [bookings, setBookings] = useState([])

  useEffect(() => {
    const savedBookings =
      JSON.parse(localStorage.getItem('bookings')) || []

    setBookings(savedBookings)
  }, [])

  return (
    <Page>
      <Container>

        <h2 className="mb-4">
          🎟️ My Bookings
        </h2>

        {bookings.length === 0 ? (

          <BookingCard className="text-center">
            <h5>No bookings yet</h5>

            <p className="text-muted">
              Book a bus ticket to see it here.
            </p>
          </BookingCard>

        ) : (

          bookings.map((booking) => (

            <BookingCard key={booking.id}>

              <div className="d-flex justify-content-between align-items-center mb-3">

                <h4>🚌 Bus Ticket</h4>

                <Status>
                  {booking.status}
                </Status>

              </div>

              <hr />

              <h5>
                {booking.from} → {booking.to}
              </h5>

              <p>
                <strong>Travel Date:</strong> {booking.date}
              </p>

              <p>
                <strong>Seats:</strong>{' '}
                {booking.seats.join(', ')}
              </p>

              <p>
                <strong>Booking ID:</strong>{' '}
                {booking.id}
              </p>

            </BookingCard>

          ))

        )}

      </Container>
    </Page>
  )
}