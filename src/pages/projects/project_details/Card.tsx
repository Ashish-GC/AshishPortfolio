

import { github } from "@/components/shared/skills";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "../../../components/ui/3d-card";
import classes from './Card.module.css'

  type cardTypes={
  name:String,
  description:String,
  link:string,
  github:string,
  image:string
}

function Card({name,description,link,github,image}:cardTypes) {
  return (
    <CardContainer className="inter-var">
      <CardBody className={`bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ${classes.cardBody}`}>
        <CardItem
          translateZ="50"
          className={`text-xl font-bold text-neutral-600 dark:text-white  ${classes.name}`}
        >
         {name}
        </CardItem> 
        <CardItem
          as="p"
          translateZ="60"
          className={`text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 ${classes.desc}` }
        >
         {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-3">
          <img
            src={image}
            height="1000"
            width="1000"
            className={`h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl ${classes.image}`}
            alt="thumbnail"
          />
        </CardItem>
        <div className={`flex justify-between items-center mt-10 ${classes.container}`}>
        {link &&   <CardItem
            translateZ={20}
            as="a"
            href={link}
            target="__blank"
            className={`px-4 py-2 rounded-xl text-xs font-normal text-black ${classes.link}`}
          >
            See project →
          </CardItem>}
          <CardItem
            translateZ={20}
            as="a"
            href={github}
            target="__blank"
            className={`px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold ${classes.github}`}
          >
            Github
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>

    // <div className={classes.container}>
    //   <img src={proj} alt="project" className={classes.image}/>
    //   <h1 className={classes.heading}>project name </h1>
    //   <a href="" target="_blank" className={classes.link}>see project logo</a>
    // </div>
  );
}

export default Card;
