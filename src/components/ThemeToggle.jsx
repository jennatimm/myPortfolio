import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
    const currentTheme = localStorage.getItem("theme");
    const [isDarkMode, setIsDarkMode] = useState(currentTheme == "dark");

    useEffect (() => {
        document.documentElement.classList.toggle("dark", isDarkMode);
        const theme = (isDarkMode) ? "dark": "light";
        localStorage.setItem("theme", theme);
    }, [isDarkMode])

    const toggle = () => {
        setIsDarkMode(!isDarkMode);
    }

return <button onClick={toggle} aria-label="theme toggle button" type="button" 
className="p-2 rounded-4xl hover:bg-(--tertiary) transition-colors duration-[600ms]">
    {isDarkMode ? <Sun className="h-6 w-6 text-(--foreground) drop-shadow-[0_0_6px_var(--primary)]"/> 
    : <Moon className="h-6 w-6 text-(--foreground) drop-shadow-[0_0_6px_var(--primary)]"/>}</button>
}