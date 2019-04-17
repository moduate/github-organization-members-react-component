import React, { useState } from "react";
import gom from "github-organization-members";
import Members from "./Members";

const Organization = () => {
  const [organization, setOrganization] = useState("");
  const [errors, setErrors] = useState("");
  const [members, setMembers] = useState([]);

  const updateOrganization = event => {
    setOrganization(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    gom.getPublicUsersFromOrg(organization, (err, result) => {
      if (err) {
        setOrganization([]);
        setErrors("Invalid organization name. Please try again!");
        return err;
      }
      setMembers(result);
      setErrors("");
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
      <div style={{ color: "red" }}>{error}</div>
      <Members data={members} />
    </div>
  );
};

export default Organization;
