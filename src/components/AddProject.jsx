import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const AddProject = () => {
    const [projectName, setProjectName] = useState('');
    const [projectType, setProjectType] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    const [projectMembers, setProjectMembers] = useState('');
    const [projectDeadline, setProjectDeadline] = useState('');
    const onSubmit = event => {
        event.preventDefault()
        const registered = {
            projectName:  projectName,
            projectType:  projectType,
            projectDescription:  projectDescription,
            projectDeadline: projectDeadline,
            projectMembers:  projectMembers,
        }
        axios.post('http://localhost:4000/projects',registered)//post registered which contains all of our data to  endpoint which is our backend
            .then(response=>console.log(response.data))
            .catch(error=>console.log(error))
        window.location.assign('/projects')//after posting the project the project list will be rendered
    }
    return (
        <div className="container">
            <h1 className="mb-4">Add Project</h1>
            <form onSubmit={onSubmit}  >
                <div className="form-group">
                    <label htmlFor="projectName">Name</label>
                    <input required type="text" name="projectName" id="projectName" className="form-control" value={projectName} onChange={(e) => setProjectName(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="projectType">Type</label>
                    <input required type="text" name="projectType" id="projectType" className="form-control" value={projectType} onChange={(e) => setProjectType(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="projectDescription">Description</label>
                    <textarea name="projectDescription" id="projectDescription" className="form-control" value={projectDescription} onChange={(e) => setProjectDescription(e.target.value)}> </textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="projectMembers">Members</label>
                    <input required type="text" name="projectMembers" id="projectMembers" className="form-control"value={projectMembers} onChange={(e) => setProjectMembers(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="projectDeadline">Deadline</label>
                    <input required type="text" name="projectDeadline" id="projectDeadline" className="form-control"value={projectDeadline} onChange={(e) => setProjectDeadline(e.target.value)} />
                </div>
                <Link to="/projects" className="btn btn-secondary">cancel</Link>
                <button type="submit" value="submit" className="btn btn-primary">Add</button>
            </form>
        </div>
    );
}

export default AddProject;