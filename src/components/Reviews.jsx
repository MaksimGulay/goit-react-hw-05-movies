import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { getReviews } from 'api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const result = getReviews(movieId);
        const response = await axios.request(result);
        setReviews(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching reviews:', error);
        setLoading(false);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <div>
      <h3>Reviews</h3>
      {loading ? (
        <div>Loading reviews...</div>
      ) : (
        <ul>
          {reviews.length > 0 ? (reviews.map(review => (
            <li key={review.id}>
              <h4>{review.author}</h4>
              <p>{review.content}</p>
            </li>
          ))) :(<div>No reviews</div>)}
          
        </ul>
       )}
    </div>
  );
};

export default Reviews;