import React, { useContext, useRef, useState } from 'react'
import './contact.css'
import Phone from '../../img/Phone.png'
import Email from '../../img/Mail.png'
import Address from '../../img/Address.png'
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context'

const Contacts = () => {

    const formRef = useRef();
    const [done,setDone] = useState(false);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e)=>{
       e.preventDefault();
       emailjs.sendForm('service_3zmm9cf', 'template_2xpd6ko', formRef.current, 'zTA3U02PcZoLm_tLS')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
     
    }

  return (
    <div className='c'>
      <div className='c-bg'></div>
        <div className='c-wrapper'>
            <div className='c-left'>
                <h1 className='c-title'>Let's discuss your project</h1>
                <div className='c-info'>
                   <div className='c-info-item'>
                        <img src={Phone} alt='info' className='c-icon' /> 
                        9888854125
                   </div>
                   <div className="c-info-item">
                        <img className="c-icon" src={Email} alt="" />
                        gargricha2405@gmail.com
                   </div>
                   <div className="c-info-item">
                        <img className="c-icon" src={Address} alt="" />
                        Derabassi, Punjab
                   </div>
                </div>
            </div>
            <div className='c-right'>
                <p className="c-desc">
                    <b>What’s your story?</b> Get in touch. Always available for
                    freelancing if the right project comes along. me.
                </p>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input style={{backgroundColor:darkMode && " #D7A1F9"}} type='text' placeholder='Name' name='user_name'/>
                    <input style={{backgroundColor:darkMode && " #D7A1F9"}} type='text' placeholder='Subject' name='user_subject'/>
                    <input style={{backgroundColor:darkMode && " #D7A1F9"}} type='email' placeholder='Email' name='user_email'/>
                    <textarea style={{backgroundColor:darkMode && " #D7A1F9"}}  rows={5} placeholder='Message' name='message'/>
                    <button>Submit</button>
                    {done && 'Thank You!'}
                </form>
            
        </div>
      </div>
    </div>
  )
}

export default Contacts
