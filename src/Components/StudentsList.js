import React from "react";
import Student from "./Student";

function StudentsList(deleteStudent, list) {
  const list1 = list.map((student) => <Student student={student} />);
  return <div>{list}</div>;
}

export default StudentsList;
