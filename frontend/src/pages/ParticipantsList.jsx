import React, { useState } from 'react';
import DatePicker from 'react-datepicker'; // Corrected import
import 'react-datepicker/dist/react-datepicker.css'; 

const ParticipantList = () => {
  const [participants, setParticipants] = useState([
    { id: 1, name: 'John Doe', scheduledDate: null },
    { id: 2, name: 'Jane Smith', scheduledDate: null },
    { id: 3, name: 'Tom Johnson', scheduledDate: null },
  ]);

  const handleDelete = (id) => {
    setParticipants(participants.filter(participant => participant.id !== id));
  };

  const handleSchedule = (id, date) => {
    setParticipants(participants.map(participant =>
      participant.id === id ? { ...participant, scheduledDate: date } : participant
    ));
  };

  return (
    <div>
      <h3>Participants</h3>
      <ul>
        {participants.map(participant => (
          <li key={participant.id} style={{ marginBottom: '20px' }}>
            <span>{participant.name}</span>
            <button onClick={() => handleDelete(participant.id)} style={{ marginLeft: '10px' }}>Delete</button>
            <button onClick={() => handleSchedule(participant.id, new Date())} style={{ marginLeft: '10px' }}>
              Schedule
            </button>
            {participant.scheduledDate && (
              <p>Scheduled for: {participant.scheduledDate.toLocaleDateString()}</p>
            )}
            <DatePicker
              selected={participant.scheduledDate}
              onChange={(date) => handleSchedule(participant.id, date)}
              dateFormat="MMMM d, yyyy"
              showPopperArrow={false}
              minDate={new Date()}
              placeholderText="Select a date"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ParticipantList;
