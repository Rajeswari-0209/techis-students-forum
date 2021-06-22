export const ADD_STUDENT = "ADD_STUDENT";
export const addStudentAction = (students) => {
  return {
    type: "ADD_STUDENT",
    payload: students,
  };
};
export const FETCH_STUDENT = "FETCH_STUDENT";
export const fetchStudentsAction = (students) => {
  return {
    type: "FETCH_STUDENT",
    payload: students,
  };
};
export const DELETE_STUDENT = "DELETE_STUDENT";
export const deleteStudentAction = (students) => {
  return {
    type: "DELETE_STUDENT",
    payload: students,
  };
};
