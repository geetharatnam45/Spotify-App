import React from 'react'
import '../Spotify/Body.css'

const Body = () => {
  return (
    <div>
        <section id='section'>
            <h1>₹69 for 2 months of Premium Student</h1>
            <p className='p'>Only ₹69/month after. Cancel anytime.</p>
            <button>Get Premium</button>
            <p>Offer available only to students at an accredited higher education institution. Offer not available to users who </p>
            <p id='p'>already tried Premium. Spotify Student Discount Offer <b>Terms and conditions apply.</b></p>
        </section>
    </div>
  )
}

export default Body