import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercise.component"
import EditExercise from "./components/edit.component"
import CreateExercise from "./components/create.component"
import CreateUser from "./components/user.component"
function App() {
  return (
   <Router>
     <div className="container">
  <Navbar/>
  
        <br/>
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id"  component={EditExercise}/>
        <Route path="/create"  component={CreateExercise}/>
        <Route path="/User" component={CreateUser}/>
        </div>
    </Router>
    
  );
}

export default App;
