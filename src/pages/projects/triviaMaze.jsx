import { Banner } from "../../components/Banner";
import { Header } from "../../components/Header";
import { Block } from "../../components/Block";
import { TextBox } from "../../components/TextBox";
import exOne from '../../media/triviamaze/startingLosingPlay.gif';
import exTwo from '../../media/triviamaze/winningPlay.gif';
import profile from '../../media/triviamaze/profile.png';

 export const TriviaMaze = () => {
    return (<div className="page">

        <Banner text="TRIVIA MAZE" image={profile}/>
        <div className="page pt-40 md:pt-20">
            
            <Block title="Overview" 
            text={[`This project involved developing a Trivia Maze with a team of three, using
                the MVC design pattern and Git/GitHub for version control. We utilized UML diagrams
                for design and managed the project with SCRUM methodology. The project included the
                use of SQLite to store trivia questions. I focused primarily on the frontend, where
                I used JavaFX to create a detailed and user-friendly GUI. In addition to my frontend
                responsibilities, I supported my teammates by helping with the controller logic and
                backend functionality. I also utilized Jackson for game state serialization and took
                the initiative to contribute to other areas as needed to ensure the project’s success.
                Ultimately, we delivered a fully functional and engaging game with a robust interface
                and well-documented, clean code within a four-week timeframe.`]}
            image={exOne} imgFirst={true}/>

            <Header text="Adopting JavaFX for Skill Expansion and Personal Growth"/>
            <TextBox 
            text={[`For this project, I had the option of using Java Swing, which I had prior experience
                with, or challenging myself to learn JavaFX. Eager to expand my skills, I chose to self-
                teach JavaFX, despite having no previous experience with the framework. This decision
                pushed me to dive deeper into the documentation and online resources, allowing me to not
                only complete the project successfully but also gain valuable knowledge in a new technology.
                The challenge of learning JavaFX was rewarding and enhanced my confidence in tackling
                unfamiliar tools.`]}/>

            <Block title="Team Collaboration and Challenges" 
            text={[`This was our first group project in the program after working independently for some
                time. Reflecting back, it is evident that our communication and focus on collaboration
                should have been stronger. My teammates and I were new to GitHub and SCRUM sprints, so we
                initially struggled with implementing these processes effectively. As a result, I didn’t
                realize how far behind my teammates were until a week before the project was due. Thankfully,
                I had planned to finish early, so I was able to offer support to my teammates and help us catch
                up, ensuring we met our deadline.`]} 
            image={exTwo} imgFirst={false}/>   

            <Header text="Key Takeaways"/>
            <TextBox 
            text={[`This project taught me the importance of setting clear goals and holding regular check-ins to
                ensure that everyone is on track. The lack of structure and timely feedback created unnecessary
                stress, but I used the experience to improve my future project management skills. In subsequent
                projects, like the game design project (0xF0), I proactively reached out to teammates who were
                falling behind, which helped ensure smoother collaboration and more efficient progress.`]}/>
        </div>

    </div>);
 };