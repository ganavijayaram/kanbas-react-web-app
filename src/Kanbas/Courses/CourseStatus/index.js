import "./index.css";
import { FiCalendar } from "react-icons/fi";

function CourseStatus() {
  return (
    <div class="wd-flex-course-status">
      Course Status
      <div class="wd-course-status-buttons">
        <button class="btn wd-bg-lightgray">Unpublish</button>
        <button class="btn btn-success">Published</button>
      </div>
      <br />
      <div>
        <button class="btn wd-bg-lightgray mt-2">
          Import Existing Content
        </button>
        <br />
        <button class="btn wd-bg-lightgray mt-2">Import from Commons</button>
        <br />
        <button class="btn wd-bg-lightgray mt-2">Choose Home Page</button>
        <br />
        <button class="btn wd-bg-lightgray mt-2">View Course Stream</button>
        <br />
        <button class="btn wd-bg-lightgray mt-2">New Announcement</button>
        <br />
        <button class="btn wd-bg-lightgray mt-2">New Analytics</button>
        <br />
        <button class="btn wd-bg-lightgray mt-2">
          View Course Notifications
        </button>
        <br />
      </div>
      <div class="col-8">
        Coming Up
        <span class="wd-check-ellipse-button-float-end float-end">
          <FiCalendar color="red" />
          View Calendar
        </span>
        <ul>
          <li>
            <a class="course-link" href="#">
              Grade CS5610.11111.111111 Sep 11 at 11:45am
            </a>
          </li>
          <li>
            <a class="course-link" href="#">
              Grade CS5610.22222.222222 Sep 12 att 11:05am
            </a>
          </li>
          <li>
            <a class="course-link" href="#">
              Grade CS5610.33333.333333 Sep 21 att 21:45pm
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CourseStatus;
