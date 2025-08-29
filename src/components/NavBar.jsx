import { NavLink } from "react-router-dom";
import { ThemeToggle } from "../components/ThemeToggle";

export const NavBar = () => {
    return (
        <nav className="navbar my-4 md:my-6 caret-transparent text-sm md:text-xl text-(--toggle) bg-(--background)">
            <NavLink to="/" end> About </NavLink>
            <NavLink to="/Projects" end> Projects </NavLink>
            <NavLink to="/Simulations" end> Simulations </NavLink>
            <ThemeToggle />
        </nav>);
}