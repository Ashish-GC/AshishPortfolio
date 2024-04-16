
import { motion } from "framer-motion"
import classes from "./skill.module.css"
import { useContext, useEffect, useRef } from "react";
import { Context } from "@/utils/Context";
function Skill() {
  const {setActivePage}:any = useContext(Context);

  const ref:any= useRef();
 
  useEffect(()=>{
    const observer:any = new IntersectionObserver((entries)=>{
      const entry = entries[0];
      if(entry.isIntersecting){
        setActivePage("skill")
      }
      
  })
        observer.observe(ref.current)  //observe the element 
             },[])
  return (
    <div ref={ref} className={classes.main}>
    <div className={classes.heading}>
      <h1>Skills</h1>
    </div>

    <motion.div  
          initial={{opacity:0 , scale:0.5}}
          whileInView={{opacity:1,scale:1}}
          transition={{duration:1}}
     className={classes.container}>
        <motion.div
        // initial={{
        //   x:-300,
        // }}
        // whileInView={
        //   {
        //     x:0,
        //   }
        // }
        //  transition={{duration:1}}

         className={classes.frontend}>
           <h1>Frontend</h1> 
           <div className={classes.content}>
             <ul>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>Css</li>
              <li>Html</li>
             </ul>
           </div>
        </motion.div>
        <motion.div className={classes.backend}
            // initial={{
            //   x:300,
            // }}
            // whileInView={
            //   {
            //     x:0,
            //   }
            // }
            //  transition={{duration:1}}
        >
           <h1>Backend</h1> 
           <div className={classes.content}>
             <ul>
              <li>Java</li>
              <li>JavaScript</li>
              <li>Nodejs</li>
              <li>MongoDb</li>
              <li>Sql</li>
             </ul>
           </div>
          </motion.div>
           <motion.div className={classes.framework}
              //  initial={{
              //   x:-300,
              // }}
              // whileInView={
              //   {
              //     x:0,
              //   }
              // }
              //  transition={{duration:1}}
              >
           <h1>Frameworks</h1> 
           <div className={classes.content}>
             <ul>
              <li>React js</li>
              <li>Next js</li>
              <li>Express js</li>
              <li>Mongoose</li>
              <li>React Native</li>
             </ul>
           </div>
        </motion.div>
        <motion.div 
            // initial={{
            //   x:300,
            // }}
            // whileInView={
            //   {
            //     x:0,
            //   }
            // }
            //  transition={{duration:1}}
        className={classes.tool}>
           <h1>Tools</h1> 
           <div className={classes.content}>
             <ul>
              <li>GitHub</li>
              <li>Postman</li>
              <li>MongoDb Atlas</li>
              <li>Figma</li>
             </ul>
           </div>
        </motion.div>
    </motion.div>
    </div>
  )
}

export default Skill
