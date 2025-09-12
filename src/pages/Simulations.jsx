import {ProjectCard} from "../components/ProjectCard";
import { Header } from "../components/Header";
import gameOfLife from "../media/simulations/profileGameOfLife.png";
import evolvingColors from "../media/simulations/profileEvolvingColors.png";
export const Simulations = () => {
    return (
        <div className="page">
            <Header text="Simulations" size="50%"/>   
            <div className="grid grid-cols-1 sm:grid-cols-2 
            md:grid-cols-3 justify-items-center gap-6 m-2">      
                <ProjectCard image={gameOfLife} title="Game of Life" route="Simulations/GameOfLife"/>
                <ProjectCard image={evolvingColors} title="Evolving Colors" route="Simulations/EvolvingColors"/>
              </div>
        </div>
        
    ); 
};