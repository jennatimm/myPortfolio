import { Header } from "./Header";
import { Image } from "./Image";
import { TextBox } from "./TextBox";

export function Block( {title, text, imgFirst, image, caption, alt, image2, caption2, alt2} ) {
    return (<div className="flex flex-col justify-center items-center md:flex-row gap-4 py-4">

        { imgFirst && <Image image={ image } caption={ caption } alt={ alt }/>}
        { (image2) ? <Image image={ image2 } caption={ caption2 } alt={ alt2 }/>
            : <div className="flex flex-col justify-center items-center">
                <Header text={ title}/>
                <TextBox text={ text }/> 
            </div>
        }
        { !imgFirst && <Image image={image} caption={ caption }/>}

    </div>);
};