import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom'
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Simulations } from "./pages/Simulations";

import { CrapsGame } from './pages/projects/crapsGame';
import { Payrollers } from './pages/projects/payrollers';
import { RacingGame } from './pages/projects/racing';
import { RateMyBooks } from './pages/projects/rateMyBooks';
import { TriviaMaze } from './pages/projects/triviaMaze';

import { NotFound } from "./pages/NotFound";
import { NavBar } from "./components/NavBar";
import { Footer } from './components/Footer';

function Layout() {
    return (
      <>
        <NavBar />
        <main className="caret-transparent pt-6 min-h-screen overflow-x-hidden text-(--foreground)">
          <Outlet/>
        </main>
        <Footer/>
      </>
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
            <Route path = "*" element={<NotFound/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
