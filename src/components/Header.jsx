export function Header({ text }) {
    return (
        <div className="bg-(--background) rounded-lg text-base md:text-xl w-7/10 p-6 m-4 tracking-widest
        border-solid text-glow border-solid border-1 font-bold shadow-[0_0_10px_2px_var(--toggle)]">
            { text }
        </div>
    );
};