import React, { useState } from 'react';
import styles from './workTable.module.css';

function WorkTable() {
    const [selectedDay, setSelectedDay] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [validatedSlots, setValidatedSlots] = useState([]); 

    const handleCheckButtonClick = () => {
        setValidatedSlots([...validatedSlots, { day: selectedDay, timeSlot: selectedTime }]);
    };

    const handleDismissButtonClick = () => {
      
        const indexToRemove = validatedSlots.findIndex(obj => obj.day === selectedDay && obj.timeSlot === selectedTime);
        if (indexToRemove !== -1) {
            validatedSlots.splice(indexToRemove, 1);
        }
        setSelectedDay("")
        setSelectedTime("")
    };
      const handleResetButtonClick=()=>{
        setValidatedSlots([])
      }
    const handleDayChange = (e) => {
        setSelectedDay(e.target.value);
    };

    const handleTimeChange = (e) => {
        setSelectedTime(e.target.value);
    };

    const getBackgroundColor = (day, timeSlot) => {
        const isValidated = validatedSlots.some(slot => slot.day === day && slot.timeSlot === timeSlot);
        return isValidated ? 'lightgreen' : '';
    };

    return (
        <div className={styles.containerrr}>
            <div className={styles.cony}>
                <div className={styles.title}>
                    <div className={styles.bare}></div>
                    <div>
                        <h3>Schedule of Work</h3>
                    </div>
                </div>
            </div>
              
            <div className={styles.conatain}>
                <h1 className={styles.h1}>Your Availability :</h1>
                <div className={styles.inputs}>
                    <select onChange={handleDayChange} value={selectedDay}>
                        <option value="" disabled hidden>Days of week</option>
                        <option value="Sunday">Sunday</option>
                        <option value="Monday">Monday</option>
                        <option value="Tuesday">Tuesday</option>
                        <option value="Wednesday">Wednesday</option>
                        <option value="Thursday">Thursday</option>
                        <option value="Friday">Friday</option>
                        <option value="Saturday">Saturday</option>
                    </select>
                    <select onChange={handleTimeChange} value={selectedTime}>
                        <option value="" disabled hidden>Time slots</option>
                        <option value="8:00-10:00">8:00-10:00</option>
                        <option value="10:00-12:00">10:00-12:00</option>
                        <option value="12:00-14:00">12:00-14:00</option>
                        <option value="14:00-16:00">14:00-16:00</option>
                        <option value="16:00-18:00">16:00-18:00</option>
                        <option value="18:00-20:00">18:00-20:00</option>
                    </select>
                </div>
                <h1></h1>
                <button id="checkButton" onClick={handleCheckButtonClick} className={styles.btn1}>
                    Validate
                </button>
                <button id="dismissButton" onClick={handleDismissButtonClick} className={styles.btn2}>
                    Dismiss
                </button>
                <button id="dismissButton" onClick={handleResetButtonClick} className={styles.btn2}>
                    Rest table
                </button>
            </div>
            <div className={styles.schedule}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th style={{ color: 'black' }}>Time</th>
                            <th>Monday</th>
                            <th>Tuesday</th>
                            <th>Wednesday</th>
                            <th>Thursday</th>
                            <th>Friday</th>
                            <th>Saturday</th>
                            <th>Sunday</th>
                        </tr>
                    </thead>
                    <tbody>
                        {['8:00-10:00', '10:00-12:00', '12:00-14:00', '14:00-16:00', '16:00-18:00', '18:00-20:00'].map((timeSlot) => (
                            <tr key={timeSlot}>
                                <td>{timeSlot}</td>
                                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                                    <td
                                        key={day}
                                        style={{
                                            backgroundColor: getBackgroundColor(day, timeSlot)
                                        }}
                                    ></td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default WorkTable;
