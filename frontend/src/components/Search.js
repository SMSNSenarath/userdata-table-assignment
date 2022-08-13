//Importing Libraries
import React, { useState } from "react";
import axios from "axios";

//Importing Components
import ViewProfile from "./ViewProfile";

const Search = () => {
  const [users, setUsers] = useState(null);

  const [queryFirstName, setQueryFirstName] = useState("");
  const [queryEmail, setQueryEmail] = useState("");
  const [queryUserId, setQueryUserId] = useState(0);

//Declaring onChange methods
  const onChangeFirstName = (e) => {
    e.preventDefault();
    setQueryFirstName(e.target.value);
  };

  const onChangeEmail = (e) => {
    e.preventDefault();
    setQueryEmail(e.target.value);
  };

  const onChangeUserId = (e) => {
    e.preventDefault();
    setQueryUserId(e.target.value);
  };

//Declaring search button methods
  const onSearchByFirstName = async () => {
    const res = await axios.post(
      "http://localhost:5000/api/user/search-by-name",
      { queryFirstName }
    );
    setUsers(res.data.user);
  };

  const onSearchByEmail = async () => {
    const res = await axios.post(
      "http://localhost:5000/api/user/search-by-email",
      { queryEmail }
    );
    setUsers(res.data.user);
  };

  const onSearchByUserId = async () => {
    console.log(typeof queryUserId);
    const res = await axios.post(
      "http://localhost:5000/api/user/search-by-userId",
      { queryUserId }
    );
    setUsers(res.data.user);
  };

  const [isModal, setIsModal] = useState(false);
  const handleRowClick = () => {
    setIsModal(!isModal);
    console.log(isModal);
  };

  const onClearUsers = () => {
    setUsers(null);
  };

  const active = isModal ? "is-active" : "";

  return (
    <>
      <div class="columns">
        <div class="column has-text-centered">
          <div class="field has-addons mt-5">
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="Search By Name"
                onChange={onChangeFirstName}
              />
            </div>
            {/* Search by First Name */}
            <div class="control">
              <a class="button is-info is-rounded" onClick={onSearchByFirstName} style={{backgroundColor: "#2B2D42"}}>
                Search
              </a>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="field has-addons mt-5">
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="Search By Id"
                onChange={onChangeUserId}
              />
            </div>
            {/* Search by User ID */}
            <div class="control">
              <a class="button is-info is-rounded" onClick={onSearchByUserId} style={{backgroundColor: "#2B2D42"}}>
                Search
              </a>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="field has-addons mt-5">
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="Search By Email"
                onChange={onChangeEmail}
              />
            </div>
            {/* Search by Email */}
            <div class="control">
              <a class="button is-info is-rounded" onClick={onSearchByEmail} style={{backgroundColor: "#2B2D42"}}>
                Search
              </a>
            </div>
          </div>
        </div>
        <div class="column has-text-centered">
          <div class="field has-addons mt-5">
            <div class="control">
              <button class="button  is-fullwidth is-rounded" onClick={onClearUsers} style={{backgroundColor: "#EF233C", color:"#ffffff"}}>
                Clear Users
              </button>
            </div>
          </div>
        </div>
      </div>

      {users
        ? users.map((user) => (
            <>
              <ul>
                <li
                  className="button is-light is-link is-normal is-shadow mb-1"
                  onClick={handleRowClick}
                >
                  {user.firstName} {user.lastName}
                </li>
              </ul>

              <ViewProfile active={active} handleRowClick user={user} />
            </>
          ))
        : ""}
    </>
  );
};

export default Search;