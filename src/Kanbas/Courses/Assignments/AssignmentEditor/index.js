import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import "./index.css";
import { AiOutlinePlus, AiFillCheckCircle } from "react-icons/ai";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import { TfiPencilAlt } from "react-icons/tfi";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId
  );

  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  const handleCancel = () => {
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div className="mt-2">
      <div className="d-flex justify-content-end align-items-center mb-3">
        <span className="text-success me-2">Published</span>
        <AiFillCheckCircle color="green" className="me-1" />
        <HiOutlineEllipsisVertical />
      </div>

      <h6>Assignment Name</h6>
      <input value={assignment.title} className="form-control mb-2" />
      <hr />
      <div className="buttons-container">
        <Link
          to={`/Kanbas/Courses/${courseId}/Assignments`}
          className="btn btn-light me-2"
        >
          Cancel
        </Link>

        <button onClick={handleSave} className="btn btn-danger me-2">
          Save
        </button>
      </div>
    </div>
  );
}

export default AssignmentEditor;
