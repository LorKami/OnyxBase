import React from 'react'
import { FaTwitter, FaTelegramPlane, FaGithub, FaDiscord } from 'react-icons/fa';
import '../Socialbar/Socialbar.css'

const Socialbar = () => {
    return (
        <div>
            <div className='SocialBar'>
                <div className='Socials'>
                    <a href='https://twitter.com/' target='_blank'><FaTwitter style={{ verticalAlign: 'middle' }} size='2rem' /></a>
                    <a href='https://discord.com/' target='_blank'><FaTelegramPlane style={{ verticalAlign: 'middle' }} size='2rem' /></a>
                    <a><FaGithub style={{ verticalAlign: 'middle' }} size='2rem' /></a>
                    <a><FaDiscord style={{ verticalAlign: 'middle' }} size='2rem' /></a>
                </div>
            </div>
        </div>
    )
}

export default Socialbar