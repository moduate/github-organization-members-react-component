import React from "react";

const Members = ({ data }) => (
  <ul>
    {data && data.map((member, index) => <li key={index}>{member.url}</li>)}
  </ul>
);

export default Members;
