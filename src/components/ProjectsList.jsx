import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
const ProjectsList = () => {
  const [projects, setProjects] = useState([]);
  {
    /*useEffect(() => {
    axios.get('/projects')
      .then(response => { 
        setProjects(response.data);
      }
      )
      .catch(err => console.log(err));
  }, []);
*/
  }
  return (
    <> 
      <div className="container">
        <h1 className="mb-4">Projects</h1>
        <Link to="/projects/new" className="btn btn-success">
          Add Project
        </Link>
        <div>
          {
            /*
            
            projects.length ?
              projects.map(project =>
                <div key={project.id} className="card mt-4">
                  <div className="card-body">
                    <h4 className="card-title">{project.title}</h4>
                    <div className="card-subtitle text-muted mb-2" >
                      {project.deadline} 
                    </div>
                    <div className="card-text mb-2">{project.description} </div>
                  </div>
                </div>
              ) :
              null
              */
          }
        </div>
      </div>
    </>
  );
}

export default ProjectsList;