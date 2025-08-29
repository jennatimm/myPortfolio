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

return <button onClick={toggle} className="mt-2 mx-0 md: mx-1">
    {isDarkMode ? <Sun className="h-6 w-6"
    style={{ color: "(--toggle)" }}/> 
    :
    <Moon className="h-6 w-6"
    style={{ color: "(--toggle)" }}/>}</button>
}