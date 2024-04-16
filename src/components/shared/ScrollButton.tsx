
import { animateScroll } from "react-scroll";
import rocketImage from '../../assets/scroll/rocket (2).png';
import classes from './scrollButton.module.css';
import { useEffect, useState } from "react";

function ScrollButton() {

  const [scrollcss,setScrollcss] = useState(false);

  const options = {
    smooth: false,
    duration:150
  };
  
  const scrollToTop=()=>{
     animateScroll.scrollToTop(options);
     setScrollcss(true);
   //  console.log("scroll")
     
  }
  useEffect(()=>{
    const timer=setTimeout(()=>{//console.log("here") ; 
      setScrollcss(false)},1000);

    return  ()=>clearTimeout(timer)

  },[scrollcss])


  return (
    <div className={`fixed bottom-5 right-5 ${classes.main}`} >
      <button onClick={scrollToTop}>
        <img src={rocketImage} alt="scroll" className={`${!scrollcss && classes.scrollImage} ${scrollcss && classes.scrollAnimation} `}></img>
      </button>
    </div>
  )
}

export default  ScrollButton;
