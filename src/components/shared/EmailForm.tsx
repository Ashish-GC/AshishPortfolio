import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import classes from "./EmailForm.module.css";
import { Button } from "../ui/button";

//errors in validation  check it

export const EmailForm = () => {

const [status,setStatus] = useState('');
  const form: any = useRef();
  

  const sendEmail = (e: any) => {
    e.preventDefault();
      emailjs
        .sendForm("service_64qn6j7", "template_d8nzudf", form.current, {
          publicKey: "nsGj0-_RuPx7UhfE_",
        })
        .then(
          (response) => {
          //  console.log(response.text);
          setStatus("success");
          })
          .catch((error) => {
            setStatus("failed");
             console.log("FAILED...", error.text);
           })
    }
  
    const showFormHandler=()=>{
      setStatus("");
    }

  return (
    <>{status ==="" &&
        <div className={classes.container}>
          <form ref={form} onSubmit={sendEmail} className={classes.form}>
            <div>
              <label>Name</label>
              <input  type="text" name="from_name" required />
            
            </div>
            <div>
              <label>Email</label>
              <input  type="email" name="from_email" required />
              
            </div>
            <div>
              <label>Message</label>
              <textarea  name="message" required/>
              
            </div>

            <Button variant="ghost" className={classes.send} type="submit">
              send 
            </Button>
          </form>
        </div>
      }
      {status === "success" && (
        <div>
          <h1 className="text-center text-base mt-20">your message has been sent successfully</h1>
        </div>
      )}
      {status === "failed" && (
        <div className="flex flex-col">
          <h1 className="text-center text-base mt-20 mb-5">error to send message .please try again</h1>
           <Button variant="ghost" className={`w-2/6 m-auto  ${classes.send} `} onClick={showFormHandler} >
              try again
            </Button>
        </div>
      )}
    </>
  );
};
