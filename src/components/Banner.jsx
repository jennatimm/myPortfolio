export function Banner({ text, image}) {
    return (
        <div style={{ backgroundImage: `url(${image})`}}
        className="w-screen absolute top-0 text-base md:text-4xl w-full heading-glow font-bold border-b-2 border-(--secondary)">
            <div className="p-30">
              { text }  
            </div>
            
        </div>
    );
};