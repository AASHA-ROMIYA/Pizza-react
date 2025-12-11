import React from 'react'
import MultiplePizzas from '../assests/multiplePizzas.jpeg'
import '../styles/About.css'
export const About = () => {
  return (
   <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
         Pedro’s Pizzeria believes great pizza starts with fresh ingredients and real care. Our dough is handmade, our sauces are rich with flavor, and every slice is crafted to make you feel satisfied. Whether you love classic styles or bold new toppings, we have something for every taste.

Our team takes pride in serving quality food with friendly service. Each pizza is baked to perfection with generous toppings and balanced flavors. We’re always improving and adding new ideas to keep our menu exciting.

At Pedro’s Pizzeria, we don’t just serve pizza — we create moments you’ll enjoy sharing. Dine in or order out, and let us make your day a little better, one slice at a time.
        </p>
      </div>
    </div>
  )
}
