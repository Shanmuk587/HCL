import React, { useState } from 'react';
import { Calendar, Trash2 } from 'lucide-react';

const ParticipantsTable = () => {
  const [participants, setParticipants] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'unscheduled' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'scheduled' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', status: 'unscheduled' },
  ]);

  const handleSchedule = (id) => {
    setParticipants(participants.map(participant => 
      participant.id === id 
        ? { ...participant, status: 'scheduled' }
        : participant
    ));
  };

  const handleDelete = (id) => {
    setParticipants(participants.filter(participant => participant.id !== id));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Participants List</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white rounded-lg shadow">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-left border-b">Participant's Name</th>
              <th className="p-4 text-left border-b">Email</th>
              <th className="p-4 text-left border-b">Status</th>
              <th className="p-4 text-left border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {participants.map((participant) => (
              <tr key={participant.id} className="border-b hover:bg-gray-50">
                <td className="p-4">{participant.name}</td>
                <td className="p-4">{participant.email}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-sm ${
                    participant.status === 'scheduled' 
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {participant.status}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleSchedule(participant.id)}
                      disabled={participant.status === 'scheduled'}
                      className={`flex items-center gap-1 px-3 py-1 rounded-md ${
                        participant.status === 'scheduled'
                          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          : 'bg-blue-500 text-white hover:bg-blue-600'
                      }`}
                    >
                      <Calendar size={16} />
                      Schedule
                    </button>
                    <button
                      onClick={() => handleDelete(participant.id)}
                      className="flex items-center gap-1 px-3 py-1 rounded-md bg-red-500 text-white hover:bg-red-600"
                    >
                      <Trash2 size={16} />
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ParticipantsTable;