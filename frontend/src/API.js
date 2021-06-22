import axios from "axios";

var baseURL;
if (
  process.env.REACT_APP_ENVIRONMENT &&
  process.env.REACT_APP_ENVIRONMENT === "PRODUCTION"
) {
  baseURL = process.env.REACT_APP_API_BASE_URL;
} else {
  baseURL = "http://127.0.0.1:8000";
}

const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default class API {
  getStudents = async () => {
    const students = await api
      .get("/students/")
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return students;
  };
  addStudent = async (name, country, email, phone, course, status, image) => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("country", country);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("course", course);
    formData.append("status", status);
    formData.append("image", image);
    const savedStudent = await axios
      .post(baseURL + "/students/add/", formData)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return savedStudent;
  };
  deleteStudent = async (id) => {
    const response = await api
      .delete("/students/delete/" + id + "/")
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return response;
  };
}
