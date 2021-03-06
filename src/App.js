import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import Projects from './components/Projects';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <body className="bg-light">
      <Nav></Nav> 
      <Main></Main>
      <About></About>
      <Projects></Projects>
      <Resume></Resume>
      <Contact></Contact>
      <Footer></Footer>
    </body>
  );
}

export default App;
