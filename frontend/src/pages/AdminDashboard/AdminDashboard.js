import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import "./AdminDashboard.css";
import UserRow from "../../components/UserRow";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    const getUsers = async () => {
      const res = await axios.get(
        `http://localhost:5000/api/user/view-all?page=${pageNumber}`
      );
      setUsers(res.data.users);
      setTotalPages(res.data?.totalPages);
    };
    getUsers();
  }, [pageNumber]);
  console.log(totalPages);

  const pages = new Array(totalPages).fill(null).map((v, i) => i);

  const goPrevious = () => {
    setPageNumber(Math.max(0, pageNumber - 1));
  };

  const goNext = () => {
    setPageNumber(Math.min(totalPages - 1, pageNumber + 1));
  };

  return (
    <>
      <Navbar />
      <section class="container mt-3">
        <div clas="rows">
          <div class="columns">
            <div class="column">
              <Link
                to="/create-student"
                class="button is-primary is-alt is-medium"
              >
                Create a New User
              </Link>
              <div class="row ">
                <div class="column is-centered">
                  <div class="field has-addons mt-5">
                    <div class="control">
                      <input
                        class="input"
                        type="text"
                        placeholder="Search By Name"
                      />
                    </div>
                    <div class="control">
                      <a class="button is-info">Search</a>
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
                      />
                    </div>
                    <div class="control">
                      <a class="button is-info">Search</a>
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
                      />
                    </div>
                    <div class="control">
                      <a class="button is-info">Search</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* User data table */}
        <div clas="rows">
          <div class="column">
            <div class="box content">
              <table class="table">
                <thead>
                  <tr>
                    <th>
                      <abbr title="Position">User ID</abbr>
                    </th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Date of Birth</th>
                    <th>Mobile</th>
                    <th>Status</th>
                    <th>Account Type</th>
                    <th>Click to View User</th>
                  </tr>
                </thead>
                <tbody>
                  {users?.map((user) => {
                    return (
                      <tr>
                        <UserRow user={user} />
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              {/* Pagination */}
              <nav class="pagination" role="navigation" aria-label="pagination">
                <a class="pagination-previous" onClick={goPrevious}>
                  Previous
                </a>
                <a class="pagination-next" onClick={goNext}>
                  Next page
                </a>
                
                  <ul class="pagination-list">
                  {pages.map((pageIndex) => (
                    <li>
                      <a
                        class=""
                        className={`${
                          pageNumber == pageIndex
                            ? "pagination-link is-current"
                            : "pagination-link"
                        }`}
                        onClick={() => setPageNumber(pageIndex)}>{pageIndex + 1}
                      </a>
                    </li>
                  ))}
                  </ul>
                
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminDashboard;