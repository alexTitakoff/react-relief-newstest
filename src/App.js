import React, { Component } from 'react';
import './App.css';

import News from './components/News.js'

class App extends Component {


  constructor() {
    super()
    this.state = {

    }
  }



  componentWillMount() {
    this.setState({
      news: [
        2563879: {
          ID:"2563879",//id новости
          DATE: 1482181200, //время создания, timestamp
          NAME:"Яркие и стойкие. Маркеры MunHwa", //название новости
          PREVIEW_PATH:"/upload/iblock/c98/c981a7b86c13d27b4ce3871b5116f62a.jpg"
        },
        24358235: {
          ID:"24358235",//id новости
          DATE: 1482181200, //время создания, timestamp
          NAME:"Яркие и стойкие. Маркеры MunHwa", //название новости
          PREVIEW_PATH:"/upload/iblock/c98/c981a7b86c13d27b4ce3871b5116f62a.jpg"
        },
        25638279: {
          ID:"2563879",//id новости
          DATE: 1482181200, //время создания, timestamp
          NAME:"Яркие и стойкие. Маркеры MunHwa", //название новости
          PREVIEW_PATH:"/upload/iblock/c98/c981a7b86c13d27b4ce3871b5116f62a.jpg"
        },
        12312348: {
          ID:"012348",//id новости
          DATE: 1482181200, //время создания, timestamp
          NAME:"Яркие и стойкие. Маркеры MunHwa", //название новости
          PREVIEW_PATH:"/upload/iblock/c98/c981a7b86c13d27b4ce3871b5116f62a.jpg"
        },
        49341234: {
          ID:"09341234",//id новости
          DATE: 1482181200, //время создания, timestamp
          NAME:"Яркие и стойкие. Маркеры MunHwa", //название новости
          PREVIEW_PATH:"/upload/iblock/c98/c981a7b86c13d27b4ce3871b5116f62a.jpg"
        },
        498120340: {
          ID:"098120340",//id новости
          DATE: 1482181200, //время создания, timestamp
          NAME:"Яркие и стойкие. Маркеры MunHwa", //название новости
          PREVIEW_PATH:"/upload/iblock/c98/c981a7b86c13d27b4ce3871b5116f62a.jpg"
        },
        345239845: {
          ID:"0239845",//id новости
          DATE: 1482181200, //время создания, timestamp
          NAME:"Яркие и стойкие. Маркеры MunHwa", //название новости
          PREVIEW_PATH:"/upload/iblock/c98/c981a7b86c13d27b4ce3871b5116f62a.jpg"
        },

        39343459: {
          ID:"09343459",//id новости
          DATE: 1482181200, //время создания, timestamp
          NAME:"Яркие и стойкие. Маркеры MunHwa", //название новости
          PREVIEW_PATH:"/upload/iblock/c98/c981a7b86c13d27b4ce3871b5116f62a.jpg"
        },

        1324123: {
          ID:"1324123",//id новости
          DATE: 1482181200, //время создания, timestamp
          NAME:"Яркие и стойкие. Маркеры MunHwa", //название новости
          PREVIEW_PATH:"/upload/iblock/c98/c981a7b86c13d27b4ce3871b5116f62a.jpg"
        },

      ]
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
