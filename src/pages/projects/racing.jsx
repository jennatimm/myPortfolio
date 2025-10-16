import { Banner } from "../../components/Banner";
import { Header } from "../../components/Header";
import { Block } from "../../components/Block";
import { TextBox } from "../../components/TextBox";
import { NextProject } from "../../components/nextProject";
import exOne from '../../media/racing/controls.gif';
import exTwo from '../../media/racing/losingRace.gif';
import profile from '../../media/racing/profile.png';
import allProjects from '../../data/projects';

export const RacingGame = () => {
    return (<div>

        <Banner text="0xF0" image={profile}/>
        <div className="page pt-40 md:pt-20">
            
            <Block title="Overview" 
            text="For this project, I worked as part of a four-person team to develop a web-based
            racing game using HTML, CSS, and JavaScript. We utilized SCRUM methodology to organize
            sprints, conduct code reviews, and efficiently troubleshoot bugs. I led the development
            of a bounce mechanic that handled collisions through detection and redirection, ensuring
            smooth, responsive vehicle movement along the track. Our game, 0xF0, ranked 2nd out of 16
            other games. It was praised for its engaging and smooth game play." 
            image={exOne} imgFirst={false}
            alt="Main menu cycling through credits, track/car selections, gameplay controls, plus settings like lap count and car invincibility"/>

            <Header text="Overcoming Setbacks and Collaborating for Solutions"/>
            <TextBox 
            text="My initial approach to implementing the bounce-off-the-wall feature was ineffective,
            resulting in a setback of about a week. I discussed the issue with a teammate, and through
            brainstorming together, we generated a few alternative approaches. After testing and tweaking
            these new ideas, I was able to catch up and get back on track within a week."/>

            <Block title="Reaching Out and Guiding Team Efforts" 
            text="One of my teammates struggled to deliver results during our weekly sprint meetings. I
            reached out privately to understand the source of there challenges. While they had big ideas,
            the foundational work was lacking, particularly in understanding the car’s perspective and how
            to use theta for displaying the enemy. After sharing insights from my section of the code and
            what I learned while implementing it, we were able to realign our efforts and move forward
            more efficiently." 
            image={exTwo} imgFirst={true}
            alt="Gameplay of a player's car bouncing off the wall repeatedly until it loses enough health to explode, ending the game"/>   
            
            <Header text="Lessons Learned from Task Allocation and Collaboration"/>
            <TextBox 
            text="In hindsight, it became clear that the enemy car was a task that required two people to
            work on, or at least needed to be addressed after our main car was functional. Unfortunately, we
            missed the deadline, but we implemented a timer feature that allowed users to race against their
            own time. If I could do it again, I would have teamed up with my teammate from the start. My
            experience working on my section would have been highly beneficial to her, and by collaborating
            sooner, we could have progressed faster and gained a shared understanding of how the car interacts
            with the map. This would have enabled us to focus more time on the enemy car and ultimately
            improve the project outcome."/>

            <div className="flex w-3/4 justify-center items-center pt-3">
                <a href="https://chadob.github.io/0xF0/" className="rounded-lg hover:bg-(--tertiary)">
                    <Header text="Play Here (Best experienced in Chrome)"/> 
                </a>
                <a href="https://github.com/chadob/0xF0" className="rounded-lg hover:bg-(--tertiary)">
                    <Header text="Github Repository"/> 
                </a>            
            </div>
        <NextProject id="2" allProjects={ allProjects }/>
        </div>
    </div>);
};