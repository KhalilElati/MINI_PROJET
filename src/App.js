import './App.css'; 
import ProjectsList from './components/ProjectsList'; 
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import AddProject from './components/AddProject';
import ShowProject from './components/ShowProject';

function App() {
  return (
    <BrowserRouter>
    <div className="App"> 
      <div className="content">
        <Routes>
          <Route exact path="/projects" element={<ProjectsList/>}  />
          <Route exact path="/projects/new" element={<AddProject/>}  /> 
          <Route exact path="/projects/:id" element={<ShowProject/>}  /> 
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
