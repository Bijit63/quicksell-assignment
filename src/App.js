import './App.css';
import KandanBoard from './Components/KandanBoard';
import Navbar from './Components/Navbar';
import { Notecontext } from './Context/NoteContext';


function App() {
  return (
  <Notecontext>
    <Navbar/>
      <KandanBoard/>
        
       
  
  </Notecontext>
  );
}

export default App;
