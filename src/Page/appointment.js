import React, { useState } from 'react';

const AppointmentForm = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!phoneNumber || !appointmentDate) {
      setMessage('Phone number and appointment date are required!');
      return;
    }

    setIsSubmitting(true);
    setMessage('');

    try {
      const response = await fetch('http://localhost:3000/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phoneNumber,
          appointmentDate,
        }),
      });

      if (response.ok) {
        setMessage('Appointment successfully created!');
        // Clear form fields after successful submission
        setPhoneNumber('');
        setAppointmentDate('');
      } else {
        const errorText = await response.text();
        setMessage('Error: ' + errorText);
      }
    } catch (error) {
      console.error('Error creating appointment:', error);
      setMessage('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Schedule an Appointment</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Phone Number</label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter your phone number"
            required
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Choose Appointment Date</label>
          <input
            type="date"
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
            required
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <button type="submit" disabled={isSubmitting} style={styles.button}>
            {isSubmitting ? 'Submitting...' : 'Submit Appointment'}
          </button>
        </div>
      </form>

      {message && <div style={styles.message}>{message}</div>}
    </div>
  );
};

// Simple inline styling for the form
const styles = {
  container: {
    maxWidth: '500px',
    margin: '20px auto',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    fontSize: '14px',
    color: '#555',
    marginBottom: '5px',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    marginTop: '5px',
  },
  button: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  message: {
    textAlign: 'center',
    marginTop: '20px',
    fontSize: '16px',
  },
};

export default AppointmentForm;
