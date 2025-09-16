import { Banner } from "../../components/Banner";
import { Header } from "../../components/Header";
import { Block } from "../../components/Block"
import { TextBox } from "../../components/TextBox";
import exOne from "../../media/simulations/animalTakeover.gif";
import exTwo from "../../media/simulations/plantTakeover.gif"
import profile from "../../media/simulations/profileEvolvingColors.png"
export const EvolvingColor = () => {
    return <div>
        <Banner text="EVOLVING COLORS" image={profile}/>
        <div>
            <div className="flex flex-row md:flex-col">
                <img></img>
            </div>
        </div>
    </div>
}; 