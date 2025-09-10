export function TextBox({ text}) {
    return (
        <div className="bg-(--background) p-6 max-w-3xl font-semibold 
        md:whitespace-pre-line border-3 ">
            {text}
        </div>
    );
};