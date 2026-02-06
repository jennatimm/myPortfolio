export function Image( {image, caption, top, alt} ) {
    return ( <div className="flex flex-col md:w-1/2 border-4 rounded-lg object-contain bg-(--primary)"> 
        { top && caption && <p className="text-glow  text-xl p-2 rounded-lg">{ caption }</p>}
        <img className="rounded-lg" src={ image } alt={ alt }/>
        {!top && caption && <p className="text-glow text-xl p-2 rounded-lg">{ caption }</p>}
    </div>
    )
}