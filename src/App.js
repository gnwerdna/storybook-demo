import React, { Component } from 'react';
import './App.css';
import WeeklySongListItem from './components/WeeklySongListItem';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WeeklySongListItem
          order="01"
          title="Anh Đang Ở Đâu Đấy Anh"
          singer="Hương Giang"
          viewCount={3416}
        />
      </div>
    );
  }
}

export default App;
