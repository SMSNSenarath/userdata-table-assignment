import React, { useState } from "react";
import Navbar from '../components/Navbar'
import DatePicker from "react-datepicker"

import "react-datepicker/dist/react-datepicker.css"

const CreateStudent = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
    <>
    <Navbar/>
    <div class ="container">
    <div class="column is-half is-offset-one-quarter">
        <div class="row is-vcentered">
        <h1 class="title is-1">Add a Student</h1>
        
        <div class="field">
          <label class="label">Student Id</label>
          <div class="control">
            <input class="input is-medium" type="text" />
          </div>
        </div>
        <div class="field">
          <label class="label">First Name</label>
          <div class="control">
            <input class="input is-medium" type="text" />
          </div>
        </div>
        <div class="field">
          <label class="label">Last Name</label>
          <div class="control">
            <input class="input is-medium" type="text" />
          </div>
        </div>
        <div>
          <label class="label">Date of Birth</label>
          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        </div>
        <div class="field">
          <label class="label">Mobile</label>
          <div class="control">
            <input class="input is-medium" type="text" />
          </div>
        </div>
        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input class="input is-medium" type="text" />
          </div>
        </div>
        <div class="field">
          <label class="label">Password</label>
          <div class="control">
            <input class="input is-medium" type="text" />
          </div>
        </div>
        <div class="field">
          <label class="label">Status</label>
          <div class="control">
          <div class="control">
  <label class="radio">
    <input type="radio" name="foobar"/>
    True
  </label>
  <label class="radio">
    <input type="radio" name="foobar" checked/>
    False
  </label>
</div>
          </div>
        </div>
        <div class="control">
          <button
            type="submit"
            class="button is-link has-text-weight-medium is-medium"
          >
            Create Student
          </button>
        </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default CreateStudent