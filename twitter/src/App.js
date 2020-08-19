import React from 'react';
import Sidebar from './Components/sidebar/Sidebar.js';
import Feed from './Components/feed/Feed.js';
import Widgets from './Components/widgets/Widgets.js'
import './App.css';

function App() {
  return (
    <div className="app">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Feed */}
      <Feed />

      {/* Widgets */}
      <Widgets />
    </div>
  );
}

export default App;
