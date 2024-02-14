import React from 'react';
import Navbar from './components/Navbar';
import BookingForm from './components/BookingForm';
import HeroPage from './components/HeroPage';

export default function App() {
  return (
    <div>
      <Navbar />
      <HeroPage />
      <BookingForm />
    </div>
  )
}
