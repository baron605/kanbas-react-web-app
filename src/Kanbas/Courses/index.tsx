import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import { FaBars, FaBreadSlice, FaGlasses } from "react-icons/fa";
import { Link } from "react-router-dom";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";



function Courses({ courses }: { courses: any[]; }) {
    const { pathname } = useLocation();
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  return (
    <div>
    <div className="row courses-heading d-none d-sm-flex">
			<div className="col-1">
				<FaBars className="fs-3 text-danger" />
			</div>
			<div className="col-9">
				<nav aria-label="breadcrumb" >
                    
					<ol className="breadcrumb fs-5">
						<li className="breadcrumb-item">
							<Link key={courseId} to="#" className="text-danger">
								{course?.name}
							</Link>
						</li>
						<li className="breadcrumb-item active" aria-current="page">
							{decodeURIComponent(pathname.substring(pathname.lastIndexOf("/") + 1))}
						</li>
					</ol>
				</nav>
			</div>
			<div className="col-2">
				<button
					type="button"
					className="btn btn-light btn-outline-secondary text-nowrap d-flex align-items-center"
				>
					<FaGlasses />
					Student View
				</button>
			</div>
			<hr />
		</div>
    <div>
    <CourseNavigation />

            <div className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{ left: "320px", top: "50px" }} >
            <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>

            </div>
        </div>
    </div>
);
}
export default Courses;