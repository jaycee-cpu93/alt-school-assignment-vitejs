import React, { useState } from 'react'
import '../styles/style.css'
import { MdKeyboardArrowUp, MdKeyboardArrowDown, MdOutlineKeyboardDoubleArrowUp, MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import {FiHash} from "react-icons/fi";
import {IoReload} from "react-icons/io5";

const Counter = () => {
    const [count, setCount] = useState(0)
    const increasebyOneHandler = () =>{
        setCount(count + 1)
    }
    const increasebyTenHandler = () =>{
        setCount(count + 10)
    }
    const defaultCountHandler = () =>{
        setCount(0)
    }
    const getRandomNumberHandler = () => {
        setCount(Math.floor(Math.random() * 100) + 1);
    };
    const decreasebyTenHandler = () =>{
        setCount(count - 10)
    }
    const decreasebyOneHandler = () =>{
        setCount(count - 1)
    }
  return (
    <div className='counter'>
        <div className='counter-bg'>
            <div className='main-bg'>
                <p>Current value</p>
                <h1>{count}</h1>
                <div className='icons'>
                    <MdKeyboardArrowUp onClick={increasebyOneHandler} className='arrow'/>
                    <MdOutlineKeyboardDoubleArrowUp onClick={increasebyTenHandler} className='arrow'/>
                    <IoReload onClick={defaultCountHandler} className='arrow rotate'/>
                    <FiHash onClick={getRandomNumberHandler} className='arrow'/>
                    <MdOutlineKeyboardDoubleArrowDown onClick={decreasebyTenHandler} className='arrow'/>
                    <MdKeyboardArrowDown onClick={decreasebyOneHandler} className='arrow'/>
                </div>
            </div>
        </div>
    </div>
 
  )
}

export default Counter