import React, { Component } from 'react';

class Members extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.data)
    return (
      <ul>
        {
          this.props.data.length?
            this.props.data.map( (member, index) =>
              <li
                key={index}
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
