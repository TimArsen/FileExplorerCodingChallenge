import React, { Component } from 'react';
import './App.css';
import * as Data from './data.json';
import FileTree from './File-tree';

class App extends Component {

  filetree = Data.children.map((child, i) => {
    return <FileTree data={child} key={i} depth={1} expanded="true"/>;
  })

  render() {
    return (
      <div className="App">
        <div className="modal">
          <div className="header">Title <span class="close"></span></div>
          <div className="label">Label</div>
          <div className="file-tree">
           {this.filetree}
          </div>
          <div className="footer">
            Link
            <button>Done</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
