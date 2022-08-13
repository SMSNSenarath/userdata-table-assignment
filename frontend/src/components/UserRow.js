//Importing Libraries
import React, { useState } from "react";

//Importing Components
import ViewProfile from "../components/ViewProfile";

const UserRow = ({ user }) => {
  const [isModal, setIsModal] = useState(false);
  const handleRowClick = () => {
    setIsModal(!isModal);
    console.log(isModal);
  };

  const active = isModal ? "is-active" : "";

  const activeStatus = <span class="tag is-success is-rounded">Active</span>;
  const inactiveStatus = <span class="tag is-danger is-rounded">Inactive</span>;

  return (
    <>
      <th>{user.userId}</th>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.email}</td>
      <td>{user.dateOfBirth.toString().slice(0, 10)}</td>
      <td>+{user.mobile}</td>
      <td>{user.status ? activeStatus : inactiveStatus}</td>
      <td>{user.accountType}</td>
      <td>
        <button
          class="button is-light is-link is-small is-rounded"
          onClick={handleRowClick}
          style={{color:"#2B2D42"}}
        >
          View
        </button>
      </td>

      {/* Modal */}
      <ViewProfile active={active} handleRowClick user={user} />
    </>
  );
};

export default UserRow;