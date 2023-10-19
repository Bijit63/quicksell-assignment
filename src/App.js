import './App.css';
import KanbanBoard from './Components/KanbanBoard';
import Navbar from './Components/Navbar';
import { Notecontext } from './Context/NoteContext';


function App() {
  return (
  <Notecontext>
    <Navbar/>
      <KanbanBoard/>
        
       
  
  </Notecontext>
  );
}

export default App;
