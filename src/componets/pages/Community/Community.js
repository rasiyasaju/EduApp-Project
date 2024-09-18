import React from 'react';
import './Community.css';
import tc from '../../../Asset/Images/tc.png';

function Community() {
    const handleClick = () => {
        window.open('https://youtube.com/playlist?list=PLMN3UQxQKokv4X_RH_rmL8xKTk8Ba0P8Osi=0IrkO_-9EFHLwKJM' ,'_blank');
    }
  return (
    <div className='container'>
        <div className='start-wrapper'>
            <div className='start-img'>
                <img src={tc} alt=""/>

            </div>
            <div className='start-content'>
                <h2 className='section-title'>Join our Free tech Community</h2>
                <p>Unlock the power of knowledge and innovation by joining our vibrant and free whatsApp tech community</p>
                <button className='register-btn' OnClick={handleClick}>Join Now</button>
            </div>
        </div>
    </div>
  )  
}

export default Community
