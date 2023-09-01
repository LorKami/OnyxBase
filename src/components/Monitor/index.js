import React, { useState, useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import '../Monitor/Monitor.css'

import MMask from '../../images/metamask.svg'
import Onyx from '../../images/onyx.png'

const Monitor = () => {

  const [finalNum, setFinalNum] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFinalNum(getRandomNum());
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  function getRandomNum() {
    return Math.floor(Math.random() * (8 - 5 + 1)) + 5;
  }

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div>

      <div className='Monitor'
        data-aos="fade-right"
        data-aos-easing="ease-in-sine"
        data-aos-offset="300"
        data-aos-delay="500">

        <div className='MonitorWV'>

          <div className='Welcome'>
            <h2>Welcome to ShibaOnyx</h2>
            <p>"Shibarium Chain" DAO, pegged to the price of $BONE</p>
            <p>ShibaOnyx Finance is an algorithmic stable coin protocol pegged 1:1 to Bone on Shibarium Chain. Much like Basis Cash our protocol uses three tokens (SNYX, SSHARE, SBOND) to incentivize a stable 1:1 peg to BONE.
              The protocol's underlying mechanism dynamically adjusts SNYX supply, pushing its price up or down relative to the price BONE.</p>
            <p className='PLinks'>Read our <a href='https://shibaonyx.gitbook.io/shibaonyx_/'>Gitbook</a></p>
            <p>Join our <a href='https://t.me/ShibaonyxOfficial'>Telegram</a> and <a href='https://twitter.com/ShibaOnyx'> Twitter</a></p>
          </div>

          <div className="VLock">
            <h2>Total Value Locked</h2>
            {/* <p>${finalNum}</p> */}
            <p>$0</p>
          </div>
        </div>

        <div className='MonitorBoxSec'>
          <div className='MonitorBoxes'>

            <div className='Boxes'>
              <div className='WCo'>
                <button className='WCoBtn'><span>+ </span><img src={MMask} /></button>
              </div>
              <img src={Onyx} />
              <h2>SNYX</h2>
              <p>1 SNYX (1.0 Peg) =</p>
              <h3>-.---- $BONE</h3>
              <p>$0 / $BONE</p>
              <p className='MBSmall'>Market cap: $0</p>
              <p className='MBSmall'>Circulating supply: 44,000</p>
              <p className='MBSmall'>Total supply: 44,000</p>
            </div>

            <div className='Boxes'>
              <div className='WCo'>
                <button className='WCoBtn'><span>+ </span><img src={MMask} /></button>
              </div>
              <img src={Onyx} />
              <h2>BONE</h2>
              <p>1 SNYX (1.0 Peg) =</p>
              <h3>-.---- $BONE</h3>
              <p>$0 / $BONE</p>
              <p className='MBSmall'>Market cap: $0</p>
              <p className='MBSmall'>Circulating supply: 44,000</p>
              <p className='MBSmall'>Total supply: 44,000</p>
            </div>

            <div className='Boxes'>
              <div className='WCo'>
                <button className='WCoBtn'><span>+ </span><img src={MMask} /></button>
              </div>
              <img src={Onyx} />
              <h2>SNYX-BONE</h2>
              <p>1 SNYX (1.0 Peg) =</p>
              <h3>-.---- $BONE</h3>
              <p>$0 / $BONE</p>
              <p className='MBSmall'>Market cap: $0</p>
              <p className='MBSmall'>Circulating supply: 44,000</p>
              <p className='MBSmall'>Total supply: 44,000</p>
            </div>

          </div>
        </div>



      </div>

    </div>
  )
}

export default Monitor