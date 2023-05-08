import './App.css'
import { useState, useEffect } from 'react';


interface Post {
  idMeal: string; 
  strMeal: string;
  strCategory: string;
}



function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const data = await response.json();
      setPosts(data.meals);
    };
    fetchPosts();
  }, []);

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.idMeal}>
          <h2>{post.strMeal}</h2>
          <p>{post.strCategory}</p>
        </li>
      ))}
    </ul>
  )
}

export default App

