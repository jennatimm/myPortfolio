export function TextBox({ text}) {
    return (
        <div className="bg-(--primary) p-6 mt-1 max-w-3xl font-semibold rounded-lg
        border-2 text-basic md:text-lg">
            {Array.isArray(text) ? text.map((t, index) =>
                (<p key={index}>{t}</p>)) : <p>{ text }</p>}
        </div>
    );
};