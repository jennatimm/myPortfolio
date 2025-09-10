import {ProjectCard} from "../components/ProjectCard"
import crapProject from '../media/craps/profile.png'
import rateProject from '../media/ratemybooks/profile.png'
import trivaProject from '../media/trivamaze/profile.png'
import racingProject from '../media/0xF0/profile.png'
import payrollersProject from '../media/payrollers/profile.png'

export const Projects = () => {
  return (
    <div className="page">
      <h1 className="heading text-glow">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 
      md:grid-cols-3 justify-items-center gap-4 m-2">      
        <ProjectCard image={rateProject} title="RateMyBooks"/>
        <ProjectCard image={payrollersProject} title="Payrollers"/>
        <ProjectCard image={racingProject} title="0xF0"/>
        <ProjectCard image={trivaProject} title="Triva Maze"/>
        <ProjectCard image={crapProject} title="Craps Game"/>
      </div>
    </div>
  )
};