import React from 'react'
import { Routes, Route } from 'react-router'
import LandingPage from '../pages/LandingPage'

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  )
}

export default Routing