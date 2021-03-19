
import './App.css';
import React, { useState, useEffect } from 'react';
import Axios from 'axios';


function App() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments();
  }, [])


  const fetchComments = async () => {
    const response = await Axios('https://jsonplaceholder.typicode.com/comments')
    setComments(response.data)
  }



  return (
    <div>
      {
        comments && comments.map(
          comment => {
            return (
              <div key={comment.id} style={{ alignItems: 'center', margin: '20px 60px' }}>
                <h4>{comment.name}</h4>
                <p>{comment.email}</p>
              </div>
            )
          }
        )
      }
    </div>
  );
}

export default App;
