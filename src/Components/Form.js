import React from "react";
import SideInfo from "./SideInfo";
import Student from "./Student";

function Form(addStudent) {
  //   let f = { name: "", lastName: "", phoneNumber: "", emailAddress: "" };
  const hundleChange = (e) => {
    setStudent({ ...Student, [e.target.name]: e.target.value });
  };
  const hundleSumbit = (e) => {
    e.preventDefault();
    addStudent(Student);
  };

  return (
    <div className="form-page">
      <form className="student">
        <input
          name="name"
          placeholder="enter your name"
          onChange={hundleChange}
        />
        <input
          name="lastName"
          placeholder="enter your last name"
          onChange={hundleChange}
        />
        <input
          name="phoneNumber"
          placeholder="enter your phone number"
          onChange={hundleChange}
        />
        <input
          name="emailAddress"
          placeholder="enter your email"
          onChange={hundleChange}
        />
        <button type="submit">Submit</button>
      </form>

      <SideInfo />
    </div>
  );
}

export default Form;
