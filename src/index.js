import React, { useState } from "react";
import gom from "github-organization-members";
import Members from "./Members";

const Organization = () => {
  const [organization, setOrganization] = useState("");
  const [members, setMembers] = useState([]);

  const updateOrganization = event => {
    setOrganization(e.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    gom.getPublicUsersFromOrg(organization, (err, result) => {
      if (err) {
        console.log(err);
      }
      setMembers(members);
    });
  };

  return (
    <div style={{ padding: "20px 10px" }}>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Organization
          <input
            style={{ marginLeft: 5 }}
            type="text"
            value={organization}
            onChange={updateOrganization}
          />
        </label>
        <button>Submit</button>
      </form>
      <Members data={members} />
    </div>
  );
};

export default Organization;
