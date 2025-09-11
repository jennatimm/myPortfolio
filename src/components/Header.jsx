export function Header({ text, size }) {
    return (
        <div className={`bg-(--background)  rounded-lg text-base md:text-xl p-6 m-4 tracking-widest
        border-solid text-glow border-solid border-1 font-bold shadow-[0_0_10px_2px_var(--toggle)]
        ${size == "25%" && 'w-25/100'} ${size == "30%" && 'w-3/10'} ${size == "35%" && 'w-35/100'}
        ${size == "40%" && 'w-4/10'} ${size == "45%" && 'w-45/100'} ${size == "50%" && 'w-5/10'}
        ${size == "55%" && 'w-55/100'} ${size == "60%" && 'w-6/10'} ${size == "65%" && 'w-65/100'}
        ${size == "70%" && 'w-7/10'} ${size == "75%" && 'w-75/100'} ${size == "80%" && 'w-8/10'}
        ${size == "85%" && 'w-85/100'} ${size == "90%" && 'w-9/10'} ${size == "95%" && 'w-95/100'}`}>
            { text }
        </div>
    );
};