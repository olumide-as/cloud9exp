import React from 'react'
import './Landing.css'
import {logo} from '../../Assets'
import { SiTriller, SiFacebook, SiInstagram, SiTwitter, SiTiktok, SiYoutube, SiLinkedin } from "react-icons/si";

const Landing = () => {
  return (
    <div className='cloud9exp__landing'>

        <div className='cloud9exp__landing_content'>
            <img src={logo} alt="cloud9exp" />
            <h1>Coming Soon...</h1>
            <p> Our Website is under construction, stay tuned for exciting updates </p>
            <div className="cloud9exp__landing_socials">
                <a href="https://web.facebook.com/cloud9.exp"> <SiFacebook size={28}/> </a>
                <a href="https://www.instagram.com/cloud9.exp/"> <SiInstagram size={28}/> </a>
                <a href="https://twitter.com/cloud9_exp"> <SiTwitter size={28}/> </a>
                <a href="https://www.tiktok.com/@cloud9.exp"> <SiTiktok size={28}/> </a>
                <a href="https://youtube.com"> <SiYoutube size={28}/> </a>
                <a href="https://www.linkedin.com/company/cloud9exp/"> <SiLinkedin size={28}/> </a>
                <a href="https://triller.co/@cloud9.exp"> <SiTriller size={28}/> </a>                
            </div>

        </div>
    
    </div>
  )
}

export default Landing