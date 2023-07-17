import React,{useContext} from 'react'
import './product.css'
import { ThemeContext } from '../../context';

const Product = ({img, link}) => {
  const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className='p'>
        <div className='p-browser' style={{backgroundColor:darkMode && "#D7A1F9"}}>
            <div className='p-circle'></div>
            <div className='p-circle'></div>
            <div className='p-circle'></div>
        </div>
        <a href={link} target='_blank' rel='noreferrer'>
            <img src={img} alt='card img' className='p-img'/>
        </a>
    </div>
  )
}

export default Product
