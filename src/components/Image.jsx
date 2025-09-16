import { TextBox } from "./TextBox";

export function Image( {image, caption, top} ) {
    return ( <div className="flex flex-col md:w-1/2"> 
        { top && caption && <p className="text-glow bg-(--primary) 
        border-x-2 border-t-2 border-(--secondary)">{ caption }</p>}
        <img className="rounded-lg object-contain 
        border-2 border-(--secondary)" src={ image } />
        {!top && caption && <p className="text-glow bg-(--primary) 
        border-x-2 border-b-2 border-(--secondary)">{ caption }</p>}
    </div>
    )
}