import { Link } from "react-scroll";
import classes from "./navBar.module.css";
import { useContext } from "react";
import { Context } from "@/utils/Context";

function navBar() {
  const {activePage}= useContext<any>(Context);

  return (
    <div className={classes.main}>
      <nav className={`lg:w-5/6 m-auto md:w-6/6 sm:w-6/6`}>
        <ul className={`flex flex-row justify-center items-center gap-3 px-40 ${classes.menu}`}>
          <li >
            <Link
              className={activePage === "about" ? classes.active : ""}
              
              spy
              to="about"
            ><p className="text-base sm:text-[10px] lg:text-[17px]">
               About
            </p>
            </Link>
            <div className={classes.underline}></div>
          </li>
          <li>
            <Link
              className={activePage === "skill" ? classes.active : ""}
            
              spy
              to="skill"
            ><p className="text-base sm:text-[10px] lg:text-[17px]">
               Skills
            </p>
            
            </Link>
            <div className={classes.underline}></div>
          </li>
          <li>
            <Link
              className={activePage === "project" ? classes.active : ""}
              
              spy
              to="project"
            ><p className="text-base sm:text-[10px] lg:text-[17px]">
                Projects
            </p>
            
            </Link>
            <div className={classes.underline}></div>
          </li>
          <li>
            <Link
              className={activePage === "education" ? classes.active : ""}
             
              spy
              to="education"
            ><p className="text-base sm:text-[10px] lg:text-[17px]">
              Education
            </p>
            </Link>
            <div className={classes.underline}></div>
          </li>
          <li>
            <Link
              className={activePage === "contact" ? classes.active : ""}
            
              spy
              to="contact"
            ><p className="text-[13px] sm:text-[10px] lg:text-[17px]">
                  Contact
            </p>
            </Link>
            <div className={classes.underline}></div>
          </li>
          {/* <li>
            <a href="" target="_blank">
              <p className="text-sm">linkdln</p>
            </a>
            <div className={classes.underline}></div>
          </li>
          <li>
          <a href="" target="_blank">
              <p className="text-sm">github</p>
            </a>
            <div className={classes.underline}></div>
          </li>
          <li>
          <a href="" target="_blank">
              <p className="text-sm">leetcode</p>
            </a>
            <div className={classes.underline}></div>
          </li> */}
        </ul>
      </nav>
    </div>
  );
}

export default navBar;
