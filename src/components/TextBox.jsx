export function TextBox({ text}) {
    return (
        <div className="bg-(--background) p-6 max-w-3xl font-semibold whitespace-pre-line">
            {text}
        </div>
    );
};