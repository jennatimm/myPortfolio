import { Banner } from "../../components/Banner";
import { Block } from "../../components/Block"
import { Header } from "../../components/Header";
import { TextBox } from "../../components/TextBox";
import { NextProject } from "../../components/NextProject";
import exOne from '../../media/portfolio/image1.gif';
import exTwo from '../../media/portfolio/image2.gif';
import profile from '../../media/portfolio/profile.png';
import allProjects from '../../data/projects';
export const Portfolio = () => {
    return (<div>

        <Banner text="Portfolio" image={profile}/>

        <div className="page pt-40 md:pt-20">
            
            <Block title="Overview" 
                text={[
                    `I built my portfolio as a self guided frontend-focused project. In this project I 
                    challenged myself to enhance my understanding of the React library and JavaScript 
                    language while branching out to expand my skill set by working with Vite, TailwindCSS, 
                    and deploying through Vercel. My goal was to create a space to showcase my work while 
                    continuing to experiment, learn, and refine my frontend skills through hands-on development.`]}
                image={exOne} imgFirst={false} caption={"Desktop View"} captionTop={true}
                alt="gif of a user exploring the different tabs on the desktop site"/>

            <Header text="Inspiration"/>
            <TextBox 
                text={[`I had a desire to create a customizable portfolio 
                    to present my past and current projects. A place that grows with me as I 
                    continue to grow as a developer. At first I was interested in exploring the 
                    pre built templates on WordPress, however I quickly found them limiting. Since I 
                    also have a strong desire to practice working with modern frontend 
                    development tools, I decided to build my portfolio from the ground up.`,
                    `This website was also partially inspired from my senior level web development 
                    course, where I worked with React and TypeScript for the frontend. 
                    That experience sparked my interest in modern web development and motivated 
                    me to revisit the tech stack introduced in that course after graduating. So I 
                    challenged myself to use some of the frameworks and libraries introduced in 
                    school while also picking new ones to learn about.` ]}/>
            
            <Block title="Design and Technology Choices" 
                text={[`When building this site, I focused on enhancing my understanding of 
                    technologies taught in school, particularly React and JavaScript. 
                    I also introduced myself to new tools like Vite and TailwindCSS. I chose 
                    the build tool Vite for its fast development workflow and the CSS framework 
                    TailwindCSS for its utility-first approach to styling. Throughout the 
                    process, I prioritized clean structure, accessibility, and 
                    maintainability so the site could grow alongside my skills.`,
                    `While Rate My Books was written in TypeScript, I intentionally built my portfolio 
                    in JavaScript to strengthen my fundamentals and explore how the same architecture 
                    translates across both languages. I also wanted to deepen my appreciation of JavaScript’s 
                    legacy role. Although TypeScript is becoming increasingly common, JavaScript is still widely 
                    used on its own, and I wanted to ensure I could distinguish the differences between the two 
                    languages while solidifying my foundational skills.`]} 
                image={exTwo} imgFirst={true} caption={"Mobile View"} captionTop={true}
                alt="to be displayed when failed to load"/>   
        
            <div className="flex w-3/4 justify-center pt-3">
                <a href="https://github.com/jennatimm/myPortfolio" className="rounded-lg hover:bg-(--tertiary)">
                    <Header text="Github Repository"/> 
                </a>            
            </div>

            <NextProject id = '5' allProjects={ allProjects }/>
        </div>
    </div>);
};