import {ProjectCard} from "../components/ProjectCard"
import { Header } from "../components/Header"
import crapProject from '../media/craps/profile.png'
import rateProject from '../media/ratemybooks/profile.png'
import triviaProject from '../media/triviamaze/profile.png'
import racingProject from '../media/racing/profile.png'
import payrollersProject from '../media/payrollers/profile.png'

export const Projects = () => {
  return (
    <div className="page">
      <Header text="Projects"/>
      <div className="grid grid-cols-1 sm:grid-cols-2 
      md:grid-cols-3 justify-items-center gap-6 m-2">      
        <ProjectCard image={rateProject} title="RateMyBooks" route="Projects/BooksProject" 
        alt="Explore Page that displays different books"/>
        <ProjectCard image={payrollersProject} title="Payrollers" route="Projects/Payrollers"
        alt="Welcome page of the Payrollers website"/>
        <ProjectCard image={racingProject} title="0xF0" route="Projects/RacingProject"
        alt="Blue sports car about to start a race"/>
        <ProjectCard image={triviaProject} title="Trivia Maze" route="Projects/TriviaProject"
        alt="Dark empty brick room with three doors labeled A, B, and C"/>
        <ProjectCard image={crapProject} title="Craps Game" route="Projects/CrapsProject"
        alt="Snippet of the Craps game displaying current bet and bank value"/>
      </div>
    </div>
  )
};