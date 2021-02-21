
import './App.css';
import Landing from './Components/Landing';
import Home from './Components/Home';
import Navigationbar from './Components/Navigationbar';
import BooksSection from './Components/BooksSection';



function App() {
  return (
    <div className="App">
     
     <Navigationbar></Navigationbar>
     <Landing></Landing>
      <Home></Home>
      <BooksSection></BooksSection>
    </div>
  );
}

export default App;
