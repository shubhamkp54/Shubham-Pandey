import styles from './ProjectsStyles.module.css';
import snap from '../../assets/snap.png';
import stopwatch from '../../assets/stopwatch.png';
import temperature from '../../assets/temperature.png';
import wordCounter from '../../assets/word.png';
import Digital from '../../assets/digital.png';
import todo from '../../assets/todo.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={snap}
          link="https://snapstores.netlify.app"
          h3="SnapStore"
          // p="E-commerce"
        />
        <ProjectCard
          src={stopwatch}
          link="https://shubhamkp54.github.io/Stopwatch/"
          h3="Stopwatch"
        
        />
        <ProjectCard
          src={temperature}
          link="https://shubhamkp54.github.io/Temperature-Conversion/"
          h3="temperature"
        
        />
        <ProjectCard
          src={wordCounter}
          link="https://shubhamkp54.github.io/Words-and-Character-Counter/"
          h3="Word & Counter"
          
        />
        <ProjectCard
          src={Digital}
          link="https://shubhamkp54.github.io/Words-and-Character-Counter/"
          h3="Digital Clock"
          
        />
        <ProjectCard
          src={todo}
          link="https://github.com/shubhamkp54/Todo-List-Shubham-"
          h3="Todo List"
          
        />
      </div>
    </section>
  );
}

export default Projects;
