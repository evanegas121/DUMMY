import logo from './logo.svg';
import SearchResults from './components/containers/searchResults';
import { useState } from 'react';
import Search from './components/functionalComponents/search_bar';
import Home from './components/views/Home';
import './App.css';

const posts = [
  { id: '1', name: 'This first post is about React' },
  { id: '2', name: 'This next post is about Preact' },
  { id: '3', name: 'We have yet another React post!' },
  { id: '4', name: 'This is the fourth and final post' },
];

const filterPosts = (posts, query) => {
  if (!query) {
      return posts;
  }

  return posts.filter((post) => {
      const postName = post.name.toLowerCase();
      return postName.includes(query);
  });
};

const App = () => {
  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');
  const filteredPosts = filterPosts(posts, searchQuery);
  return (
    <div className="App">
      <header className="App-header"></header>
      <Home/>
      <Search
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}      
      />
      <ul>
        {filteredPosts.map((post) => (
          <li key={post.key}>{post.name}</li>
        ))}
        </ul>
        <SearchResults/>
    
    </div>
  );
}

export default App;