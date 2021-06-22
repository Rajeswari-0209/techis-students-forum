import React from "react";
import IconUser from "../../assets/img/user-icon.jpg";
import IconSmallMenu from "../../assets/img/icon-small-menu.svg";
import { deleteStudent } from "../../redux/students/operations";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Student = ({ student }) => {
  const dispatch = useDispatch();
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <li>
      <img class="menu_icon" onClick={() => setMenuToggle(!menuToggle)} src={IconSmallMenu} />
      {menuToggle && (
        <div class="menu">
          <span onClick={() => dispatch(deleteStudent(student.id))}>Delete</span>
        </div>
      )}
      <div class="logo">
        <img src={IconUser} />
      </div>
      <div class="name_body">
        <div class="name">{student.name}</div>
        <div class="datetime">{student.created_at}</div>
        <p>{student.country}</p>
        <p>{student.email}</p>
        <p>{student.phone}</p>
        <p>{student.course}</p>
        <p>{student.status}</p>

        
        {student.image && (
          <a href={student.image} target="_blank">
            <img class="post-image" src={student.image} />
          </a>
        )}
      </div>
    </li>
  );
};

export default Student;
