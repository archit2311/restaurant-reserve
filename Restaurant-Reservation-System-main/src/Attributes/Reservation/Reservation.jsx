import React, { useState } from 'react';
import axios from 'axios';
import './Reservation.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Table = ({ id, text, isSelected, isSelectable, onClick }) => {
  const tableClassName = isSelected ? 'table selected' : 'table';

  return (
    <div
      className={isSelectable ? tableClassName : 'table masked'}
      onClick={isSelectable ? onClick : null}
    >
      <span className="table-info text-white">Table Type {id}</span>
      {text && <span className="table-text">{text}</span>}
    </div>
  );
};

const Reservation = () => {
  const [tables, setTables] = useState([
    { id: 1, text: 'Capacity 1-2', isSelected: false },
    { id: 2, text: 'Capacity 3-4', isSelected: false },
    { id: 3, text: 'Capacity 5-6', isSelected: false },
    { id: 4, text: 'Capacity 7-8', isSelected: false },
    { id: 5, text: 'Capacity 9-12', isSelected: false },
  
    // Add more tables with their respective properties
  ]);

  const [selectedTable, setSelectedTable] = useState(null);
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [reservationDate, setReservationDate] = useState('');
  const [reservationTime, setReservationTime] = useState('');
  const [mealOption, setMealOption] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleTableClick = (id) => {
    setSelectedTable(id);
  };

  const handleCustomerNameChange = (e) => {
    setCustomerName(e.target.value);
  };

  const handleCustomerEmailChange = (e) => {
    setCustomerEmail(e.target.value);
  };

  const handleCustomerPhoneChange = (e) => {
    setCustomerPhone(e.target.value);
  };

  const handleAdditionalNotesChange = (e) => {
    setAdditionalNotes(e.target.value);
  };

  const handleReservationDateChange = (e) => {
    setReservationDate(e.target.value);
  };

  const handleReservationTimeChange = (e) => {
    setReservationTime(e.target.value);
  };

  const checkIfTableReserved = (tableNumber, reservationDate) => {
    return axios
      .get('http://localhost:8500/checkreservation', {
        params: {
          tableNumber,
          reservationDate,
        },
      })
      .then((response) => {
        const isReserved = response.data.isReserved;
        return isReserved;
      })
      .catch((error) => {
        console.error('Error checking reservation:', error);
        return false;
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedTableData = tables.find((table) => table.id === selectedTable);
    const reservationDateTime = new Date(reservationDate + 'T' + reservationTime);
    const reservationData = {
      tableNumber: selectedTable,
      capacity: selectedTableData.text,
      reservationDate,
      reservationTime,
      customerName,
      customerEmail,
      customerPhone,
      additionalNotes,
      mealOption,
    };

    checkIfTableReserved(selectedTable, reservationDate)
      .then((isReserved) => {
        if (isReserved) {
          setErrorMessage('The table is already reserved on this date.');
        } else {
          axios
            .post('http://localhost:8500/booknow', reservationData)
            .then(() => {
              alert('Table Reserved Successfully');
              setErrorMessage('');
              setSelectedTable(null);
              setCustomerName('');
              setCustomerEmail('');
              setCustomerPhone('');
              setAdditionalNotes('');
              setReservationDate('');
              setReservationTime('');
              setMealOption('');
            })
            .catch((error) => {
              console.error('Error submitting data:', error);
              alert('Table Already reversed!! Please select another table');
            });
        }
      })
      .catch((error) => {
        console.error('Error checking reservation:', error);
        alert('Error checking the reservation. Please try again.');
      });
  };

  return (
    <div className="container">
      <h1 id='reverseh1' className="text-center mt-5">Table Reservation</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="customerName">Customer Name:</label>
          <input
            type="text"
            className="form-control"
            id="customerName"
            value={customerName}
            onChange={handleCustomerNameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="customerEmail">Customer Email:</label>
          <input
            type="email"
            className="form-control"
            id="customerEmail"
            value={customerEmail}
            onChange={handleCustomerEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="customerPhone">Customer Phone:</label>
          <input
            type="tel"
            className="form-control"
            id="customerPhone"
            value={customerPhone}
            onChange={handleCustomerPhoneChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="reservationDate">Reservation Date:</label>
          <input
            type="date"
            className="form-control"
            id="reservationDate"
            value={reservationDate}
            onChange={handleReservationDateChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="mealOption">Meal Option:</label>
          <select
            className="form-control"
            id="mealOption"
            value={mealOption}
            onChange={(e) => setMealOption(e.target.value)}
            required
          >
            <option value="">Select Meal Option</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="reservationTime">Reservation Time:</label>
          <select
            className="form-control"
            id="reservationTime"
            value={reservationTime}
            onChange={handleReservationTimeChange}
            required
          >
            <option value="">Select Time</option>
            {mealOption === 'lunch' ? (
              <>
                <option value="11:00 AM">11:00 AM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="01:00 PM">01:00 PM</option>
                <option value="01:30 PM">01:30 PM</option>
                <option value="02:00 PM">02:00 PM</option>
                {/* Add more lunch time options */}
              </>
            ) : mealOption === 'dinner' ? (
              <>
                <option value="8:00 PM">8:00 PM</option>
                <option value="9:00 PM">9:00 PM</option>
                <option value="9:30 PM">9:30 PM</option>
                <option value="10:00 PM">10:00 PM</option>
                <option value="10:30 PM">10:30 PM</option>
                <option value="11:00 PM">11:00 PM</option>
                {/* Add more dinner time options */}
              </>
            ) : null}
          </select>
        </div>
        <div className="table-container">
          {tables.map((table) => (
            <Table
              key={table.id}
              id={table.id}
              text={table.text}
              isSelected={table.id === selectedTable}
              isSelectable={true}
              onClick={() => handleTableClick(table.id)}
            />
          ))}
        </div>
       
        <button style={{backgroundColor:"#f5deb3" ,marginLeft:"45%"}} type="submit" className="btn btn-primary  text-black" disabled={!selectedTable}>
          Submit
        </button>
      </form>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
};

export default Reservation;
