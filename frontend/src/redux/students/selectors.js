import { createSelector } from "reselect";

const studentsSelector = (state) => state.students;

export const getStudents = createSelector(
  [studentsSelector],
  (state) => state.list
);
