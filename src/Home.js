import React,{useState}from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import ReactPlayer from 'react-player';
import video from './video.mp4';
// import Section from './Section'; 
import { FaAngleDoubleDown } from "react-icons/fa";
import Navbar from './navbar';
import { useEffect } from 'react';

const Home = () => {
  const [showtext,setShowtext]=useState(false);
  const [showtext1,setShowtext1]=useState(false);
  const [showtitle,setShowtitle]=useState(false);
  const [showbtn,setShowbtn]=useState(false);
  useEffect(()=>{
setTimeout(()=>{
setShowtext(true);
},5500);
setTimeout(()=>{
  setShowtext1(true);
  },2000);
  setTimeout(()=>{
    setShowtitle(true);
    },2000);
    setTimeout(()=>{
      setShowbtn(true);
      },9000);
  },[]);
  return (
    <div className='Home_Relative'>
      <nav className='wholescreennavbar'>
        <div className='wholescreennavbardiv'>Z - Saffron</div>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Product</li>
          <li>Contact Us</li>
        </ul>
      </nav>
      <div className='Responsive_navbar'>
             <Navbar/>
      </div>

      <video src={video} autoPlay loop muted className='videobackground' />
      <div className='Content_home'>
        <div className='content'>

        <div className='content_Z'>Z</div>
        {showtitle && 
        <div className='content_Title'>Princess Saffron</div>
      }
        {showtext1 && <div className='typewriter'>
        <div>The World is Full Of Beautiful.</div>
        </div>}
        {showtext && 
        <div className='typewriter'>
        <div>There is Nothing Else In The World Beyond Nature.</div>
       </div> }
       {showbtn && 
       <div className='Explore_btn'>
       <Link to="section" smooth={true} className='color_chn' duration={1000}>
          Explore More
          <FaAngleDoubleDown className='icon_animation' />
          </Link>
        </div>
        }
        </div>
      </div>
      {/* <Section /> */}
    </div>
  )
}

export default Home;
