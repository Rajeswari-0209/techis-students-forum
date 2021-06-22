import API from "../../API";
import {
  fetchStudentsAction,
  addStudentAction,
  deleteStudentAction,
} from "./actions";

const api = new API();

export const fetchStudents = () => {
  return async (dispatch) => {
    return api
      .getStudents()
      .then((students) => {
        dispatch(fetchStudentsAction(students));
      })
      .catch((error) => {
        alert("Failed to connect API: /students/");
      });
  };
};

export const deleteStudent = (id) => {
  return async (dispatch, getState) => {
    return api
      .deleteStudent(id)
      .then((response) => {
        const prevStudents = getState().students.list;
        const nextStudents = prevStudents.filter(
          (student) => student.id !== id
        );
        dispatch(deleteStudentAction(nextStudents));
      })
      .catch((error) => {
        alert("Failed to connect API to delete a student");
        console.log(error);
      });
  };
};

export const addStudent = (
  name,
  country,
  email,
  phone,
  course,
  status,
  image
) => {
  return async (dispatch, getState) => {
    // Validation
    // if (name === "" || email === "" || phone === "") {
    //   alert("Please fill out name ,email,phone number.");
    //   return false;
    // }

    return api
      .addStudent(name, country, email, phone, course, status, image)
      .then((post) => {
        const prevStudents = getState().students.list;
        const nextStudents = [post, ...prevStudents];
        dispatch(addStudentAction(nextStudents));
      })
      .catch((error) => {
        alert("Failed to connect API to add a student");
        console.log(error);
      });
  };
};
