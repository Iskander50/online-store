import './App.css';
import Footer from './components/footer/Footer';
import Item from './components/item/Item';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Item/>
      <Footer/>
    </div>
  );
}

export default App; 
