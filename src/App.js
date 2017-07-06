import React, { Component } from 'react';
import './App.css';

import News from './components/News.js'


const apiObj = {
  2563879: {
    ID:"2563879",//id новости
    DATE: 1380296860, //время создания, timestamp
    NAME:"РЯркие и стойкие. Маркеры MunHwa", //название новости
    PREVIEW_PATH:"https://yt3.ggpht.com/-ROs9Dou_xUY/AAAAAAAAAAI/AAAAAAAAAAA/RCZL6VlFFI8/s900-c-k-no-mo-rj-c0xffffff/photo.jpg"
  },
  24358235: {
    ID:"24358235",//id новости
    DATE: 1680296860, //время создания, timestamp
    NAME:"ГЯркие и стойкие. Маркеры MunHwa", //название новости
    PREVIEW_PATH:"https://yt3.ggpht.com/-ROs9Dou_xUY/AAAAAAAAAAI/AAAAAAAAAAA/RCZL6VlFFI8/s900-c-k-no-mo-rj-c0xffffff/photo.jpg"
  },
  25638279: {
    ID:"25638279",//id новости
    DATE: 1580296860, //время создания, timestamp
    NAME:"ВЯркие и стойкие. Маркеры MunHwa", //название новости
    PREVIEW_PATH:"https://yt3.ggpht.com/-ROs9Dou_xUY/AAAAAAAAAAI/AAAAAAAAAAA/RCZL6VlFFI8/s900-c-k-no-mo-rj-c0xffffff/photo.jpg"
  },
  12312348: {
    ID:"12312348",//id новости
    DATE: 1280296860, //время создания, timestamp
    NAME:"АЯркие и стойкие. Маркеры MunHwa", //название новости
    PREVIEW_PATH:"https://yt3.ggpht.com/-ROs9Dou_xUY/AAAAAAAAAAI/AAAAAAAAAAA/RCZL6VlFFI8/s900-c-k-no-mo-rj-c0xffffff/photo.jpg"
  },
  49341234: {
    ID:"49341234",//id новости
    DATE: 1780296860, //время создания, timestamp
    NAME:"МЯркие и стойкие. Маркеры MunHwa", //название новости
    PREVIEW_PATH:"https://yt3.ggpht.com/-ROs9Dou_xUY/AAAAAAAAAAI/AAAAAAAAAAA/RCZL6VlFFI8/s900-c-k-no-mo-rj-c0xffffff/photo.jpg"
  },
  498120340: {
    ID:"498120340",//id новости
    DATE: 1280296860, //время создания, timestamp
    NAME:"Яркие и стойкие. Маркеры MunHwa", //название новости
    PREVIEW_PATH:"https://yt3.ggpht.com/-ROs9Dou_xUY/AAAAAAAAAAI/AAAAAAAAAAA/RCZL6VlFFI8/s900-c-k-no-mo-rj-c0xffffff/photo.jpg"
  },
  345239845: {
    ID:"345239845",//id новости
    DATE: 1980296880, //время создания, timestamp
    NAME:"Яркие и стойкие. Маркеры MunHwa", //название новости
    PREVIEW_PATH:"https://yt3.ggpht.com/-ROs9Dou_xUY/AAAAAAAAAAI/AAAAAAAAAAA/RCZL6VlFFI8/s900-c-k-no-mo-rj-c0xffffff/photo.jpg"
  },

  39343459: {
    ID:"39343459",//id новости
    DATE: 1280296860, //время создания, timestamp
    NAME:"Маркеры MunHwa", //название новости
    PREVIEW_PATH:"https://yt3.ggpht.com/-ROs9Dou_xUY/AAAAAAAAAAI/AAAAAAAAAAA/RCZL6VlFFI8/s900-c-k-no-mo-rj-c0xffffff/photo.jpg"
  },

  1324123: {
    ID:"1324123",//id новости
    DATE: 1280296862, //время создания, timestamp
    NAME:"Маркеры MunHwa", //название новости
    PREVIEW_PATH:"https://yt3.ggpht.com/-ROs9Dou_xUY/AAAAAAAAAAI/AAAAAAAAAAA/RCZL6VlFFI8/s900-c-k-no-mo-rj-c0xffffff/photo.jpg"
  }
}

class App extends Component {


  constructor() {
    super()
    this.state = {
      news: [

      ]
    }
  }


  // пришерсти api объет для работы
  preprocAPIObj(obj) {
  let apiObject  = obj
  let goodApiMassive = []
    for ( let keyname in apiObject) {
        /* ... делать что-то с obj[key] ... */
          //console.log(apiObject[keyname].DATE);
        apiObject[keyname].TIMESTAMP =  apiObject[keyname].DATE
        let newDate = this.convertTimestamp(apiObject[keyname].DATE)
        apiObject[keyname].DATE =  newDate


        goodApiMassive.push(apiObject[keyname])
    }

    return goodApiMassive
  }


   convertTimestamp(timestamp) {
      console.log(timestamp)
      let pubDate = new Date(timestamp * 1000); //expects milliseconds
      let month
      if(pubDate.getMonth() < 10) {
         month =  '0' + pubDate.getMonth()
      } else {
         month =  pubDate.getMonth()
      }
    	return pubDate.getDay() + "." + month + "." + pubDate.getFullYear()
    }

  componentWillMount() {

    let normMassive = this.preprocAPIObj(apiObj)
    let def =  normMassive.slice(0);
    this.setState({
      news: normMassive,
      defaultNews: def
    })
  }

  filter() {
  //
  // console.log('default news');
  // console.log(this.state.defaultNews);
    if(this.refs.filter.value == 'filter_title') {
      this.setState({
        news: this.alphabeticSort(this.state.news)
      })

      console.log(this)
    } else if(this.refs.filter.value == 'filter_date') {
      this.setState({
        news: this.dateSort(this.state.news)
      })
    } else {
      this.setState({
        news: this.state.defaultNews
      })
    }
  }



  dateSort(massive) {
    let sortMassive = massive.sort(function(a,b){
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.

        return new Date(b.TIMESTAMP*1000) - new Date(a.TIMESTAMP*1000);
    });
    return sortMassive

  }
  alphabeticSort(massive) {
  let sortMassive = massive.sort(function(a, b) {
      var textA = a.NAME.toUpperCase();
      var textB = b.NAME.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  });

  return sortMassive

  }

  render() {
        //this.alphabeticSort()
    return (

      <div className="App">
        <select name="" onChange={this.filter.bind(this)} id="" ref="filter" >
            <option  value='null' >Без фильтра</option>
            <option  value='filter_title' >По заголовку</option>
            <option  value='filter_date' >По дате</option>
        </select>
        <News news={this.state.news} />
      </div>
    );
  }
}

export default App;
