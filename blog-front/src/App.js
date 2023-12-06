import './App.css';
import { NavbarDark } from './components/navbar';
import { BlogList } from './components/blogList'
import React, { useState } from 'react';


function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = term => {
    setSearchTerm(term);
  };
  return (
    <div className="App mx-auto max-w-screen-xl px-3">
      <NavbarDark onSearch={handleSearch}/>
      <BlogList searchTerm={searchTerm}/>
    </div>
  );
}

export default App;
