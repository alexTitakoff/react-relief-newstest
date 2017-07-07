import React, { Component } from 'react'

import EventItem from './EventItem.js'

class Paginator extends Component {


  componentWillMount() {
    this.paginator(this.props.news, 2)
  }

  paginator(arr, num) {
    console.log(arr.length)


    function isInt(n) {
        if(n % 1 === 0) {
          return true
        } else {
          return false
        }
    }


    let pageAr = []

    let chunkLength
    if(isInt(arr.length/num)) {
       chunkLength = arr.length/num
    } else {
      chunkLength = parseInt(arr.length/num) + 1

    }

    for(let i=0; i < chunkLength; i++) {
      pageAr.push(arr.slice(0,2))
    }

    // this.setState({
    //   pagesArr: pageAr
    // })

    //стейтим состояние в app.js
    this.props.setStatePagintor(pageAr)
    console.log(pageAr);
    return  pageAr[0]
  }



  render() {

    // let newsItems
    // if(this.props.news){
    //   newsItems = this.props.news.map(event => {
    //       return ( <EventItem key={event.ID} imgpath={event.PREVIEW_PATH} date = {event.DATE} name={event.NAME} />)
    //   })
    // }

    return (
      <nav aria-label="Page navigation">
          <ul className="pagination">
            <li>
              <a href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li><a href="#">1</a></li>

            <li>
              <a href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
      </nav>
    );
  }
}

export default Paginator;
