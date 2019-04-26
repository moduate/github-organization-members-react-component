import React, { useState } from 'react';
import { getPublicUsersFromOrg } from 'github-organization-members';
import Members from './Members';

function Organization(props) {
  const [organization, setOrganization] = useState("");
  const [error, setError] = useState("");
  const [members, setMembers] = useState([]);


  const updateOrganization = event => {
    setOrganization(event.target.value )
  }

  const handleSubmit = event => {
    event.preventDefault();
    getPublicUsersFromOrg(organization, (err, result) => {
      if(err) {
        setError("Invalid organization name. Please try again!");
        setMembers([]);
        return err;
      }
      setError("");
      setMembers(result);
    })
  }
  return (
    <div style={{padding: '20px 10px'}}>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Organization
          <input
            style={{ marginLeft: 5 }}
            type="text"
            value={organization}
            onChange={updateOrganization}
            >
          </input>
        </label>
        <button>Submit</button>
      </form>
      <div style={{ color: 'red' }}>{error}</div>
      <Members data={members}></Members>
    </div>
  )
}

export default Organization;
