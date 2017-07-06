import React, { Component } from 'react'

class EventItem extends Component {

  render() {
  console.log(this.props.imgpath);
    return (

        <div className="col-sm-12 col-md-12">
          <div className="thumbnail">
            <img src={this.props.imgpath} alt="..." />
            <div className="caption">
              <h3>Thumbnail label</h3>
              <p>some descr</p>
              <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
            </div>
          </div>
        </div>

    );
  }
}

export default EventItem;
