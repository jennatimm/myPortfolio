import {ProjectCard} from "./ProjectCard"
import { Header } from "./Header"
export function NextProject({ allProjects, id, singleDisplay}) {
    return(<div className="border-6 px-5 pb-1 rounded-lg flex flex-col mt-10">
      <Header text="View Another Project?"/>
      <div className="grid grid-cols-2 gap-8 mb-2 justify-items-center items-start">
        {!singleDisplay && <ProjectCard allProjects={ allProjects } id={ Number(id) + 1 } shortRoute="true"/>}  
        <ProjectCard allProjects={ allProjects } id={ id - 1 }shortRoute="true"/>   
      </div>      
    </div>
);
}