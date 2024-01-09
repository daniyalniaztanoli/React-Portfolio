import {Navbar} from '../src/Components/Navbar'
import {Bot} from '../src/Components/Bot'
import {Hero} from '../src/Components/Hero'
import {About} from '../src/Components/About'
import {Skill} from '../src/Components/Skills'
import {HireMe} from '../src/Components/Hireme'
import {Project} from '../src/Components/Project'
import { Contact } from './Components/Contact'
import { Footer } from './Components/Footer'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Bot/>
      <Hero/>
      <About/>
      <Skill/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
