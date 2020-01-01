import React ,{Component} from "react"
import {Link} from "react-router-dom";

export default class Navbar extends Component{
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">ExerTrack</Link>
                <div className="collapse navbar-collapse" >
                    <ul className="navbar-nav mr-auto" >
                        <li className="navbar-item" >
                            <Link to="/" className="nav-link">Exercises Status</Link>
                        </li>
                        <li className="navbar-item" >
                            <Link to="/create" className="nav-link" >Create Exercises</Link>
                        </li>
                        <li className="navbar-item" >
                            <Link to="/edit/:id" className="nav-link" >Edit Exercises</Link>
                        </li>
                       <li className="navbar-item" > 
                       <Link to="/create" className="navbar-brand"></Link></li>
                       <li className="navbar-item" >
                            <Link to="/User" className="nav-link" >Create User</Link>
                        </li>

                    </ul>
                </div>
                
            </nav>
        )
    }
}