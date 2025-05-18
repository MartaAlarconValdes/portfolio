import { Navbar } from './components/navbar/navbar'
import { About } from './pages/about/about'
import { Experience } from './pages/experience/experience'
import { Home } from './pages/home/home'

export default function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Experience/>
{/*     <Contact/> */}
    </>
  )
}
