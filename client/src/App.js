import React from 'react';
import Navbar from './components/Navbar';
import './app.css';
import Home from './pages/Home';
import Post from './pages/Post';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Post />
    </div>
  );
}

export default App;
