import { useState } from 'react'
import './App.css'
import Offers from './components/Offers'
import SignUp from './components/SignUp'
import Header from './components/Header'
import BusSearch from './components/BusSearch'
import BusLayout from './components/BusLayout'
import BookingForm from './components/BookingForm'
import Login from './components/Login'
import MyBookings from './components/MyBookings'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import { locations } from './utilis'

function App() {

  const [searchState, setSearchState] = useState({
    from: locations[0],
    to: locations[2],
    date: '',
  })

  const [selectedSeats, setSelectedSeats] = useState([])

  return (
    <BrowserRouter>

      <Header />

      <Routes>

        {/* Home */}
        <Route
          path='/'
          element={
            <BusSearch
              searchState={searchState}
              setSearchState={setSearchState}
            />
          }
        />

        {/* Bus Layout */}
        <Route
          path='/bus/:id'
          element={
            <BusLayout
              selectedSeats={selectedSeats}
              setSelectedSeats={setSelectedSeats}
            />
          }
        />

        {/* Booking */}
        <Route
          path='/bus/book'
          element={
            <BookingForm
              selectedSeats={selectedSeats}
              searchState={searchState}
              setSelectedSeats={setSelectedSeats}
              setSearchState={setSearchState}
            />
          }
        />

        {/* Login */}
        <Route
          path='/login'
          element={<Login />}
        />

        {/* My Bookings */}
        <Route
          path='/my-bookings'
          element={<MyBookings />}
        />

        <Route
  path='/offers'
  element={<Offers />}
/>

<Route
  path='/signup'
  element={<SignUp />}
/>

      </Routes>

    </BrowserRouter>
  )
}

export default App