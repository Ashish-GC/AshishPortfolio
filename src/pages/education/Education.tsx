import { motion } from "framer-motion";
import classes from "./Education.module.css";
import Certificate from "./certificate/Certificate";
import { useContext, useEffect, useRef } from "react";
import { Context } from "@/utils/Context";

function Education() {

const {setActivePage}:any = useContext(Context);


const ref:any= useRef();
 
useEffect(()=>{
  const observer:any = new IntersectionObserver((entries)=>{
    const entry = entries[0];
    if(entry.isIntersecting){
      setActivePage("education")
    }
    
})    
      observer.observe(ref.current)  //observe the element
      
           },[])

  return (
    <div ref={ref}  className={classes.main}>
      <div  className={classes.container}>
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className={classes.education}
        >
           <h1  >Education</h1>
            <div className={classes.dit}>
              <h2>Dit University</h2>
              <p>Bachelor of Science in Computer Science</p>
              <p>August 2020 - present</p>
              <ul>
                <li>specialization in Full Stack and DevOps</li>
                <li>CGPA - 7.98</li>
              </ul>
          </div>
        </motion.div>

        <motion.div 
          initial={{ x: 300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className={classes.certificate}
        > 
          <h1 className={classes.c_heading}>Certificate</h1>
          <div  className={classes.certificateContent}>
            <Certificate courseTitle="Udemy"  courseName="React – The Complete Guide" courseLink="https://www.udemy.com/certificate/UC-d41bf8b8-e5df-44b0-b2c2-09588fd65d28/"></Certificate>
            <Certificate courseTitle="Coursera" courseName="Programming Foundations with JavaScript ,HTML and CSS." courseLink="https://www.coursera.org/account/accomplishments/certificate/QSRYTZQ7ASY8"></Certificate>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Education;
