import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom'
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Simulations } from "./pages/Simulations";

import { CrapsGame } from './pages/projects/crapsGame';
import { Payrollers } from './pages/projects/payrollers';
import { RacingGame } from './pages/projects/racing';
import { RateMyBooks } from './pages/projects/rateMyBooks';
import { TriviaMaze } from './pages/projects/triviaMaze';
import { Portfolio } from './pages/projects/portfolio';

import { EvolvingColor } from './pages/simulations/evolvingColors';
import { GameOfLife } from './pages/simulations/gameOfLife';

import { NotFound } from "./pages/NotFound";
import { NavBar } from "./components/NavBar";
import { Footer } from './components/Footer';

function Layout() {
    return (
      <div className="caret-transparent flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow pt-6 overflow-x-hidden text-(--foreground)">
          <Outlet/>
        </main>
        <Footer/>
      </div>
    )
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes> 
          <Route element={<Layout />}>
            <Route index element={<About/>}/>
            <Route path="Projects" element={<Projects/>}/>
            <Route path="Simulations" element={<Simulations/>}/>
            <Route path="Projects/CrapsProject" element={<CrapsGame/>}/>
            <Route path="Projects/Payrollers" element={<Payrollers/>}/>
            <Route path="Projects/RacingProject" element={<RacingGame/>}/>
            <Route path="Projects/BooksProject" element={<RateMyBooks/>}/>
            <Route path="Projects/TriviaProject" element={<TriviaMaze/>}/>
            <Route path="Projects/Portfolio" element={<Portfolio/>}/>
            <Route path="Simulations/EvolvingColors" element={<EvolvingColor/>}/>
            <Route path="Simulations/GameOfLife" element={<GameOfLife/>}/>
            <Route path = "*" element={<NotFound/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
