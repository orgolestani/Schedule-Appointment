import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
// import Home from './components/Home/Home';
import ToriRouter from './MainRouter';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <ToriRouter/>
    <Footer/>
    </div>
  );
}

export default App;
