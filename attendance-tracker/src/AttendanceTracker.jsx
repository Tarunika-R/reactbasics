import React, { useState } from 'react';

function AttendanceTracker() {
  const [attendanceCount, setAttendanceCount] = useState(0);

  // Increment the count
  const markAttendance = () => {
    setAttendanceCount(attendanceCount + 1);
  };

  // Reset the count
  const resetAttendance = () => {
    setAttendanceCount(0);
  };

  return (
    <div style={styles.container}>
      <h1>Attendance Tracker</h1>
      <p style={styles.attendanceCount}>Attendees: {attendanceCount}</p>
      <div>
        <button onClick={markAttendance} style={styles.button}>
          Mark Attendance
        </button>
        <button onClick={resetAttendance} style={styles.button}>
          Reset
        </button>
      </div>
    </div>
  );
}

// Inline styles for basic UI
const styles = {
  container: {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    marginTop: '50px',
  },
  attendanceCount: {
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '20px 0',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    margin: '10px',
    cursor: 'pointer',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
  },
};

export default AttendanceTracker;
