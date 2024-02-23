import ModuleList from "../Modules/List";

import {
    FaArrowAltCircleRight,
    FaBell,
    FaBullhorn,
    FaBullseye,
    FaChartBar,
    FaCheckCircle,
    FaCode,
    FaDesktop,
    FaEllipsisV,
    FaFileCode,
    FaFileImport,
    FaPlus,
    FaStream,
    FaTasks,
    FaTimes,
} from "react-icons/fa";
import "./index.css";

function Home() {
    return (
        <div>
     <div className="d-flex justify-content-end">
				<button
					type="button"
					className="btn btn-light btn-outline-secondary btn-outline-secondary text-nowrap m-1"
				>
					Collapse All
				</button>
				<button
					type="button"
					className="btn btn-light btn-outline-secondary btn-outline-secondary text-nowrap m-1"
				>
					View Progress
				</button>
				<div className="dropdown m-1">
					<button
						className="btn btn-light btn-outline-secondary btn-outline-secondary dropdown-toggle d-flex align-items-center"
						type="button"
						id="dropdownMenuButton1"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						<FaCheckCircle className="text-success" />
						Publish All
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						<li>Action</li>
						<li>Another action</li>
					</ul>
				</div>
				<button type="button" className="btn btn-danger m-1 d-flex align-items-center">
					<FaPlus />
					Module
				</button>
				<button
					type="button"
					className="btn btn-light btn-outline-secondary btn-outline-secondary m-1"
				>
					<FaEllipsisV />
				</button>
			</div>
            <hr />
            <div className="row">
                <div className="col-9 col-md-12 col-lg-9">
                    <ModuleList />
                </div>
                <div className="col-3 d-none d-md-block">
                <div className="pt-3">
						<button
							type="button"
							className="btn btn-light btn-outline-secondary text-nowrap w-100 text-start mb-1"
						>
							<span className="pe-2">
								<FaFileImport />
							</span>
							Import Existing Content
						</button>
						<button
							type="button"
							className="btn btn-light btn-outline-secondary text-nowrap w-100 text-start mb-1"
						>
							<span className="pe-2">
								<FaArrowAltCircleRight />
							</span>
							Import from Commons
						</button>
						<button
							type="button"
							className="btn btn-light btn-outline-secondary text-nowrap w-100 text-start mb-1"
						>
							<span className="pe-2">
								<FaBullseye />
							</span>
							Choose Home Page
						</button>
						<button
							type="button"
							className="btn btn-light btn-outline-secondary text-nowrap w-100 text-start mb-1"
						>
							<span className="pe-2">
								<FaChartBar />
							</span>
							View Course Stream
						</button>
						<button
							type="button"
							className="btn btn-light btn-outline-secondary text-nowrap w-100 text-start mb-1"
						>
							<span className="pe-2">
								<FaBullhorn />
							</span>
							New Announcement
						</button>
						<button
							type="button"
							className="btn btn-light btn-outline-secondary text-nowrap w-100 text-start mb-1"
						>
							<span className="pe-2">
								<FaChartBar />
							</span>
							New Analytics
						</button>
						<button
							type="button"
							className="btn btn-light btn-outline-secondary text-nowrap w-100 text-start mb-1"
						>
							<span className="pe-2">
								<FaBell />
							</span>
							View Course Notifications
						</button>
					</div>
                    <div className="mt-3">
                        <p className="fw-bold">Assignments Due</p>
                        <hr />
                        <div className="d-flex justify-content-between">
                            <div>
                                <p className="course-item-title">Project 1: HTML & CSS</p>
                                <small className="text-muted">Due: Sep 25 at 11:59 PM</small>
                            </div>
                            <FaTimes className="text-secondary" />
                        </div>
                        <div className="d-flex justify-content-between">
                            <div>
                                <p className="course-item-title">JavaScript Quiz</p>
                                <small className="text-muted">Due: Oct 5 at 11:59 PM</small>
                            </div>
                            <FaTimes className="text-secondary" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;
