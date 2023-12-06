import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavbarDark } from './components/Navbar';
import { BlogList } from './components/BlogList';
import BlogDetailPage from './components/BlogDetailPage';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <Router>
      <div className="App mx-auto max-w-screen-xl px-3">
        <NavbarDark onSearch={handleSearch} />
        <Routes>
        
        <Route path="/blogs/:id" element={<BlogDetailPage />} />

        <Route path="/" element={  <BlogList searchTerm={searchTerm} />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;

