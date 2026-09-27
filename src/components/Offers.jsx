import React from 'react'
import styled from 'styled-components'

const Page = styled.div`
  min-height: calc(100vh - 70px);
  background: #f1f5f9;
  padding: 40px 20px;
`

const Container = styled.div`
  max-width: 1000px;
  margin: auto;
`

const Title = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  color: #0f172a;
`

const OfferGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`

const OfferCard = styled.div`
  background: white;
  padding: 25px;
  border-radius: 16px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.1);
  text-align: center;
`

const Code = styled.div`
  background: #eff6ff;
  color: #2563eb;
  padding: 10px;
  border-radius: 8px;
  margin-top: 15px;
  font-weight: bold;
`

export default function Offers() {
  return (
    <Page>
      <Container>
        <Title>🎁 Special Offers</Title>

        <OfferGrid>

          <OfferCard>
            <h3>10% OFF</h3>
            <p>Get 10% off on your first bus booking.</p>
            <Code>FIRST10</Code>
          </OfferCard>

          <OfferCard>
            <h3>₹100 OFF</h3>
            <p>Save ₹100 on selected bus bookings.</p>
            <Code>SAVE100</Code>
          </OfferCard>

          <OfferCard>
            <h3>Weekend Offer</h3>
            <p>Enjoy special discounts on weekend travel.</p>
            <Code>WEEKEND</Code>
          </OfferCard>

        </OfferGrid>
      </Container>
    </Page>
  )
}