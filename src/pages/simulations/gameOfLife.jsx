import { Banner } from "../../components/Banner";
import { Header } from "../../components/Header";
import { Block } from "../../components/Block"
import { TextBox } from "../../components/TextBox";
import exOne from '../../media/simulations/random.gif'
import exTwo from '../../media/simulations/stripes.gif'
import profile from '../../media/simulations/profileGameOfLife.png'

export const GameOfLife = () => {
    return (
    <div className="page">
        <Banner text="GAME Of LIFE" image={profile}/>
    </div>);
};