import React, { useState, useEffect } from 'react';
import { options } from 'api';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setItems(response.data.results);
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {items.map(option => (
            <li key={option.id}>
              <Link to={`/movies/${option.id}`} state={{ from: location }}>
                <img
                  src={`https://image.tmdb.org/t/p/w200${option.poster_path}`}
                  alt={option.original_title}
                />

                <div>{option.title}</div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
