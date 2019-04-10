import React, { Component } from 'react';

class Members extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: ''
    };
  }

  render() {
    return (
      <ul>
        {
          this.props.data.length?
            this.props.data.map( (member, index) =>
              <li
                key={index}
                style={{
                  ...Styles.li,
                  ...this.state.active === index ?
                    { background: '#DDEEFF  ', color : 'black', opacity: 1 } :
                    { background: 'white', color : 'grey', opacity: 0.95 },
                }}
                onMouseOver={() => this.setState({ active: index })}
              >
                <div style={{gridColumn: 1}}>
                  <img
                    src={member.avatar_url}
                    style={Styles.img}
                    alt="avatar"
                  />
                </div>
                <div style={{gridColumn: 2, marginLeft: '20px'}}>
                  {member.login}
                </div>
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
    borderBottom: '1px lightgrey solid',
    listStyleType: 'none',
    display: 'inline-block',
    padding: '10px 20px',
    display: 'grid',
    gridTemplateColumns: '100px 400px',
    width: '500px'
  },
  img: {
    width: 100,
    height: 100,
    display: 'inline'
  }
}
