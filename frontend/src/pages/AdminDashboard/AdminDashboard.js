//Importing Libraries
import React, { useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

//Importing Component
import Navbar from "../../components/Navbar";
import Search from "../../components/Search";
import UserRow from "../../components/UserRow";

//Importing CSS
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [users, setUsers] = useState(null);
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
                class="button is-link is-alt is-medium is-rounded"
              >
                Create a Student
              </Link>
              <section
                class="hast-text-centerd"
                style={{
                  height: "15rem",
                }}
              >
                <Search />
              </section>
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
                {users ? (
                    users?.map((user) => {
                      return (
                        <tr>
                          <UserRow user={user} />
                        </tr>
                      );
                    })
                  ) : (
                    <ThreeDots color="#a8dadc" height={80} width={80} />
                  )}
                </tbody>
              </table>

              {/* Pagination */}
              <nav class="pagination is-rounded" role="navigation" aria-label="pagination">
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