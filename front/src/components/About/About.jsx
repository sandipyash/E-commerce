import React from 'react'
import './About.css'
import img5 from '../../assets/images/5.jpeg';
import img6 from '../../assets/images/6.jpg';
import img7 from '../../assets/images/7.jpeg';
import img8 from '../../assets/images/8.jpg';
import img9 from '../../assets/images/9.jpg';

 function About() {
  return (
    <>
        
        <div className='gallery'>
            <h1 className='gallery-heading'>Developer Team</h1>
            <div className='image-t'>
            <img src={img5} alt='p-5' className='t1'/> 
            <h2 className='name-t1'>Sandip Adhikary</h2>
            <p className='about-t1'><b>Team Leader</b></p>
            <p className='about-t1'>Developing Front & Backend</p>
            </div>

            <div className='image-t'>
            <img src={img6} alt='p-6' className='t2'/> 
            <h2 className='name-t2'>Shanga Mukherjee</h2>
            <p className='about-t2'><b>Team Member</b></p>
            <p className='about-t2'>Design & Testing</p>
            </div>

            <div className='image-t'>
            <img src={img7} alt='p-7' className='t3'/> 
            <h2 className='name-t3'>Subhojit Sikdar</h2>
            <p className='about-t3'><b>Team Member</b></p>
            <p className='about-t3'>Structure Design</p>
            </div>

            <div className='image-t'>
            <img src={img9} alt='p-9' className='t4'/> 
            <h2 className='name-t4'>Anupam Debnath</h2>
            <p className='about-t4'><b>Team Member</b></p>
            <p className='about-t4'>User Authentication & Testing</p>
            </div>

            <div className='image-t'>
            <img src={img8} alt='p-8' className='t5'/> 
            <h2 className='name-t5'>Sayantan Mondal</h2>
            <p className='about-t5'><b>Team Member</b></p>
            <p className='about-t5'>System Analysis & Testing</p>
            </div>

        </div>
      
    </>
  )
}

export default About