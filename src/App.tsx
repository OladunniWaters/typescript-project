import './App.css'
import { useState, useEffect } from 'react';


interface Post {
  id: number; 
  original_title: string;
  overview: string;
}



function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=40c5472500254014bc0441252e3b37ac&language=en-US&page=1&with_genres=37');
      const data = await response.json();
      setPosts(data.results);
    };
    fetchPosts();
  }, []);

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <h2>{post.original_title}</h2>
          <p>{post.overview}</p>
        </li>
      ))}
    </ul>
  )
}

export default App

