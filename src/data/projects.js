import crapProject from '../media/craps/profile.png'
import rateProject from '../media/ratemybooks/profile.png'
import triviaProject from '../media/triviamaze/profile.png'
import racingProject from '../media/racing/profile.png'
import payrollersProject from '../media/payrollers/profile.png'

const allProjects = [
    {
        "id": "0",
        "title": "Craps Game",
        "image": crapProject,
        "description": "Snippet of the Craps game displaying current bet and bank value",
        "route": "Projects/CrapsProject",
        "shortRoute": "CrapsProject"
    },
    {
        "id": "1",
        "title": "Trivia Maze",
        "image": triviaProject,
        "description": "Dark empty brick room with three doors labeled A, B, and C",
        "route": "Projects/TriviaProject",
        "shortRoute" : "TriviaProject"
    },
        {
        "id": "2",
        "title": "0xF0",
        "image": racingProject,
        "description": "Blue sports car about to start a race",
        "route": "Projects/RacingProject",
        "shortRoute" : "RacingProject"
    },
    {
        "id": "3",
        "title": "Payrollers",
        "image": payrollersProject,
        "description": "Welcome page of the Payrollers website",
        "route": "Projects/Payrollers",
        "shortRoute" : "Payrollers"
    },    {
        "id": "4",
        "title": "Rate My Books",
        "image": rateProject,
        "description": "Explore Page for RateMyBooks that displays different books",
        "route": "Projects/BooksProject",
        "shortRoute" : "BooksProject"
    }
    // ,
    // {
    //     "id": "5",
    //     "title=": "My Portfolio",
    //     "image": "", 
    //     "description": "Built from scratch using React and Tailwind.",
    //     "route": "",
    //    "shortRoute" : 
    // }
]
export default allProjects;