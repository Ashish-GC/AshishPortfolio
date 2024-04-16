
import NavBar from '@/components/shared/navBar'
import { Element } from 'react-scroll'
import About from './about/About'
import Education from './education/Education'
import Skill from './skills/skill'
import Project from './projects/Project'
import Contact from './contact/Contact'
import ScrollButton from '@/components/shared/ScrollButton'
import classes from "./layout.module.css";

function Layout() {

  return (
    <div className={classes.main}>   
       <section className='sticky top-0 z-50'>
       <NavBar></NavBar>
       </section>
       <section>
      
      <Element name="about">
          <About></About> 
      </Element>
      <Element name="skill">
                <Skill></Skill>
      </Element>
      <Element name="project">
                <Project></Project>
      </Element>
      <Element name="education">
                <Education></Education>
      </Element>
      <Element name="contact">
                <Contact></Contact>
      </Element>
      </section>
      <section>
        <ScrollButton ></ScrollButton>
      </section>
    </div>
  )
}

export default Layout
