import React, { Component } from 'react';

class Members extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {
          this.props.data.length?
            this.props.data.map( (member, index) =>
              <li
                key={index}
                style={Styles.li}
              >
                {member.url}
              </li>
            ) :
            null
        }
      </ul>
    )
  }
}

export default Members;

const Styles = {
  li: {
    border: '1px black solid',
    listStyleType: 'none',
    display: 'inline-block',
    padding: '10px 20px',
    width: '500px'
  }
}
