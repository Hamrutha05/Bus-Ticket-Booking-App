import React from 'react'
import { Form, Button } from 'react-bootstrap'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const Page = styled.div`
  min-height: calc(100vh - 70px);
  background: #f1f5f9;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
`

const Card = styled.div`
  background: white;
  width: 400px;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.12);
`

export default function SignUp() {

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Account created successfully!')
    navigate('/login')
  }

  return (
    <Page>
      <Card>

        <h2 className="text-center mb-4">
          🚌 Create Account
        </h2>

        <Form onSubmit={handleSubmit}>

          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Create a password"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm your password"
              required
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="w-100"
          >
            Sign Up
          </Button>

        </Form>

      </Card>
    </Page>
  )
}