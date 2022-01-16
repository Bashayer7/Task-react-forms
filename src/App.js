import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import HeaderAndTitle from "./Components/HeaderAndTitle";
import StudentsList from "./Components/StudentsList";

function App() {
  const [studentsInfo, setStudentsInfo] = useState([]);
  const [show, setShow] = useState(false);

  const addStudent = (newInfo) => {
    console.log(newInfo);
    setStudentsInfo([...studentsInfo, newInfo]);
  };
  const deleteStudent = (deleteStudent) => {
    console.log(deleteStudent);
    let l = studentsInfo.filter((student) => student.id != deleteStudent.id);
  };
  return (
    <div className="App">
      <HeaderAndTitle showList={setShow} show={show} />
      {show ? (
        <StudentsList list={studentsInfo} />
      ) : (
        <Form addStudent={addStudent} />
      )}
    </div>
  );
}

export default App;
