import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom'
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Simulations } from "./pages/Simulations";
import { NotFound } from "./pages/NotFound";
import { NavBar } from "./components/NavBar";
import { Footer } from './components/Footer';



function Layout() {
    return (
      <>
        <NavBar />
        <main className="caret-transparent pt-6 min-h-screen overflow-x-hidden text-(--toggle)">
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
            <Route path = "*" element={<NotFound/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
