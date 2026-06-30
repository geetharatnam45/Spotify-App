import React from 'react'
import speaker from '../assets/speaker.png'
import offline from '../assets/offline.png'
import music from '../assets/music.png'
import ears from '../assets/ears.png'
import '../Spotify/Circle.css'


const Circle = () => {
  return (
    <div>
        <section id='section1'>
            <h1 className='demo'>Soundtrack your study</h1>

            <img src={speaker} alt="" className='image1'/>
            <h2 className='demo1'>Ad-free music listening</h2>
            <p className='p1'>Study til sunset. Dance til dawn.</p>

            <img src={offline} alt="" className='image2'/>
            <h2 className='demo2'>Listen offline</h2>
            <p className='p2'>Never worry about data again, <br /><span id='g1'>wherever you are.</span></p>

            <img src={music} alt="" className='image3'/>
            <h2 className='demo3'>Music for every moment</h2>
            <p className='p3'>Millions of songs, amazing <br /><span id='g2'>playlists.</span></p>

            <img src={ears} alt="" className='image4'/>
            <h2 className='demo4'>Easy on the ears</h2>
            <p className='p4'>Premium packs even more sound <br /><span id='g3'>quality into every song.</span></p>
      </section>
    </div>
  )
}

export default Circle