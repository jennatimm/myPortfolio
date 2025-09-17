import { Banner } from "../../components/Banner";
import { Header } from "../../components/Header";
import { Block } from "../../components/Block"
import { TextBox } from "../../components/TextBox";
import exOne from '../../media/simulations/random.gif'
import exTwo from '../../media/simulations/stripes.gif'
import profile from '../../media/simulations/profileGameOfLife.png'

export const GameOfLife = () => {
    return (
    <div className="page pt-40 md:pt-20">
        <Banner text="GAME Of LIFE" image={profile}/>
        <Block image={ exOne } caption="Life Begins Randomly"
        alt="Simulation starts life randomly and shows the evolotion as the cells live, die, or multiply over time."
         image2={ exTwo } caption2="Life Begins with Patterns"
         alt2="Simulation starts with life as a pattern, demonstrating how varying starting conditions produce different long-term results."/>

        <a href="https://jennatimm.github.io/GameOfLife/">
            <Header text="Click Here for simulation"/> 
        </a>
        <TextBox text={[`To use the simulation, you can select one
        of the preset starting configurations located in the bottom
        right corner of the interface. These presets, such as “Random”
        or “Lines,” populate the grid with an initial layout of cells.
        Once a configuration is chosen, you can hit the “Start” button
        to observe how the cells evolve over time according to the rules
        of the Game of Life.`,
        `- Underpopulation: Any live cell with <2 live
        neighbors: dies, as if by underpopulation.`,
        `- Overpopulation: Any live cell with >3 live neighbors:
        dies, as if by overpopulation.`,
        `- Survival: Any live cell with 2 or 3 live neighbors: survives
        to the next generation`,
        `- Reproduction: Any dead cell with 3 live neighbors: becomes
        alive, as if by reproduction.`,`The simulation provides a visual
        representation of the fascinating dynamics that emerge from simple,
        deterministic rules.`]}/>
        
        <Header text="Overview"/>
        <TextBox text={[`For my Game of Life project, I implemented
            John Conway’s famous cellular automaton using JavaScript,
            working within a partially pre-written framework to create a
            web-based simulation. The project followed the classic rules of
            the Game of Life, where cells on a grid evolve through successive
            generations based on their neighbors. My contributions included
            implementing the update logic for the cells, designing interactive
            HTML controls (like buttons and sliders) for user customization,
            and creating preset configurations to demonstrate interesting
            starting patterns.`, `Although much of the foundational code was
            provided, I enjoyed personalizing the project by adjusting parameters,
            adding additional configurations, and ensuring smooth functionality.
            Completing the project in just a few days, I gained experience working
            with JavaScript in an interactive environment and developed a deeper
            understanding of how simple rules can lead to complex, dynamic behavior.`]}/>
    </div>);
};