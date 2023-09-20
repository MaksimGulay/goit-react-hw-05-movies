import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getCast } from 'api';
import { useParams } from 'react-router-dom';

const CastNew = () => {
  const [casts, setCasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCasts = async () => {
      try {
        const result = getCast(movieId);
        const response = await axios.request(result);
        setCasts(response.data.cast);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching casts:', error);
        setLoading(false);
      }
    };

    fetchCasts();
  }, [movieId]);

  return (
    <div>
      <h2>Casts</h2>
      {loading ? (
        <div>Loading casts...</div>
      ) : (
        <ul>
          {casts.length > 0 ? (
            casts.map(cast => (
              <li key={cast.id}>
                <img src={`https://image.tmdb.org/t/p/w200${cast.profile_path}`} alt={cast.name} />

                <p>{cast.name}</p>
              </li>
            ))
          ) : (
            <div>No cast information available</div>
          )}
        </ul>
      )}
    </div>
  );
};

export default CastNew;