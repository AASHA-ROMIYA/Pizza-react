import React from 'react'
import { Link } from 'react-router-dom'
import banner from '../assests/pizza.jpeg'
import '../styles/Home.css'
export const Home = () => {
  return (
    <div className='home' style={{background:`url(${banner})`}}>
        <div className="headerContainer" >
            <h1>Pedro's Pizzeria</h1>
            <p>PIZZA TO FITN ANY TASTE</p>
            <Link to="/menu">
                <button>ORDER NOW</button>
            </Link>
        </div>
    </div>
  )
}
