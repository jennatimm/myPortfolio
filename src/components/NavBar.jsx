import { NavLink } from "react-router-dom";
import { ThemeToggle } from "../components/ThemeToggle";

export const NavBar = () => {
    return (
        <nav style={{ color: "hsl(var(--toggle))" }}>
            <ThemeToggle />
            <NavLink to="/" end> About </NavLink>
            <NavLink to="/Projects" end> Projects </NavLink>
            <NavLink to="/Simulations" end> Simulations </NavLink>
        </nav>);
}