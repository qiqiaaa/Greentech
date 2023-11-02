import React, { useState } from 'react';

const SetMeetingPage = () => {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [participants, setParticipants] = useState('');

  const handleStartTimeChange = (event) => {
    setStartTime(event.target.value);
  };

  const handleEndTimeChange = (event) => {
    setEndTime(event.target.value);
  };

  const handleParticipantsChange = (event) => {
    setParticipants(event.target.value);
  };

  const handleSetMeeting = () => {
    // 处理会议预约设置的逻辑，可以根据实际需求进行扩展
    // 这里只是一个示例，可以根据实际需求进行扩展
    alert('会議を設定しました！');
  };

  return (
    <div style={{ height: '100vh', backgroundColor: 'DarkSeaGreen', overflow: 'hidden', display: 'flex', flexDirection: 'column', }}>
      <h1>会議予約</h1>
      <div style={{ width: 500, display: 'flex', flexDirection: 'column' }}>
        <label htmlFor="startTime">开始時刻:</label>
        <input
          type="time"
          id="startTime"
          value={startTime}
          onChange={handleStartTimeChange}
        />

        <label htmlFor="endTime">終了時刻:</label>
        <input
          type="time"
          id="endTime"
          value={endTime}
          onChange={handleEndTimeChange}
        />

        <label htmlFor="participants">参加メンバー:</label>
        <input
          type="text"
          id="participants"
          value={participants}
          onChange={handleParticipantsChange}
        />

      </div>
      <br>
      </br><div style={{ width: 500, height: 40, backgroundColor: 'MediumPurple', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={handleSetMeeting}>会議設定</div>


    </div>
  );
};

export default SetMeetingPage;
