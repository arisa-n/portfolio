import './App.scss';
import { Footer, Home, NavBar, Projects, Skills } from './components';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
