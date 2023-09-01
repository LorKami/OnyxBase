import React from 'react'
import { FaTwitter, FaTelegramPlane, FaGithub, FaDiscord } from 'react-icons/fa';
import '../Socialbar/Socialbar.css'

const Socialbar = () => {
    return (
        <div>
            <div className='SocialBar'>
                <div className='Socials'>
                    <a href='https://twitter.com/ShibaOnyx' target='_blank'><FaTwitter style={{ verticalAlign: 'middle' }} size='2rem' /></a>
                    <a href='https://t.me/ShibaonyxOfficial' target='_blank'><FaTelegramPlane style={{ verticalAlign: 'middle' }} size='2rem' /></a>
                    <a href='https://shibaonyx.gitbook.io/shibaonyx_/' target='_bank'><FaGithub style={{ verticalAlign: 'middle' }} size='2rem' /></a>
                </div>
            </div>
        </div>
    )
}

export default Socialbar