
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog"

import { EmailForm } from "./EmailForm"
import classes from "./EmailDialog.module.css" 

export function EmailDialog() {
 let close =''

  return (
   
    <Dialog>
      <DialogTrigger >
        <Button variant="ghost" className={classes.email}>Contact Me</Button>
      </DialogTrigger>
      <DialogContent className={`h-[24rem] w-[35rem] flex flex-row   bg-white text-black  border-2 border-green-900 ${classes.content} `}>
          <div className={`flex-[40%] bg-gray-300 ${classes.sidebar}`}>
            <p className="text-center  text-xl mt-10 ">Get in Touch</p>
           <div className="mt-4 flex gap-2 flex-col text-center">
           <p className="text-sm">phone : 8077273132</p>
            {/* <p className="text-sm">email: ashishgc8077@gmail.com</p> */}
           </div>
          </div>
          <div className=" flex-[60%]">
          <EmailForm></EmailForm> 
          </div>
           
      </DialogContent>
    </Dialog>

  )
}