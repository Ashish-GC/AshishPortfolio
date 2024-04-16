
import classes from "./Certificate.module.css"

function Certificate({courseTitle,courseName , courseLink}:{courseTitle:String,courseName:String , courseLink:string}) {
  return (
    <div className={classes.certificate}>
      <h1 className={classes.logo}>{courseTitle}</h1>
      <div className={classes.content}>
        <h1>{courseName}</h1>
         <a href={courseLink} target="_blank">Link</a>
      </div>
    </div>
  );
}

export default Certificate;
