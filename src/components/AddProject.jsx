import { Link } from "react-router-dom";

const AddProject = () => {
    return ( 
    <div className="container">
        <h1 className="mb-4">Add Project</h1>
        <form action="/projects" method="POST">
            <div className="form-group"> 
                <label htmlFor="projectName">Name</label>
                <input required type="text" name="projectName" id="projectName" className="form-control" />
            </div>
            
            <div className="form-group"> 
                <label htmlFor="projectType">Type</label>
                <input required type="text"  name="projectType" id="projectType" className="form-control" />
            </div>
            <div className="form-group">  
                <label htmlFor="projectDescription">Description</label>
                <textarea name="projectDescription" id="projectDescription" className="form-control" > </textarea> 
            </div> 
            <div className="form-group">  
                <label htmlFor="projectMembers">Members</label>
                <input required type="text" name="projectMembers" id="projectMembers" className="form-control" />
            </div>
            <div className="form-group">  
                <label htmlFor="projectDeadline">Deadline</label>
                <input required type="text" name="projectDeadline" id="projectDeadline" className="form-control" />
            </div>
            <Link to="/projects" className="btn btn-secondary">cancel</Link>
            <button type="submit" className="btn btn-primary">Add</button>
        </form>
    </div>
     );
}
 
export default AddProject;