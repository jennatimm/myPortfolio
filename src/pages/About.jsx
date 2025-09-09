import { ThemeToggle } from "../components/ThemeToggle";
import avatar from '../media/bitmoji.png'
export const About = () => {
    return (
        <div class="page">
            {/* Pic and Text */}
            <div className="card">
                <img className=" p-2 w-35" src={avatar} />  
                <div className="textBox">
                    <p>Aspiring Software Developer based in Tacoma, WA.</p>
                    <p>B.S. in Computer Science – University of Washington, 2024</p>
                    <p>GPA 3.69/4.0</p>
                </div>
            </div>

            {/* Journey */}
            <div className="heading text-glow">
                ~ My Journey ~
            </div>
            <div>
                <p className="textBox">
                    In the early stages of my academic journey, I explored various subjects to 
                    discover my true interests. I found myself drawn to STEM courses such as calculus 
                    and physics. These subjects were the first to truly connect with me, offering 
                    real-world insights that helped me understand the world around me. I also enjoyed 
                    the challenge they presented, as they pushed me to think critically and solve 
                    complex problems.
                </p>
                <p className="textBox">
                    But it wasn’t until I discovered coding that everything truly clicked. Coding allowed 
                    me to take those complex ideas and bring them to life in an interactive way. It was 
                    incredible to see abstract concepts transformed into something tangible, something I 
                    could build and share with others. What I love most is how coding makes it possible to 
                    take intricate, complicated ideas and present them in a simple, digestible format. It’s 
                    a beautiful way to communicate and connect, and it’s what continues to inspire me every day.
                </p>
                <p className="textBox">
                    I am eager to apply my skills to real-world projects and further enhance my abilities under 
                    the guidance of experienced professionals. I look forward to collaborating with others, 
                    learning from their expertise, and contributing my own passion and perspective to meaningful 
                    projects.
                </p>
            </div>
        </div>
    );
};