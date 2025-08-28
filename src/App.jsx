import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom'
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Simulations } from "./pages/Simulations";
import { NotFound } from "./pages/NotFound";
import { NavBar } from "./components/NavBar";



function Layout() {
    return (
      <>
        <NavBar />
        <main>
          <Outlet/>
        </main>
      </>
    )
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes> 
          <Route element={<Layout />}>
            <Route index element={<Home/>}/>
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
