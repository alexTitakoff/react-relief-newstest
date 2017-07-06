import React, { Component } from 'react'

class EventItem extends Component {

  render() {
    return (
      <li className="project list-group-item" >
         <b>{this.props.event}</b>
      </li>

    );
  }
}

export default EventItem;
