export function TextBox({ text, text2, text3}) {
    return (
        <div className="bg-(--background) p-6 mt-1 max-w-3xl font-semibold rounded-lg
        border-2 text-basic md:text-lg">
            <p>{ text }</p>
            {text2 && <p className="pt-3">{ text2 }</p>}
            {text3 && <p className="pt-3">{ text3 }</p>}
        </div>
    );
};