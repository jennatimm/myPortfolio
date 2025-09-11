export function Banner({ text, image}) {
    return (
        <div style={{ backgroundImage: `url(${image})`}}
        className="w-screen absolute top-0 text-base md:text-xl w-full text-glow font-bold">
            <div className="bg-background/50 p-30">
              { text }  
            </div>
            
        </div>
    );
};