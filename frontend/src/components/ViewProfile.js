//Importing Libraries
import React from "react";

//Importing CSS
import "./ViewProfile.css";

const ViewProfile = ({ active, handleRowClick, user }) => {
  const cancelClick = () => {
    window.location.reload();
  };
  return (
    <>
      <div className={`modal ${active}`}>
        <div className="modal-background" />
        <div
          className="modal-card"
          style={{ width: "1390px", height: "700px" }}
        >
          <section className="modal-card-body">
            <section class="container">
              <div class="columns is-multiline">
                <div class="column is-8 is-offset-2 register">
                  <div class="columns">
                    <div class="column left">
                      <h1 class="title is-1">
                        {user.firstName}
                        <br />
                        {user.lastName}
                      </h1>
                      <h2 class="subtitle colored is-4">
                        {user.accountType.charAt(0).toUpperCase() +
                          user.accountType.slice(1)}{" "}
                        -{" "}
                        <span
                          class={`tag ${
                            user.status ? "is-success" : "is-danger"
                          }`}
                        >
                          {user.status ? "Active" : "Inactive"}
                        </span>
                      </h2>
                      <p>
                        Born on - {user.dateOfBirth.toString().slice(0, 10)}{" "}
                        <br /> <br />
                        To Contact -{" "}
                        <span class="tag is-primary is-medium" style={{backgroundColor: "#2B2D42"}}>
                          {user.mobile}
                        </span>
                      </p>
                    </div>
                    <div class="column right has-text-centered">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/800px-User-avatar.svg.png"
                        width={200}
                        alt="userImage"
                        style={{ marginTop: "-20px" }}
                      />
                      <h1 class="title is-4">{user.email}</h1>
                      <p class="description">
                        Find {user.firstName} from this email address
                      </p>
                      {/* Back button */}
                      <form>
                        <button
                          class="button is-block is-primary is-fullwidth is-medium is-rounded"
                          onClick={cancelClick}
                          style={{backgroundColor: "#EF233C"}}
                        >
                          Back
                        </button>
                        <br />
                      </form>
                    </div>
                  </div>
                </div>
                <div class="column is-6 is-offset-2">
                  <br />
                </div>
              </div>
            </section>
          </section>
        </div>
      </div>
    </>
  );
};

export default ViewProfile;