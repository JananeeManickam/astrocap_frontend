// asteroids.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import AsteroidCard from './AsteroidCard';
import { format } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import './datepicker-theme.css'

const Asteroids = () => {
  const [asteroids, setAsteroids] = useState([]);
  const [startDate, setStartDate] = useState(new Date('2023-04-15'));
  const [endDate, setEndDate] = useState(new Date('2023-04-20'));

  const fetchAsteroids = async () => {
    try {
      const start = format(startDate, 'yyyy-MM-dd');
      const end = format(endDate, 'yyyy-MM-dd');
      const response = await axios.get(`http://localhost:8000/api/pictures/asteroids/?start_date=${start}&end_date=${end}`);
      setAsteroids(response.data.asteroids);
    } catch (err) {
      console.error("Error fetching asteroid data:", err);
    }
  };

  useEffect(() => {
    fetchAsteroids();
  }, [startDate, endDate]);

  return (
    <div>
      <div style={styles.datePickerContainer}>
        <div style={styles.picker}>
          <label style={styles.label} style={{color:'#93c5fd', size:'30px', padding: '5px'}}>Start Date</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            dateFormat="yyyy-MM-dd"
          />
        </div>

        <div style={styles.picker}>
          <label style={styles.label} style={{color:'#93c5fd', size:'30px', padding: '5px'}}>End Date</label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            dateFormat="yyyy-MM-dd"
          />
        </div>
      </div>
      <hr style={{
        height: "2px",
        border: "none",
        marginTop: "1rem",
        background: "linear-gradient(90deg, silver, #e5e7eb, silver)",
        boxShadow: "0 0 10px silver, 0 0 20px #f8fafc",
    }}/>
      <div style={styles.wrapper}>
        <div style={styles.grid}>
          {asteroids.map((asteroid, index) => (
            <AsteroidCard key={index} asteroid={asteroid} />
          ))}
        </div>
      </div>
    </div>
  );
};

// 💅 Styles
const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    padding: '30px 15px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    justifyContent: 'center',
    maxWidth: '960px',
    width: '100%',
  },
  datePickerContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    padding: '20px',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  picker: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  label: {
    fontSize: '14px',
    marginBottom: '6px',
    fontWeight: 'bold',
    color: '#333',
  },
};

export default Asteroids;
