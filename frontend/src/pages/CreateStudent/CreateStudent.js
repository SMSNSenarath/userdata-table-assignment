//Importing Libraries
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import axios from "axios";

//Importing Components
import Navbar from "../../components/Navbar";

//Importing CSS
import "react-datepicker/dist/react-datepicker.css";

const CreateStudent = () => {
  const [studentId, setStudentId] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [mobile, setMobile] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(false);

  const onChangeStudentId = (e) => {
    setStudentId(e.target.value);
  };

  const onChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const onChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  const onChangeMobile = (e) => {
    setMobile(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangeStatus = (e) => {
    if (e.target.value === "true") {
      setStatus(true);
    }
    if (e.target.value === "false") {
      setStatus(false);
    }
    console.log(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const studentDetails = {
      userId: studentId,
      firstName: firstName,
      lastName: lastName,
      dateOfBirth: dateOfBirth,
      mobile: mobile,
      email: email,
      password: password,
      status: status,
      accountType: "student",
    };
    try{
        const response = await axios.post("http://localhost:5000/api/user/register", studentDetails);
        console.log(response);
        alert("Student added successfully!");
       
    }catch(err){
      alert(err);
    }
  };

  return (
    <>
      <Navbar />
      <div class="container">
        <div class="column is-half is-offset-one-quarter">
          <form>
          <div class="row is-vcentered">
            <h1 class="title is-1" style={{color: "#2B2D42"}}>Add a Student</h1>

            <div class="field">
              <label class="label">Student Id</label>
              <div class="control">
                <input
                  class="input is-medium"
                  type="text"
                  onChange={onChangeStudentId}
                />
              </div>
            </div>
            <div class="field">
              <label class="label">First Name</label>
              <div class="control">
                <input
                  class="input is-medium"
                  type="text"
                  onChange={onChangeFirstName}
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Last Name</label>
              <div class="control">
                <input
                  class="input is-medium"
                  type="text"
                  onChange={onChangeLastName}
                />
              </div>
            </div>
            <div>
              <label class="label">Date of Birth</label>
              <div class="control">
                <DatePicker
                  selected={dateOfBirth}
                  onChange={(dateOfBirth) => setDateOfBirth(dateOfBirth)}
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Mobile</label>
              <div class="control">
                <input
                  class="input is-medium"
                  type="tel"
                  onChange={onChangeMobile}
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input
                  class="input is-medium"
                  type=""
                  onChange={onChangeEmail}
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input
                  class="input is-medium"
                  type="password"
                  onChange={onChangePassword}
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Status</label>
              <div class="control">
                <div class="control">
                  <label class="radio">
                    <input
                      type="radio"
                      name="status"
                      value="true"
                      onChange={onChangeStatus}
                    />
                    True
                  </label>
                  <label class="radio">
                    <input
                      type="radio"
                      name="status"
                      value="false"
                      onChange={onChangeStatus}
                    />
                    False
                  </label>
                </div>
              </div>
            </div>
            <div class="control">
             
              <div class ="columns">
                <div class ="column is-4">
                <button
                type="submit"
                class="button is-link has-text-weight-medium is-medium is-rounded"
                onClick={handleSubmit}
                style={{backgroundColor: "#EF233C"}}
              >
                Create Student
              </button>
              </div>
              {/* Reset Button */}
              <div class="column is-8">
              <input class="button is-outlined has-text-weight-medium is-medium is-rounded" type ="reset" style={{borderColor: "#EF233C", color:"#EF233C"}}/>
              </div>
              </div>
            </div>
          </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateStudent;