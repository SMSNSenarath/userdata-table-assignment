import React, { useState } from "react";

const ViewProfile = ({ active, handleRowClick }) => {
  const cancelClick = () => {
    active = false;
    console.log("View Profile" + active);
  };
  return (
    <>
      <div className={`modal ${active}`}>
        <div className="modal-background" />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Shakila Nishadini</p>
            <button
              onClick={handleRowClick}
              className="delete"
              aria-label="close"
            />
          </header>
          <section className="modal-card-body">
            <h1 class="title is-1">Edit a Note</h1>
            <div class="field">
              <label class="label">Title</label>
              <div class="control">
                <input class="input is-medium" type="text" />
              </div>
            </div>
            <div class="field">
              <label class="label">Description</label>
              <div class="control">
                <textarea class="textarea is-medium"></textarea>
              </div>
            </div>
            <div class="control">
              <button
                type="submit"
                class="button is-link is-fullwidth has-text-weight-medium is-medium mb-3"
              >
                Create Note
              </button>
              <button
                type="submit"
                class="button is-link is-fullwidth has-text-weight-medium is-medium"
                onClick={cancelClick}
              >
                Cancel
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ViewProfile;