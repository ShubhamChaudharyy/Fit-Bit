import React ,{Component} from "react"
import {Link} from "react-router-dom";

export default class Navbar extends Component{
    render(){
        return(
            <nav>
                <Link to="/" className="navbar-brand">ExerTrack</Link>
                <div className="collapse navbar-collapse" >
                    <ul className="navbar-nav mr-auto" >
                        <li className="navbar-item" >
                            <Link to="/">Exercises Status</Link>
                        </li>
                        <li className="navbar-item" >
                            <Link to="/create">Create Exercises</Link>
                        </li>
                        <li className="navbar-item" >
                            <Link to="/edit/:id">Edit Exercises</Link>
                        </li>
                       

                    </ul>
                </div>
                 <Link to="/create" className="navbar-brand"></Link>
            </nav>
        )
    }
}