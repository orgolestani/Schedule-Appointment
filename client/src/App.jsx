import Navbarr from "./components/Navbar/Navbarr";
import Footer from "./components/Footer/Footer";
// import Home from './components/Home/Home';
import ToriRouter from './MainRouter';
import './App.css';

function App() {
  return (
    <div className="App">
<Navbarr/>

    <ToriRouter/>
    <Footer/>
    </div>
  );
}

export default App;
