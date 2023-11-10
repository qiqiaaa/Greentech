// App.js
import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import PermissionPage from './PermissionPage';
import ServiceListPage from './ServiceListPage';
import SetMeetingPage from './SetMeetingPage';
import StartMeetingPage from './StartMeetingPage';
// import Contact from './Contact';
import SetMeeting from './api/SetMeeting';
const App = () => {
  var express = require('express');
  var app = express();

  app.post('/api/setMetting', function (req, res) {
    res.send('Hello World!');
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/permissionPage" element={<PermissionPage />} />
        <Route path="/serviceListPage" element={<ServiceListPage />} />

        <Route path="/startMeetingPage" element={<StartMeetingPage />} />
        <Route path="/setMeetingPage" element={<SetMeetingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
