import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  assignments: [],
  assignment: {
    title: "New Assignment",
    description: "New Description",
    points: 100,
    dueDate: "2024-11-10",
    availableFromDate: "2024-11-03",
    availableUntilDate: "2024-11-14",
  },
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, action) => {
      state.assignments = [
        {
          ...action.payload,
          _id: new Date().getTime().toString(),
        },
        ...state.assignments,
      ];
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload
      );
    },
    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((a) => {
        return a._id === action.payload._id ? action.payload : a;
      });
    },
    selectAssignment: (state, action) => {
      state.assignment = action.payload;
    },
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },
  },
});

export const {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  selectAssignment,
  setAssignments,
} = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
