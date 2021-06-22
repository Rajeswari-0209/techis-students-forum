import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../assets/img/loading.gif";
import StudentForm from "../components/Students/StudentForm";
import Student from "../components/Students/Student";
import { fetchStudents } from "../redux/students/operations";
import { getStudents } from "../redux/students/selectors";

const Home = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const students = getStudents(selector);

  useEffect(() => {
    dispatch(fetchStudents());
  }, []);

  return (
    <section class="content">
      <StudentForm />
      <section class="posts">
        {students.length > 0 ? (
          <ul>
            {students.map((student) => (
              <Student key={student.id}  student={student} />
            ))}
          </ul>
        ) : (
          <div class="loading">
            <img src={Loading} class="" />
          </div>
        )}
      </section>
    </section>
  );
};

export default Home;
