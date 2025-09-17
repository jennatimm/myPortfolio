import { Banner } from "../../components/Banner";
import { Header } from "../../components/Header";
import { Block } from "../../components/Block"
import { TextBox } from "../../components/TextBox";
import exOne from "../../media/simulations/animalTakeover.gif";
import exTwo from "../../media/simulations/plantTakeover.gif"
import profile from "../../media/simulations/profileEvolvingColors.png"
export const EvolvingColor = () => {
    return <div className="page pt-40 md:pt-20">
        <Banner text="EVOLVING COLORS" image={profile}/>
        <Block image={ exOne } caption="Animats Join the World"
        image2={ exTwo } caption2="Plants Take Over"/>

        <a href="https://jennatimm.github.io/EvolvingColors/">
            <Header text="Click Here for simulation"/> 
        </a>
        
        <TextBox text="To use the simulation, start by adding several
        plants and observing as they spread across the grid. Once plants
        have sufficiently populated the environment, introduce animats
        into the simulation and watch as they interact with the plants,
        evolving and reproducing based on the energy they collect. This
        creates a fascinating interplay of color and movement, demonstrating
        the principles of evolution and adaptation in a digital ecosystem."/>

        <Header text="Overview"/>
        <TextBox text="For the Evolving Colors project, I helped developed a
        simulation of an ecosystem using evolutionary algorithms. The environment
        was set on an NxN toroidal grid where plants and animats (simulated animals)
        coexisted. Plants grew over time, with each new plant having a slight mutation
        in color. Animats moved toward plants with the closest color to their own,
        consuming them for energy. If their energy exceeded a threshold, they reproduced,
        introducing new mutations. The project involved creating classes for plants,
        animats, and the overall automata system, using JavaScript and HTML Canvas to
        display the simulation. I also incorporated interactive controls for users to
        adjust parameters and observe the evolution of the ecosystem. This project
        allowed me to apply and deepen my understanding of evolutionary algorithms
        in an engaging, interactive environment."/>
        </div>

}; 