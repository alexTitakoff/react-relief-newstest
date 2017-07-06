import React, { Component } from 'react'

class EventItem extends Component {




  render() {

    return (
        <div className="col-sm-12 col-md-12">
          <div className="thumbnail">
            <img src={this.props.imgpath} alt="..." />
            <div className="caption">
              <h3>{this.props.name}</h3>
              <p>some descr</p>
              <p>{this.props.date}</p>
              <p><a href="#" className="btn btn-primary" role="button">See Event</a>
              </p>
            </div>
          </div>
        </div>

    );
  }
}

export default EventItem;
