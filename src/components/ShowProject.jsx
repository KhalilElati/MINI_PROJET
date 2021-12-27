
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
//import useFetch from "./useFetch";

const ShowProject = () => {
    const [project, setProject] = useState('');
    const { id } = useParams();
    //  const { data: project, isPending, error } = useFetch('http://localhost:8000/blogs/' + id);
    useEffect(() => {  
    let url='http://localhost:4000/projects/'+id;
        //axios.get(`http://localhost:4000/projects/get?${id}` ) 
        axios.get(`http://localhost:4000/projects/get?${id}` ) 
            .then(response => {
                setProject  (response.data); console.log(project);  
            }
            )
            .catch(err => console.log(err));
    }, []);
    return (
        <div className="container">
            <article>

                <h1 className="mb-1">{project.projectName}</h1>
                <div className="text-muted mb-2">{project.projectDeadline}</div>
                <Link to="/" className="btn btn-secondary">Show Tasks</Link>
                <div className="card-text mb-2">{project.projectDescription} </div>
                <div className="card-text mb-2">{project.projectMembers} </div> 
            </article>
            {/*
            {isPending && <h2>Loading..</h2>}
            {error && <h2>{error}</h2>}
            {project && (
                <article>

                    <h1 className="mb-1">{project.title}</h1>
                    <div className="text-muted mb-2">{project.deadline}</div>
                    <Link to="/" className="btn btn-secondary">Show Tasks</Link>
                    <div className="card-text mb-2">{project.description} </div>
                </article>
            )}
            */}
        </div>
    );
}

export default ShowProject;