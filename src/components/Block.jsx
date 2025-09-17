import { Header } from "./Header";
import { Image } from "./Image";
import { TextBox } from "./TextBox";

export function Block( {title, text, imgFirst, image, caption, image2, caption2} ) {
    return (<div className="flex flex-col justify-center items-center md:flex-row gap-4 p-4">

        { imgFirst && <Image image={ image } caption={ caption }/>}
        { (image2) ? <Image image={ image2 } caption={ caption2 }/>
            : <div className="flex flex-col justify-center items-center">
                <Header text={ title}/>
                <TextBox text={ text }/> 
            </div>
        }
        { !imgFirst && <Image image={image} caption={ caption }/>}

    </div>);
};