import React, { Component } from 'react'

import EventItem from './EventItem.js'

class News extends Component {

  render() {
  console.log(this.props.news);
    let newsItems
    if(this.props.news){
      newsItems = this.props.news.map(event => {
          return ( <EventItem key={event.ID} imgpath={event.PREVIEW_PATH} date = {event.DATE} name={event.NAME} />)
      })
    }

    return (
      <div className="Projects list-group ">
        {newsItems}
      </div>
    );
  }
}

export default News;
