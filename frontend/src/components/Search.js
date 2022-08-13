import React, { useState } from "react";
import axios from "axios";

import ViewProfile from "./ViewProfile";

const Search = () => {
  const [users, setUsers] = useState(null);

  const [queryFirstName, setQueryFirstName] = useState("");
  const [queryEmail, setQueryEmail] = useState("");
  const [queryUserId, setQueryUserId] = useState(0);

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
            <div class="control">
              <a class="button is-info" onClick={onSearchByFirstName}>
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
            <div class="control">
              <a class="button is-info" onClick={onSearchByUserId}>
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
            <div class="control">
              <a class="button is-info" onClick={onSearchByEmail}>
                Search
              </a>
            </div>
          </div>
        </div>
        <div class="column has-text-centered">
          <div class="field has-addons mt-5">
            <div class="control">
              <a class="button is-danger is-fullwidth" onClick={onClearUsers}>
                Clear Users
              </a>
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