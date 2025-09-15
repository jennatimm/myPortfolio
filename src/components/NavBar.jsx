import { NavLink } from "react-router-dom";
import { ThemeToggle } from "../components/ThemeToggle";
import { useLocation } from "react-router-dom";

export const NavBar = () => {
    const location = useLocation();
    const isProjectPage = location.pathname.startsWith("/Projects/");
    return (
        <nav   className={`navbar text-glow text-sm md:text-xl
        text-(--foreground) z-10 ${isProjectPage ? "bg-transparent" : "bg-primary"}`}>
            <div className={`flex my-0 md:my-1 ${isProjectPage ? "justify-end" : "justify-center" }`}>
            <NavLink to="/" end> About </NavLink>
            <NavLink to="/Projects" end> Projects </NavLink>
            <NavLink to="/Simulations" end> Simulations </NavLink>
            <ThemeToggle/>
            </div>
            
        </nav>);
}