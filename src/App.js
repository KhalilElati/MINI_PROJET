import './App.css'; 
import ProjectsList from './components/ProjectsList'; 
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import AddProject from './components/AddProject';

function App() {
  return (
    <BrowserRouter>
    <div className="App"> 
      <div className="content">
        <Routes>
          <Route exact path="/" element={<ProjectsList/>}  />
          <Route exact path="/projects/new" element={<AddProject/>}  /> 
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
