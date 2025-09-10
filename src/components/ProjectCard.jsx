import { TextBox } from "../components/TextBox";
export function ProjectCard ({image, title}) {
    return (
        <div className="max-w-lg p-1 bg-(--secondary)">
            <img className="mb-1" src={image} />
            <TextBox text={title}/>
        </div>
    );
};