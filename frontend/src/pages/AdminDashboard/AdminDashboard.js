import React, { useState } from "react";
import ViewProfile from "../../components/ViewProfile"
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [isModal, setIsModal] = useState(false);

  const handleRowClick = () => {
    setIsModal(!isModal);
    console.log(isModal);
  };

  const active = isModal ? "is-active" : "";

  return (
    <>
    <Navbar/>
      <section class="container mt-3">
        <div clas="rows">
          <div class="columns">
            <div class="column">
              <Link to ="/create-student" class="button is-primary is-alt is-medium">
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
                    {/* <th>
                      <abbr title="Played">Last Name</abbr>
                    </th> */}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <td>
                      <a
                        href="https://en.wikipedia.org/wiki/Leicester_City_F.C."
                        title="Leicester City F.C."
                      >
                        Shakila
                      </a>{" "}
                    </td>
                    <td>Nishadini</td>
                    <td>smsnsenarath@gmail.com</td>
                    <td>1997-02-08</td>
                    <td>0776209217</td>
                    <td>True</td>
                    <td>Student</td>
                    <td>
                      <button
                        class="button is-light is-link is-small"
                        onClick={handleRowClick}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th>2</th>
                    <td>
                      <a
                        href="https://en.wikipedia.org/wiki/Leicester_City_F.C."
                        title="Leicester City F.C."
                      >
                        Shakila
                      </a>{" "}
                    </td>
                    <td>Nishadini</td>
                    <td>smsnsenarath@gmail.com</td>
                    <td>1997-02-08</td>
                    <td>0776209217</td>
                    <td>True</td>
                    <td>Student</td>
                    <td>
                      <button class="button is-light is-link is-small">
                        View
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th>3</th>
                    <td>
                      <a
                        href="https://en.wikipedia.org/wiki/Leicester_City_F.C."
                        title="Leicester City F.C."
                      >
                        Shakila
                      </a>{" "}
                    </td>
                    <td>Nishadini</td>
                    <td>smsnsenarath@gmail.com</td>
                    <td>1997-02-08</td>
                    <td>0776209217</td>
                    <td>True</td>
                    <td>Student</td>
                    <td>
                      <button class="button is-light is-link is-small">
                        View
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th>4</th>
                    <td>
                      <a
                        href="https://en.wikipedia.org/wiki/Leicester_City_F.C."
                        title="Leicester City F.C."
                      >
                        Shakila
                      </a>{" "}
                    </td>
                    <td>Nishadini</td>
                    <td>smsnsenarath@gmail.com</td>
                    <td>1997-02-08</td>
                    <td>0776209217</td>
                    <td>True</td>
                    <td>Student</td>
                    <td>
                      <button class="button is-light is-link is-small">
                        View
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th>5</th>
                    <td>
                      <a
                        href="https://en.wikipedia.org/wiki/Leicester_City_F.C."
                        title="Leicester City F.C."
                      >
                        Shakila
                      </a>{" "}
                    </td>
                    <td>Nishadini</td>
                    <td>smsnsenarath@gmail.com</td>
                    <td>1997-02-08</td>
                    <td>0776209217</td>
                    <td>True</td>
                    <td>Student</td>
                    <td>
                      <button class="button is-light is-link is-small">
                        View
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* Pagination */}
              <nav class="pagination" role="navigation" aria-label="pagination">
                <a class="pagination-previous">Previous</a>
                <a class="pagination-next">Next page</a>
                <ul class="pagination-list">
                  <li>
                    <a class="pagination-link" aria-label="Goto page 1">
                      1
                    </a>
                  </li>
                  <li>
                    <span class="pagination-ellipsis">&hellip;</span>
                  </li>
                  <li>
                    <a class="pagination-link" aria-label="Goto page 45">
                      45
                    </a>
                  </li>
                  <li>
                    <a
                      class="pagination-link is-current"
                      aria-label="Page 46"
                      aria-current="page"
                    >
                      46
                    </a>
                  </li>
                  <li>
                    <a class="pagination-link" aria-label="Goto page 47">
                      47
                    </a>
                  </li>
                  <li>
                    <span class="pagination-ellipsis">&hellip;</span>
                  </li>
                  <li>
                    <a class="pagination-link" aria-label="Goto page 86">
                      86
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        {/* Modal */}
        <ViewProfile active={active} handleRowClick />
      </section>
    </>
  );
};

export default AdminDashboard;