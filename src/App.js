



import './App.css';
import Navbar from './components/Navbar';
import WordForm from './components/WordForm';
function App() {
  return (
    <>
    

   {/* <Navbar /> */}
  {/* <Navbar title = 'textutils' /> */}

  <Navbar title = 'Textutils'  about=' About' />

  <div className="container my-3">  

      {/* div.container my-3 is boothstrap container  */}
   <WordForm heading = "Enter the text to analyze"/>
  </div>
  </>
    
  );
}

export default App;
