import React, { Component } from 'react';
import './App.css';

import News from './components/News.js'


let apiObj = {
  2563879: {
    ID:"2563879",//id новости
    DATE: 1482181200, //время создания, timestamp
    NAME:"Яркие и стойкие. Маркеры MunHwa", //название новости
    PREVIEW_PATH:"https://yt3.ggpht.com/-ROs9Dou_xUY/AAAAAAAAAAI/AAAAAAAAAAA/RCZL6VlFFI8/s900-c-k-no-mo-rj-c0xffffff/photo.jpg"
  },
  24358235: {
    ID:"24358235",//id новости
    DATE: 1482181200, //время создания, timestamp
    NAME:"Яркие и стойкие. Маркеры MunHwa", //название новости
    PREVIEW_PATH:"https://yt3.ggpht.com/-ROs9Dou_xUY/AAAAAAAAAAI/AAAAAAAAAAA/RCZL6VlFFI8/s900-c-k-no-mo-rj-c0xffffff/photo.jpg"
  },
  25638279: {
    ID:"25638279",//id новости
    DATE: 1482181200, //время создания, timestamp
    NAME:"Яркие и стойкие. Маркеры MunHwa", //название новости
    PREVIEW_PATH:"https://yt3.ggpht.com/-ROs9Dou_xUY/AAAAAAAAAAI/AAAAAAAAAAA/RCZL6VlFFI8/s900-c-k-no-mo-rj-c0xffffff/photo.jpg"
  },
  12312348: {
    ID:"12312348",//id новости
    DATE: 1482181200, //время создания, timestamp
    NAME:"Яркие и стойкие. Маркеры MunHwa", //название новости
    PREVIEW_PATH:"https://yt3.ggpht.com/-ROs9Dou_xUY/AAAAAAAAAAI/AAAAAAAAAAA/RCZL6VlFFI8/s900-c-k-no-mo-rj-c0xffffff/photo.jpg"
  },
  49341234: {
    ID:"49341234",//id новости
    DATE: 1482181200, //время создания, timestamp
    NAME:"Яркие и стойкие. Маркеры MunHwa", //название новости
    PREVIEW_PATH:"https://yt3.ggpht.com/-ROs9Dou_xUY/AAAAAAAAAAI/AAAAAAAAAAA/RCZL6VlFFI8/s900-c-k-no-mo-rj-c0xffffff/photo.jpg"
  },
  498120340: {
    ID:"498120340",//id новости
    DATE: 1482181200, //время создания, timestamp
    NAME:"Яркие и стойкие. Маркеры MunHwa", //название новости
    PREVIEW_PATH:"https://yt3.ggpht.com/-ROs9Dou_xUY/AAAAAAAAAAI/AAAAAAAAAAA/RCZL6VlFFI8/s900-c-k-no-mo-rj-c0xffffff/photo.jpg"
  },
  345239845: {
    ID:"345239845",//id новости
    DATE: 1482181200, //время создания, timestamp
    NAME:"Яркие и стойкие. Маркеры MunHwa", //название новости
    PREVIEW_PATH:"https://yt3.ggpht.com/-ROs9Dou_xUY/AAAAAAAAAAI/AAAAAAAAAAA/RCZL6VlFFI8/s900-c-k-no-mo-rj-c0xffffff/photo.jpg"
  },

  39343459: {
    ID:"39343459",//id новости
    DATE: 1482181200, //время создания, timestamp
    NAME:"Яркие и стойкие. Маркеры MunHwa", //название новости
    PREVIEW_PATH:"https://yt3.ggpht.com/-ROs9Dou_xUY/AAAAAAAAAAI/AAAAAAAAAAA/RCZL6VlFFI8/s900-c-k-no-mo-rj-c0xffffff/photo.jpg"
  },

  1324123: {
    ID:"1324123",//id новости
    DATE: 1482181200, //время создания, timestamp
    NAME:"Яркие и стойкие. Маркеры MunHwa", //название новости
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
  preprocAPIObj(apiObj) {
  console.log(apiObj);
    let goodApiMassive = []
    for ( let keyname in apiObj) {
        /* ... делать что-то с obj[key] ... */
        goodApiMassive.push(apiObj[keyname])
    }

    return goodApiMassive

  }


  componentWillMount() {
    this.setState({
      news: this.preprocAPIObj(apiObj),
    })
  }


  render() {
    return (
      <div className="App">
        <News news={this.state.news} />
      </div>
    );
  }
}

export default App;
