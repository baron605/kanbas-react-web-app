import React from "react";
import {
  FaBook,
  FaCaretDown,
  FaCheckCircle,
  FaEllipsisV,
  FaGripVertical,
  FaPlus,
  FaSearch,
} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";

function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId
  );

  return (
    <>
      <div>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="input-group w-50">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1"><FaSearch /></span>
            </div>
            <input type="text" className="form-control" placeholder="Search assignments" aria-label="Search" aria-describedby="basic-addon1" />
          </div>
          <div className="d-flex">
            <button type="button" className="btn btn-outline-primary m-1">
              <FaPlus />
              Add Group
            </button>

            <button type="button" className="btn btn-primary m-1">
              <FaPlus />
              Add Assignment
            </button>

            <button type="button" className="btn btn-outline-secondary m-1">
              <FaEllipsisV />
            </button>
          </div>
        </div>
        <div className="list-group">
          <div className="list-group-item list-group-item-action flex-column align-items-start py-3">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">Assignments Overview</h5>
              <small>40% Weight</small>
            </div>
            <p className="mb-1">Manage your assignments and tasks here.</p>
            <small>Due dates and details below.</small>
          </div>
          {assignmentList.map((assignment) => (
            <Link
              key={assignment._id}
              to={`/Courses/${courseId}/Assignments/${assignment._id}`}
              className="list-group-item list-group-item-action"
            >
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{assignment.title}</h5>
                <small>Due: Sept 18, 2022 | 100 pts</small>
              </div>
              <p className="mb-1">{assignment._id}</p>
              <small>Click to view details</small>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Assignments;
