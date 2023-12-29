import React,{useState} from 'react'
import Datepicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.module.css'
import calendar from '../assests/icons8-calendar-48.png';
import '../styles/Datepicker.css';

const Datepicker1= () => {
    const [selectedDate,setDate] = useState(null);
  return (
    <div className='datepicker-container'>
      <Datepicker selected={selectedDate} onChange={date => setDate(date)} />
      <img className='calendar-icon' src={calendar} alt="calendar" />
    </div>

  )
}

export default Datepicker1;