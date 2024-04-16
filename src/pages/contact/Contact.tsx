import classes from "./Contact.module.css";
import linkdln from "@/assets/social/linkdln2.webp";
import github from "@/assets/social/github.webp";
import instagram from "@/assets/social/instagram.png";
import email from "@/assets/social/email.png";
import phone from "@/assets/social/phone.png";
import { EmailDialog } from "@/components/shared/EmailDialog";
import { motion } from "framer-motion";
import { useContext, useEffect, useRef } from "react";
import { Context } from "@/utils/Context";

function Contact() {
  const {setActivePage}:any = useContext(Context);

  
  const ref:any= useRef();
 
  useEffect(()=>{
    const observer:any = new IntersectionObserver((entries)=>{
      const entry = entries[0];
      if(entry.isIntersecting){
        setActivePage("contact")
      }
      
  })
        observer.observe(ref.current)  //observe the element 
             },[])

  return (
    <div ref={ref} className={classes.main}>
      <div className={classes.container}>
        <div className={classes.details}>
          <h1>GET IN TOUCH</h1>
          <div className={classes.email}>
            <img className="h-5 w-5 invert" src={email} alt="email" />
            <p>ashishgc8077@gmail.com</p>
          </div>
          <div className={classes.number}>
            <img className="h-5 w-5 invert" src={phone} alt="phone" />
            <p>8077273132</p>
          </div>
        </div>
        <motion.div className={classes.btn}>
          <EmailDialog></EmailDialog>
        </motion.div>
        <div className={classes.logos}>
          <a href="https://linkedin.com/in/ashish-gc-797932235" target="_blank">
            <img
              className="h-8 w-8 invert hover:h-9 hover:w-9 "
              src={linkdln}
              alt="logo1"
            />
          </a>
          <a href="https://github.com/Ashish-GC" target="_blank">
            <img
              className="h-8 w-8 hover:h-9 hover:w-9 "
              src={github}
              alt="logo2"
            />
          </a>
          <a href="https://www.instagram.com/ashish_gc_/" target="_blank">
            <img
              className="h-7 w-7 hover:h-8 hover:w-8 "
              src={instagram}
              alt="logo3"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
