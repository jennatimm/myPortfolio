import { Banner } from "../../components/Banner";
import { Block } from "../../components/Block"
import { Header } from "../../components/Header";
import { TextBox } from "../../components/TextBox";
import { NextProject } from "../../components/NextProject";
import exOne from '../../media/craps/colorchange.gif';
import exTwo from '../../media/craps/gameplayonly.gif';
import profile from '../../media/craps/profile.png';
import allProjects from '../../data/projects';
export const CrapsGame = () => {
    return (<div>

        <Banner text="CRAPS GAME" image={profile}/>
        <div className="page pt-40 md:pt-20">
            
            <Block title="Overview" 
            text={[`We were given complete creative freedom with the project, aside from
            the core gameplay requirements. Our instructor encouraged us to keep things
            simple, as this was our first GUI project, and we had about three weeks to
            complete it.`,
            `This was my first independent project in school where I wasn’t given
            any starter code, only a structural guideline to follow. The assignment
            introduced the Model-View-Controller (MVC) architecture pattern, which I was
            expected to implement fully on my own. The task was to build a functional
            version of the casino game Craps using Java Swing. It was also my first exposure
            to creating a graphical user interface (GUI), and I was genuinely excited to dive in.`]}
            image={exOne} imgFirst={true}
            alt="Main menu displayed in various, options in navigation displayed (i.g. how to play, keyboard shortcuts, game reset)"/>

            <Header text="Creative Direction & Structure:"/>
            <TextBox 
            text={[`With no starter code provided, I embraced the opportunity to explore my own
            creative direction. While others might have been driven by the predefined extra credit
            opportunities, I chose to focus on design features that interested me personally and
            challenged my understanding of the application structure. Which I found pushed me to
            think more deeply about how to organize and structure the program. I implemented the full
            MVC pattern myself, creating separate classes for the model, view, controller, utility
            functions, and testing. In total, the project included six classes: one for each component
            plus two utility helpers.`,
            `One of the more difficult aspects was fully separating the view and controller, as
            most of our previous assignments had combined the two. Later, our instructor explained that
            in smaller projects, the controller often just initializes the GUI, validating the simpler
            structure I had adopted.`]}/>

            <Block title="Discovering a Passion for Frontend Development:" 
            text="Before this assignment, frontend development wasn’t something I gravitated toward since
            I saw it as mostly visual. It was not something I thought would be challenging or rewarding.
            But once I started this project, I realized how much thought goes into designing something
            intuitive and user-friendly. It was a challenge to guess all the different ways someone might
            experience or interact with my game. It pushed me to think critically about design decisions
            and build a more robust, thoughtful application. When my next project involved a GUI, I
            immediately volunteered. I even took the initiative to self teach myself JavaFX so I could
            continue growing in this space." 
            image={exTwo} imgFirst={false}
            alt="Gameplay of a player placing a bet and rolling dice, followed by resetting the game to return to the main menu."/>   
        
            <div className="flex w-3/4 justify-center pt-3">
                <a href="https://github.com/jennatimm/CRAPS-GAME" className="rounded-lg hover:bg-(--tertiary)">
                    <Header text="Github Repository"/> 
                </a>            
            </div>
            <NextProject id={ allProjects.length } allProjects={ allProjects }/>
        </div>
    </div>);
};