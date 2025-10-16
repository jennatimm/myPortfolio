import { Banner } from "../../components/Banner";
import { Header } from "../../components/Header";
import { Block } from "../../components/Block";
import { TextBox } from "../../components/TextBox";
import { NextProject } from "../../components/nextProject";
import exOne from '../../media/payrollers/exOne.gif';
import exTwo from '../../media/payrollers/ERDiagram.png';
import profile from '../../media/payrollers/profile.png';
import allProjects from '../../data/projects';

export const Payrollers = () => {
    return (<div>

        <Banner text="PAYROLLERS" image={profile}/>
        <div className="page pt-40 md:pt-20">
            
            <Block title="Overview" 
            text="For our Database Systems Design project, my team and I built a full-stack
            web application that involved designing and developing a dynamic website using PHP
            with a SQL relational database for efficient data management. We handled everything
            from the initial design to the final deployment. Originally, It was originaly launched
            on Google Cloud Platform, but after the trial ended, I migrated it to InfinityFree.
            This project gave me hands on experience with full-stack development, database
            design, cloud deployment, and effective team collaboration."
            image={exOne} imgFirst={true} caption="Disclaimer: This is a simulated website
            created for a class project and does not represent a real business."
            alt="Home page displayed, followed by a cycling display of pages with database-driven information (i.g. full-time employees, wages)"/>

            <Header text="Challenges and Solutions"/>
            <TextBox 
            text="At first, our team was considering a leaderless approach. We all felt capable of
            pulling our own weight, but this lead to a potential for task overlap and gaps in
            responsibility. To enhance our workflow, I suggested adopting the Scrum framework for
            added structure and accountability. We introduced week long sprints, shifting our meetings
            to focus not only on reviewing completed work but also on setting clear goals and priorities.
            This adjustment improved coordination, clarified individual roles, and ensured steady
            progress toward our objectives."
            />

            <Block title="Key Contributions" 
            text={[`I collaborated closely with my teammates to refine the ER diagram, played a key role
            in normalizing the schema to Boyce-Codd Normal Form and contributed to writing / testing SQL
            queries. I took the lead on PHP development on the front end, where I built the user-facing
            interface that interacted with our MySQL database. I also supported the final documentation
            process, helping write and edit the report. We regularly reviewed each other’s work to
            provide feedback and maintain consistency.`,
            `After the class ended, I choose to migrate the project from Google Cloud Platform to
            InfinityFree and manually configured SSL to ensure secure access.`]}
            image={exTwo} imgFirst={false} caption="ER Diagram"/>

            <Header text="Key Takeaways"/>
            <TextBox 
            text="By applying the Scrum framework, we maintained consistent progress and successfully met
            our deadlines. Over the six-week project timeline, we created a robust relational model for the
            database, improving both performance and maintainability. Our normalized database design ensured
            data integrity and reduced redundancy, resulting in a more efficient system. We also developed a
            user-friendly web interface and deployed the application on multiple platforms, demonstrating our
            ability to handle a complex database in web development. Although the application is no longer
            running on Google Cloud due to a lack of funds, it is successfully hosted on InfinityFree, allowing
            us to continue showcasing our work. This project not only met the requirements but also enhanced
            our learning experience, allowing each team member to engage in all aspects of the development process."
            />  

            <div className="flex w-3/4 justify-center pt-3">
                <a href="http://payroller.infinityfreeapp.com/" className="rounded-lg hover:bg-(--tertiary)">
                    <Header text="Click Here for Project"/> 
                </a>
                {/* <a href="">
                    <Header text="Click Here for Github Repo"/> 
                </a>             */}
            </div>
            <NextProject id="3" allProjects={ allProjects }/>
        </div>
    </div>);
};