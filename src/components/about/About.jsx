import React,{useContext} from 'react'
import Painter from '../../img/Painter.jpg'
import './about.css'
import Award from '../../img/Award.png'
import { ThemeContext } from '../../context'

const About = () => {
  const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className='a'>
      <div className='a-left'>
        <div className='a-card bg' style={{backgroundColor: darkMode && "#D7A1F9"}}></div>
        <div className='a-card'>
            <img src={Painter} alt='' className='a-img' />
        </div>
      </div>
      <div className='a-right'>
        <h1 className='a-title'>About Me</h1>
        <p className='a-sub'>
          Passionate about web development and armed with a Bachelor's degree in Computer Science Engineering from Chitkara University, I am a dynamic and ambitious frontend developer actively seeking roles in the industry. With a solid foundation in HTML, CSS, and JavaScript, I am dedicated to crafting captivating user interfaces that seamlessly merge aesthetics with functionality.
        </p>
        <p className="a-desc">
          What sets me apart is my eagerness to stay up-to-date with the latest trends and technologies in frontend development.I have a keen eye for detail and a deep understanding of responsive design principles, ensuring optimal user experiences across various devices.
        </p>
         <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Certified UX/UI designer by Google</h4>
            <p className="a-award-desc">
              <a href='https://www.coursera.org/account/accomplishments/verify/2DDTMXMVBQCL' target='_blank' rel="noreferrer">Link To Certificate</a> 
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
