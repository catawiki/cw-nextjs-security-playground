// pages/comments.js

import { useState, useEffect } from 'react';

export default function Comments() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    // Load comments from local storage when the component mounts
    const savedComments = JSON.parse(localStorage.getItem('comments')) || [];
    setComments(savedComments);
  }, []);

  const handleAddComment = () => {
    if (newComment.trim() === '') return;

    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    setNewComment('');
    localStorage.setItem('comments', JSON.stringify(updatedComments));
  };

  const handleRemoveComment = (index) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
    localStorage.setItem('comments', JSON.stringify(updatedComments));
  };

  return (
    <div>
      <h1>Comments</h1>
      <div>
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment"
        />
        <button onClick={handleAddComment}>Submit</button>
      </div>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            {comment}
            <button onClick={() => handleRemoveComment(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}