import classes from "./About.module.css";
import { EmailDialog } from "@/components/shared/EmailDialog";
import { motion } from "framer-motion";
import resume  from "../../assets/resume/resume.pdf";
import { FaDownload } from "react-icons/fa6";
import { useContext, useEffect, useRef} from "react";
import { Context } from "@/utils/Context";


const description =
  " I am a passionate B.Tech student proficient in frontend (React.js,Next.js) and backend (Express.js, MongoDB) development. Dedicated to crafting innovative web applications, I eagerly seek to collaborate with teams in building next-gen solutions for intuitive user experiences.";
const heading = "A full stack developer";
const val ="Hello, I'm Ashish GC";

function About() {

  const {setActivePage}:any = useContext(Context);

  const ref:any= useRef();
 
  useEffect(()=>{
    const observer:any = new IntersectionObserver((entries)=>{
      const entry = entries[0];
      if(entry.isIntersecting){
        setActivePage("about")
      }
      
  })
        observer.observe(ref.current)  //observe the element 
             },[])



  const introduction = description.split("");
  const role = heading.split("");
  const name = val.split("");

  const charVariant = {
    hidden: { opacity: 0, scale: 0.7 },
    reveal: { opacity: 1, scale: 1 },
  };

  const downloadResume=()=>{
    fetch(resume).then((response) => {
      response.blob().then((blob) => {
       
          // Creating new object of PDF file
          const fileURL =
              window.URL.createObjectURL(blob);
               
          // Setting various property values
          let alink = document.createElement("a");
          alink.href = fileURL;
          alink.download = "ashishResume.pdf";
          alink.click();
      });
  });
  }

  return (
     
    <div ref={ref} className={classes.main}>
      <div>      
      </div>
      <div  className={classes.content}>
        <div  className={classes.section1}>
          <motion.h1
           initial="hidden"
           whileInView="reveal"
           transition={{staggerChildren: 0.025 }}
           className={classes.text1}>
          {name.map((char, index) => (
              <motion.span
                key={index}
                transition={{ duration:0.5 }}
                variants={charVariant}
              >
                {char}
              </motion.span>
            ))}
            </motion.h1>

          <motion.div
            initial="hidden"
            whileInView="reveal"
            transition={{ staggerChildren: 0.025 }}
            className={classes.typewriter}
          >
            {role.map((char, index) => (
              <motion.span
                key={index}
                transition={{ duration:0.5 }}
                variants={charVariant}
                className={classes.text2}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        </div>

        <motion.div
          // initial="hidden"
          // whileInView="reveal"
          // transition={{ staggerChildren: 0.025 }}

          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 1 }} 

          className={classes.desc}
        >
          {/* {introduction.map((char, index) => (
            <motion.span
              key={index}
            //  transition={{duration:0.5}}
              variants={charVariant}
            >
              {char}
            </motion.span>
          ))} */}
          <span>
          {introduction}
          </span>
        </motion.div>

        <div className={classes.button}>
          <EmailDialog></EmailDialog>
          <button className={`flex items-center gap-1 ${classes.cv}`} onClick={downloadResume}><FaDownload /> Resume</button>
        </div>
      </div>
      <div className={classes.icon}>
        {/* <img className={classes.gif} src={animated_gif} alt="animated_gif" /> */}
      </div>
    </div>
  );
}

export default About;
