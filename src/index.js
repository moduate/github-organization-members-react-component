import React, { Component } from 'react';
import gom from 'github-organization-members';

class Member extends Component {
  constructor(props) {
    super(props);
    this.state = { organization: "" };
  }

  updateOrganization = event => {
    this.setState({ organization: event.target.value })
  }

  render() {
    return (
      <div style={{padding: '20px 10px'}}>
        <label>
          Enter Organization
          <input
            style={{ marginLeft: 5 }}
            value={this.state.organization}
            onChange={this.updateOrganization}
          >
          </input>
        </label>
      </div>
    )
  }
}

export default Member;
