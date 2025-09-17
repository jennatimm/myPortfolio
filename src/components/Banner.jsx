export function Banner({ text, image}) {
    return (
        <div style={{ backgroundImage: `url(${image})`}}
        className="w-screen absolute top-0 z-[-10] text-3xl md:text-4xl font-bold border-b-2 border-(--secondary)">
            <div className="p-30 bg-background/60 heading-glow">
              { text }  
            </div>
        </div>
    );
};