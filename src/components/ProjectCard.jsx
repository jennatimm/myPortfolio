import { TextBox } from "../components/TextBox";
export function ProjectCard ({ allProjects, id, shortRoute}) {
    const inRange = (Number(id) + allProjects.length) % allProjects.length;
    const route = (shortRoute) ? allProjects[inRange].shortRoute : allProjects[inRange].route;
    return (
        <a className="max-w-lg p-1 bg-(--foreground) hover:scale-110 rounded-lg " href={ route }>
            <img className="rounded-lg" src={ allProjects[inRange].image } alt={ allProjects[inRange].description }/>
            <TextBox text={ allProjects[inRange].title }/>
        </a>
    );
};