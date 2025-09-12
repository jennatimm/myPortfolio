import { Header } from "./Header";
import { TextBox } from "./TextBox";

export function ImgTextCard( {title, text, text2, text3, image, imgFirst} ) {
    return (<div className="flex flex-col justify-center items-center md:flex-row gap-4 p-4">

        { imgFirst && <img className="rounded-lg object-contain md:w-1/2 border-2 border-(--secondary)" src={ image } /> }

        <div className={`flex flex-col justify-center items-center`}>
            <Header text={ title}/>
            <TextBox text={ text } text2={ text2 } text3={ text3 }/> 
        </div>

        { !imgFirst && <img className="rounded-lg object-contain md:w-1/2 border-2 border-(--secondary)" src={ image } />}

    </div>);
};