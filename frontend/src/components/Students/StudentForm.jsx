import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { addStudent } from "../../redux/students/operations";

const StudentForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState(""),
    [country, setCountry] = useState(""),
    [email, setEmail] = useState(""),
    [phone, setPhone] = useState(""),
    [course, setCourse] = useState(""),
    [status, setStatus] = useState(""),
    [image, setImage] = useState([]);

  const inputName = (event) => {
    setName(event.target.value);
  };

  const inputCountry = (event) => {
    setCountry(event.target.value);
  };
  const inputEmail = (event) => {
    setEmail(event.target.value);
  };
  const inputPhone = (event) => {
    setPhone(event.target.value);
  };
  const inputCourse = (event) => {
    setCourse(event.target.value);
  };
  const inputStatus = (event) => {
    setStatus(event.target.value);
  };


  const inputImage = (event) => {
    setImage(event.target.files[0]);
  };

  const addStudentButton = () => {
    dispatch(addStudent(name, country, email, phone, course, status, image));
    setName("");
    setImage([]);
    setCountry("");
    setEmail("");
    setPhone("");
    setCourse("");
    setStatus("");
  };

  return (
    <section class="post_form">
      <input type="text" name="name" placeholder="Name" onChange={inputName} required />
      <input type="text" name="country" placeholder="Country" onChange={inputCountry} required />
      <input type="text" name="email" placeholder="email" onChange={inputEmail} required />

      <input type="text" name="phone" placeholder="Phone" onChange={inputPhone} required />
      <input type="text" name="course" placeholder="Course" onChange={inputCourse} required />
      <input type="text" name="status" placeholder="Status" onChange={inputStatus} required />
     
     
      <input name="image" type="file" onChange={inputImage} />
      <input type="submit" value="Student" onClick={addStudentButton} />
    </section>

  );
};

export default StudentForm;
