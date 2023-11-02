import React from 'react';
import { Link } from 'react-router-dom';

const PermissionPage = () => {
  return (
    <div style={{ height: '100vh', backgroundColor: '	DarkSeaGreen', overflow: 'hidden', }}>

      <h1 style={{ display: 'block', }}><center>LineUserでログイン権限許可？</center></h1><br>
      </br>
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <Link style={{ backgroundColor: '	MediumPurple', width: 200, height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center', color: "#fff", marginBottom: 20 }} to="/startMeetingPage">Yes</Link>
        <Link style={{ backgroundColor: '	MediumPurple', width: 200, height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center', color: "#fff" }} to="/serviceListPage">No</Link>
      </div>
    </div>
  );
};

export default PermissionPage;
