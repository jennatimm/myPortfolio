import { TextBox } from "../components/TextBox";
export function ProjectCard ({ image, title, route }) {
    return (
        <a className="max-w-lg p-1 bg-(--secondary) hover:scale-110 rounded-lg" href={route}>
            <img className="rounded-lg" src={ image } />
            <TextBox text={ title }/>
        </a>
    );
};