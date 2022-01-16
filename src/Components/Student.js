import React from "react";

function Student(props) {
  const student = props.student;
  return (
    <div className="student">
      <p>{student.name}</p>
      <p>{student.lastName}</p>
      <ul>
        <li>phone number :{student.phoneNumber}</li>
        <li>power: {student.power}</li>
      </ul>
      <p> className="delete" onclick={()=>eleteStudent{student}}</p>
      {/* <input type="button" id="delete" value="Delete" onClick={deleteStudent} /> */}
    </div>
  );
}

export default Student;
