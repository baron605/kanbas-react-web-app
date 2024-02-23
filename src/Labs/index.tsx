import Nav from "../Nav";
import Assignment3 from "./a3";
import { Link } from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";
import Add from "./a3/routing/Add";


function Labs() {
    return (
      <div className="container-fluid">
        <h1>Labs</h1>
        <Nav />
        <Link to="/Labs/a3">Assignment 3</Link> |
        <Link to="/Labs/a4">Assignment 4</Link>
        <Routes>
          <Route path="/a3/*" element={<Assignment3 />} />
          <Route path="/a3/add/:a/:b" element={<Add />} />
        </Routes>
      </div>
    );
  }
  export default Labs;
