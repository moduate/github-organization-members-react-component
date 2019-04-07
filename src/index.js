import React, { Component } from 'react';
import gom from 'github-organization-members';
import Members from './Members';

class Organization extends Component {
  constructor(props) {
    super(props);
    this.state = {
      organization: "",
      error: "",
      members: []
     };
  }

  updateOrganization = event => {
    this.setState({ organization: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault();
    gom.getPublicUsersFromOrg(this.state.organization, (err, result) => {
      if(err) {
        this.setState({ error: "Invalid organization name. Please try again!", members: [] });
        return err;
      }
      this.setState({ members: result, error: "" });
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
        <div style={{ color: 'red' }}>{this.state.error}</div>
        <Members data={this.state.members}></Members>
      </div>
    )
  }
}

export default Organization;
