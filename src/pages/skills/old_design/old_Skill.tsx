import classes from "./Skill.module.css";
import {
  css,
  html,
  reactjs,
  reactnative,
  nodejs,
  nextjs,
  java,
  javascript,
  git,
  github,
  mongodb,
  sql,
  mysql,
  expressjs,
} from "../../components/shared/skills";
import skillwheel from "@/assets/gif/skillwheel.gif";

function Skill() {
  return (
    <div className={classes.main}>
      <div className={classes.heading}>
        <h1>Skills</h1>
      </div>

      <div className={classes.container}>
        
        {/* row 1 */}
        <div>
          <img src={css} alt="css" />
        </div>
        <div>
          <img src={html} alt="html" />
        </div>
        <div>
          
        </div>
        <div>
          
        </div>
        <div></div><div></div><div><img src={javascript} alt="javascript" /></div><div><img src={java} alt="java" /></div>
        
         {/* row 2 */}
        <div></div><div>  <img src={reactjs} alt="reactjs" /></div><div> <img src={nextjs} alt="nextjs" /></div>
        <div>
        
        </div>
        <div>
         
        </div>
        <div>
          <img src={reactnative} alt="reactnative" />
        </div>
        <div>
          <img src={nodejs} alt="nodejs" />
        </div>
        <div></div>
        
 {/* row 3 */}
        <div></div><div></div><div> <img src={expressjs} alt="expressjs" /></div>
        <div className={classes.space}>
        <img  src={skillwheel} alt="wheel"  style={{width:"10rem", height:"10rem" , animation:"none"}}/>
        </div>
        <div> <img src={mysql} alt="mysql" /></div><div></div>
        <div>
        </div>

 {/* row 4 */}
        <div>
        <img src={sql} alt="sql" />
        </div>
        <div>
          <img src={mongodb} alt="mongodb" />
        </div>
        <div>
        
        </div>
        <div>
         
        </div>
        <div>
          <img src={git} alt="git" />
        </div>
        {/* change with github */}
        <div>   <img src={git} alt="git" /> </div>


      </div>
    </div>
  );
}

export default Skill;
