import { Banner } from "../../components/Banner";
import { Header } from "../../components/Header";
import { Block } from "../../components/Block";
import { TextBox } from "../../components/TextBox";
import exOne from '../../media/ratemybooks/authorYearSeachBookDelete.gif';
import exTwo from '../../media/ratemybooks/backendTesting.gif';
import exThree from '../../media/ratemybooks/addingReview.gif';
import profile from '../../media/ratemybooks/profile.png';

export const RateMyBooks = () => {
    return (<div>

        <Banner text="RATE MY BOOKS" image={profile}/>
        <div className="page pt-40 md:pt-20">
            
            <Block title="Overview" 
            text={[`As part of a senior-level web development course, my team built a full-stack
            book review application. The project was completed in two phases: first, developing
            a RESTful API using Node.js, Express, and PostgreSQL; and second, building a
            React-based frontend with Next.js that consumed the API.`,
            `The goal was to simulate real-world development conditions. Frontend and
            backend teams were separated and expected to collaborate across team lines, creating
            realistic challenges related to API contracts, documentation clarity, and communication.
            The final application allowed users to view a list of books to search, add and delete as
            well as access detailed book information such as ratings.`]}
            image={exOne} imgFirst={false}
            alt="Displays the web pages for adding, deleting and displaying a book."/>

            <Header text="Challenges and Solutions"/>
            <TextBox 
            text={[`One of the biggest challenges I faced was adjusting to a complex starter codebase
            that bundled multiple unfamiliar technologies. Unlike past projects that introduced one tool
            at a time, this project included a main app, two demos, and an authentication section we had
            not covered in class. The overlap between components made it hard to trace logic, distinguish
            what’s essential, or spot what I’d missed.`,
            `To contribute meaningfully, I focused on fully understanding my section rather than the
            entire system. After the course, I revisited the project, studying each technology independently
            before cleaning up unused parts and reviewing the structure. This experience taught me how to work
            through ambiguity, adapt my learning style, and handle the layered complexity common in real-world
            codebases.`]}/>

            <Header text="Responsibilities and Contributions:"/>

            <Block title="~ Backend Development ~" 
            text="My backend contributions focused on developing two endpoints, newRating for standard users
            and newRating/admin for administrators. The former enabled users to vote on existing ratings, while
            the latter allowed admins to override and set rating values directly. To support backend reliability,
            I created and ran unit tests to verify that the endpoint performed as expected. The animated GIF
            attached demonstrates the endpoints functioning correctly in Postman. I also contributed to our API
            documentation using apidoc.js, helping make our backend more accessible and understandable for the
            frontend team we collaborated with." 
            image={exTwo} imgFirst={true}
            alt="Demonstrates the endpoints 'newRating' and 'newRating/admin' functioning correctly in Postman"/>   

            <Block title="~ Frontend Development ~" 
            text="On the frontend side, I focused on the book details page, specifically building the section
            that displayed existing reviews and allowed users to submit new ratings. I developed the necessary UI
            components, integrated them with our API, and handled asynchronous data flows and potential edge cases.
            I worked to ensure that users could interact smoothly with the rating system while also reinforcing the
            consistency of the overall user experience. This required frequent collaboration with both teammates and
            our partner backend team to resolve mismatches and improve functionality across the stack." 
            image={exThree} imgFirst={false}
            alt="User searches for a book by title, submits a 4-star, then searches by publication year and submits a 3-star review."/>  

            <Header text="Key Takeaways"/>
            <TextBox 
            text={[`This project planted the seeds for my full-stack development journey. It introduced me to tools (i.e.
            Node.js, Express, PostgreSQL, React, and Next.js) that helped me connect the dots between frontend
            and backend systems. While I am far from mastering all the technologies, the experience gave me a strong
            sense of direction. It showed me what technologies exist, how they’re used together, and which areas I needed
            to explore more deeply.`,
            `Equally important, I learned to adapt my learning style. I developed the ability to navigate ambiguous
            or messy code bases, approach unfamiliar technologies with curiosity rather than fear, and independently close
            knowledge gaps through focused, self-guided research. I also learned how to collaborate across team boundaries
            and contribute meaningfully even when I didn’t have the full picture, something that will be crucial in any
            real-world development environment.`]}/>

            <div className="flex w-3/4 justify-center pt-3">
                <a href="https://github.com/NathanHinthorne/TCSS-460-Book-Frontend" className="rounded-lg hover:bg-(--tertiary)">
                    <Header text="Github Repository"/> 
                </a>            
            </div>

        </div>

    </div>);
};