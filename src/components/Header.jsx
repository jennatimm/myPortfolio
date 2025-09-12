export function Header({ text}) {
    return (
        <div className={`bg-(--primary) rounded-lg text-xl md:text-3xl p-6 m-4 tracking-widest
        border-solid border-2 border-(--foreground) text-glow w-auto heading-glow font-bold`}>
            { text }
        </div>
    );
};