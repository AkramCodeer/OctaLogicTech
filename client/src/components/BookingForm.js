import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import './BookingForm.css';

const BookingForm = () => {
    const [step, setStep] = useState(1);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [numWheels, setNumWheels] = useState('');
    const [vehicleModel, setVehicleModel] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [address, setAddress] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleNext = () => {
        if (step === 1 && (!firstName || !lastName)) {
            toast.warning('Please fill in both first name and last name.');
            return;
        }
        if (step === 2 && !numWheels) {
            toast.warning('Please select the number of wheels.');
            return;
        }
        if (step === 3 && !vehicleModel) {
            toast.warning('Please select a vehicle model.');
            return;
        }
        if (step === 4 && (!contactNumber || !address || !startDate || !endDate)) {
            toast.warning('Please fill in all fields.');
            return;
        }
        setStep(step + 1);
    };

    const handlePrevious = () => {
        setStep(step - 1);
    };

    const handleSubmit = () => {
         // Send form data to the backend
         const formData = {
          firstName,
          lastName,
          numWheels,
          vehicleModel,
          contactNumber,
          address,
          startDate,
          endDate
      };

      axios.post('http://localhost:5000/', formData)
          .then(response => {
              // Handle success response
              console.log(response.data);
              toast.success('Booking submitted successfully!');
          })
          .catch(error => {
              // Handle error
              console.error('Error submitting booking:', error);
              toast.error('Failed to submit booking. Please try again.');
          });
    };

    return (
      <div className="booking-container">
        {step === 1 && (
          <>
            <div className="form-control">
              <h1>Hey,What is your Name?</h1>
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
              />
            </div>
            <div className="form-control">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
              />
            </div>
          </>
        )}
        {step === 2 && (
          <div className="form-control">
            <h1>Number of wheels</h1>
            <div className="radio-container">
              <input
                type="radio"
                value="2"
                checked={numWheels === "2"}
                onChange={() => setNumWheels("2")}
              />
              <label htmlFor="2">2</label>
            </div>
            <div className="radio-container">
              <input
                type="radio"
                value="4"
                checked={numWheels === "4"}
                onChange={() => setNumWheels("4")}
              />
              <label htmlFor="4">4</label>
            </div>
          </div>
        )}
        {step === 3 && (
          <div className="form-control">
            <h1>Available Vehicles</h1>
            {numWheels === "2" ? (
              <>
                <div className="radio-container">
                  <input
                    type="radio"
                    value="Bike"
                    checked={vehicleModel === "Bike"}
                    onChange={() => setVehicleModel("Bike")}
                  />
                  <label htmlFor="Bike">Bike</label>
                </div>
                <div className="radio-container">
                  <input
                    type="radio"
                    value="Mountain Bike"
                    checked={vehicleModel === "Mountain Bike"}
                    onChange={() => setVehicleModel("Mountain Bike")}
                  />
                  <label htmlFor="Mountain Bike">Mountain Bike</label>
                </div>
                <div className="radio-container">
                  <input
                    type="radio"
                    value="Bullet"
                    checked={vehicleModel === "Bullet"}
                    onChange={() => setVehicleModel("Bullet")}
                  />
                  <label htmlFor="Bullet">Bullet</label>
                </div>
              </>
            ) : (
              <>
                <div className="radio-container">
                  <input
                    type="radio"
                    value="Luxurious Car"
                    checked={vehicleModel === "Luxurious Car"}
                    onChange={() => setVehicleModel("Luxurious Car")}
                  />
                  <label htmlFor="Luxurious Car">Luxurious Car</label>
                </div>
                <div className="radio-container">
                  <input
                    type="radio"
                    value="Classic Car"
                    checked={vehicleModel === "Classic Car"}
                    onChange={() => setVehicleModel("Classic Car")}
                  />
                  <label htmlFor="Classic Car">Classic Car</label>
                </div>
                <div className="radio-container">
                  <input
                    type="radio"
                    value="Mini Cab"
                    checked={vehicleModel === "Mini Cab"}
                    onChange={() => setVehicleModel("Mini Cab")}
                  />
                  <label htmlFor="Mini Cab">Mini Cab</label>
                </div>
                <div className="radio-container">
                  <input
                    type="radio"
                    value="Sports Car"
                    checked={vehicleModel === "Sports Car"}
                    onChange={() => setVehicleModel("Sports Car")}
                  />
                  <label htmlFor="Sports Car">Sports Car</label>
                </div>
              </>
            )}
          </div>
        )}
        {step === 4 && (
          <>
            <div className="form-control">
              <h1>Contact Information</h1>
              <input
                type="text"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                placeholder="Contact Number"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Address"
              />
            </div>
            <div className="form-control">
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                placeholder="Start Date"
                style={{ marginBottom: "15px" }}
              />
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                placeholder="End Date"
              />
            </div>
          </>
        )}
        <div className="form-actions">
          {step > 1 && (
            <button onClick={handlePrevious} className="btn btn-primary">
              Previous
            </button>
          )}
          {step < 4 && (
            <button onClick={handleNext} className="btn btn-primary">
              Next
            </button>
          )}
          {step === 4 && (
            <button onClick={handleSubmit} className="btn btn-success">
              Submit
            </button>
          )}
        </div>
        <ToastContainer />
      </div>
    );
};

export default BookingForm;
