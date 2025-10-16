import {ProjectCard} from "../components/ProjectCard";
import { Header } from "../components/Header";
import allProjects from '../data/projects';

export const Projects = () => {
  return (
    <div className="page">
      <Header text="Projects"/>
      <div className="grid grid-cols-1 sm:grid-cols-2 
      md:grid-cols-3 justify-items-center gap-6 m-2">      
        { allProjects.slice().reverse().map( 
          (project) => <ProjectCard allProjects = { allProjects } id={ project.id }/>)
        }
      </div>
    </div>
  )
};