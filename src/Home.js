// Home.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [isHome, setIsHome] = useState(false);
    const navigate = useNavigate()
    if (isHome) {
        return <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: "DarkSeaGreen", color: '#fff' }}>
            <a href="https://greentech.jp/" title="This is an HTML linked image">
                <img alt="Greentech株式会社" src='/logo512.png' width="120" height="75" />
            </a>
        </div>
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <div style={{ height: '85vh' }}>
                { }
            </div>
            <div style={{
                fontsize: '100',
                display: 'flex',
                justifyContent: 'space-between',
                height: '100%',
                width: '100%',
                color: '#fff',
                flex: 1,
                flexDirection: 'row'
            }}>
                <div style={{ flex: 1, backgroundColor: 'DimGray', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={() => {
                    setIsHome(true)
                }}>ホームページへ</div>
                <div style={{ flex: 1, backgroundColor: 'MediumPurple', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={() => {
                    navigate('/permissionPage')
                }}>お問い合わせ/スタッフログイン</div>
            </div>
        </div>
    );
};

export default Home;
