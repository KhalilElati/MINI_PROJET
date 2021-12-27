import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
const ProjectsList = () => {
  const [projects, setProjects] = useState([]);
  {
    useEffect(() => {
    axios.get('http://localhost:4000/projects')
      .then(response => { 
        setProjects(response.data);
      }
      )
      .catch(err => console.log(err));
  }, []);

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
            
            
            projects.length ?
              projects.map(project =>
                <div key={project._id} className="card mt-4">
                  <div className="card-body">
                    <h4 className="card-title">{project.projectName}</h4>
                    <div className="card-subtitle text-muted mb-2" >
                      {project.projectDeadline} 
                    </div>
                    <div className="card-text mb-2">{project.projectDescription} </div>
                    <Link to={`/projects/${project._id}`} className="btn btn-primary">
                     Show More
                    </Link>
                  </div>
                </div>
              ) :
              null
              
          }
        </div>
      </div>
    </>
  );
}

export default ProjectsList;