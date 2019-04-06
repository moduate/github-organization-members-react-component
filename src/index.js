import React, { Component } from 'react';
import gom from 'github-organization-members';
import Members from './Members';

class Organization extends Component {
  constructor(props) {
    super(props);
    this.state = {
      organization: "",
      members: []
     };
  }

  updateOrganization = event => {
    this.setState({ organization: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault();
    gom.getPublicUsersFromOrg(this.state.organization, (err, result) => {
      if(err) { console.log(err) }
      this.setState({ members: result });
    })
  }

  render() {
    return (
      <div style={{padding: '20px 10px'}}>
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter Organization
            <input
              style={{ marginLeft: 5 }}
              type="text"
              value={this.state.organization}
              onChange={this.updateOrganization}
              >
            </input>
          </label>
          <button>Submit</button>
        </form>
        <Members data={this.state.members}></Members>
      </div>
    )
  }
}

export default Organization;
