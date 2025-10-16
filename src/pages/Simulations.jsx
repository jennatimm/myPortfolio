import {ProjectCard} from "../components/ProjectCard";
import { Header } from "../components/Header";
import allSimulations from '../data/simulations';
export const Simulations = () => {
    return (
        <div className="page">
            <Header text="Simulations"/>   
            <div className="grid grid-cols-1 sm:grid-cols-2 
            md:grid-cols-3 justify-items-center gap-6 m-2">      
                { allSimulations.slice().reverse().map( 
                    (project) => <ProjectCard allProjects={ allSimulations } id={ project.id }/>)
                }
            </div>
        </div>
        
    ); 
};