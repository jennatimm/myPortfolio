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
return <button onClick={toggle}>
    {isDarkMode ? <Sun className="h-6 w-6"
    style={{ color: "hsl(var(--toggle))" }}/> 
:
     <Moon className="h-6 w-6 text-blue-900"
     style={{ color: "hsl(var(--toggle))" }}/>}</button>
}