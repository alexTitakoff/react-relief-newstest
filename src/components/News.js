import React, { Component } from 'react'

import EventItem from './EventItem.js'

class News extends Component {

  render() {

    let newsItems
    if(this.props.news){
      newsItems = this.props.news.map(event => {
          return ( <EventItem key={event.id} event={event}
            />)
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
