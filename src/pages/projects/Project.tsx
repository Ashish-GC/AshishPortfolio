
import { motion } from "framer-motion"
import classes from "./Projects.module.css"
import SimpleSlider from "./project_details/Slider"
import { Context } from "@/utils/Context";
import { useContext, useEffect, useRef } from "react";

function Project() {
  const {setActivePage}:any = useContext(Context);


  const ref:any= useRef();
 
  useEffect(()=>{
    const observer:any = new IntersectionObserver((entries)=>{
      const entry = entries[0];
      if(entry.isIntersecting){
        setActivePage("project")
      }
      
  })
        observer.observe(ref.current)  //observe the element 
             },[])

  return (
    <div    className={classes.main}>
      <div ref={ref}  className={classes.heading}>
        
        <div className={classes.hcontent}> 
        <p className={classes.top}>_____ Recent Works</p>
        <div className={classes.nav}>
        <p>Some of my favourite projects</p>
        {/* <button>view all projects</button> */}
        </div>
        </div> 
        
      </div>

     <motion.div 
  
      initial={{opacity:0 , scale:0.8}}
      whileInView={{opacity:1,scale:1}}
      transition={{duration:1}}

     className={classes.container}>
                     <SimpleSlider/>
     </motion.div>


    </div>
  )
}

export default Project
