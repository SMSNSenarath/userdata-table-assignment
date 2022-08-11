import React from "react";

const CreateNote = () => {
  return (
    <>
      <div class="column is-one-third has-text-left">
        <h1 class="title is-1">Add a Note</h1>
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
            class="button is-link is-fullwidth has-text-weight-medium is-medium"
          >
            Create Note
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateNote;