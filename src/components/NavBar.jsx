import { NavLink } from "react-router-dom";
import { ThemeToggle } from "../components/ThemeToggle";

export const NavBar = () => {
    return (
        <nav className="navbar text-glow caret-transparent text-sm md:text-xl text-(--toggle) bg-(--background)">
            <div className="flex justify-center my-0 md:my-1">
            <NavLink to="/" end> About </NavLink>
            <NavLink to="/Projects" end> Projects </NavLink>
            <NavLink to="/Simulations" end> Simulations </NavLink>
            <ThemeToggle/>
            </div>
            
        </nav>);
}