import React from 'react';
import meta from '../../../Asset/Images/meta.jpeg';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import './Home.css';
import Courses from '../Courses/Courses';
import Community from '../Community/Community.js';
import Plans from '../Plans/Plans.js';
function Home() {
    
  return (
    <>
    <section>

        <div className='container'>
            <div className='home-container'>
                <div className='home-content'>
                    <h2 className='section_title'>KNOW US BETTER FOR YOUR FUTURE !</h2>
<p> 
Enroll, Learn, Grow, Repeat! Get ready to achieve your learning goals with MathTech!!!

</p>
<div className='home-btns'>
    <button className='register-btn'>Get Started</button>
    <button className='register-btn'>Watch Now!</button>
</div>
                </div>
                <div className='home-img'>
                    <div className='home-img-wrapper'>
                        <div className='box-01'>
                            <div className='box-img'>
                                <img src={meta} alt=""/>

                            </div>

                            <div className='whatsapp-container'>
                                <h5>500+ students</h5>
                                <AiOutlineWhatsApp color='green'/>
                            </div>
                            <div className='support'>
                                <h5>Active Support</h5>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </section>
    <Courses/>
    <Community/>
    <Plans/>
    </>
  )
}

export default Home
