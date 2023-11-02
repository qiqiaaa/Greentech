import React from 'react';
import { useNavigate } from 'react-router-dom';

const StartMeetingPage = () => {
  const to = useNavigate()
  const handleStartMeeting = () => {
    to('/setMeetingPage')
  };

  return (
    <div style={{ height: '100vh', backgroundColor: 'DarkSeaGreen', overflow: 'hidden', }}>





      <h1>会議タイトル</h1>
      <button
        style={{
          backgroundColor: 'MediumPurple',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        onClick={handleStartMeeting}
      >
        会議予約
      </button>
    </div>
  );
};

export default StartMeetingPage;
