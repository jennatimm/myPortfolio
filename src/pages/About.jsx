import { TextBox } from "../components/TextBox";
import { Header } from "../components/Header.jsx";
import avatar from '../media/bitmoji.png'
export const About = () => {
    return (
        <div class="page">
            {/* Pic and Text */}
            <div className="card">
                <img className="px-2 w-35 bg(--toggle)" src={avatar} />  
                <TextBox text="Aspiring Software Developer based in Tacoma, WA"
                text2="B.S. in Computer Science – University of Washington, 2024"
                text3="GPA 3.69/4.0"/>
            </div>

            <Header text="~ My Journey ~"/>            
            <div className="mb-4">
                <TextBox text="In the early stages of my academic journey, I explored various subjects
                to discover my true interests. I found myself drawn to STEM courses such as calculus 
                and physics. These subjects were the first to truly connect with me, offering 
                real-world insights that helped me understand the world around me. I also enjoyed 
                the challenge they presented, as they pushed me to think critically and solve 
                complex problems."/>

                <TextBox text="But it wasn’t until I discovered coding that everything truly clicked. Coding allowed 
                me to take those complex ideas and bring them to life in an interactive way. It was 
                incredible to see abstract concepts transformed into something tangible, something I 
                could build and share with others. What I love most is how coding makes it possible to 
                take intricate, complicated ideas and present them in a simple, digestible format. It’s 
                a beautiful way to communicate and connect, and it’s what continues to inspire me every day."/>

                <TextBox text="I am eager to apply my skills to real-world projects and further enhance my 
                abilities under the guidance of experienced professionals. I look forward to 
                collaborating with others, learning from their expertise, and contributing my own 
                passion and perspective to meaningful projects."/>
            </div>
        </div>
    );
};