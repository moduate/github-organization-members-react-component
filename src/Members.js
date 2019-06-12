import React, { useState } from "react";

const Members = ({ data }) => {
  const [active, setActive] = useState("");

  return (
    <ul onMouseLeave={() => setActive("")}>
      {data &&
        data.map((member, index) => (
          <li
            key={index}
            style={{
              ...Styles.li,
              ...(active === index
                ? { background: "#DDEEFF", color: "black", opacity: 1 }
                : { background: "white", color: "grey", opacity: 0.95 })
            }}
            onMouseOver={() => setActive(index)}
          >
            <div style={{ gridColumn: 1 }}>
              <img src={member.avatar_url} style={Styles.img} alt="avatar" />
            </div>
            <div style={{ gridColumn: 2, marginLeft: "20px" }}>
              {member.login}
            </div>
          </li>
        ))}
    </ul>
  );
};

export default Members;

const Styles = {
  li: {
    borderBottom: "1px lightgrey solid",
    listStyleType: "none",
    display: "inline-block",
    padding: "10px 20px",
    display: "grid",
    gridTemplateColumns: "100px 400px",
    width: "500px"
  },
  img: {
    width: 100,
    height: 100,
    display: "inline"
  }
};
