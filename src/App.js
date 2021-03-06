import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import Projects from './components/Projects';
import About from './components/About';

function App() {
  return (
    <body className="bg-light">
      <Nav></Nav> 
      <Main></Main>
      <About></About>
      <Projects></Projects>
      <Footer></Footer>
    </body>
  );
}

export default App;
