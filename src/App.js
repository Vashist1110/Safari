import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <>
      <Navbar />
      <Home id="home"/>
      <Main id="main"/>
      <Footer id="footer"/>
    </>
  );
}

export default App;
