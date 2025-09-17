import { TextBox } from "../components/TextBox";
export function ProjectCard ({ image, title, route, alt }) {
    return (
        <a className="max-w-lg p-1 bg-(--foreground) hover:scale-110 rounded-lg" href={route}>
            <img className="rounded-lg" src={ image } alt={ alt }/>
            <TextBox text={ title }/>
        </a>
    );
};