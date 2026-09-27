import React from 'react'
import { Form, Button } from 'react-bootstrap'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
  min-height: calc(100vh - 70px);
  background: #f1f5f9;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Card = styled.div`
  background: white;
  width: 400px;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.12);
`

export default function Login() {
    const navigate = useNavigate()
  return (
    <Container>
      <Card>

        <h2 className="text-center mb-4">
          🚌 Login
        </h2>

        <Form>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="w-100"
          >
            Login
          </Button>

        </Form>

        <p className="text-center mt-3">
  Don't have an account?{' '}
  <b
    style={{ color: '#2563eb', cursor: 'pointer' }}
    onClick={() => navigate('/signup')}
  >
    Sign Up
  </b>
</p>

      </Card>
    </Container>
  )
}