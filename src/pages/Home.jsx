import React, { useState, useEffect } from 'react';
import { options } from 'api';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

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
              <img
                src={`https://image.tmdb.org/t/p/w200${option.poster_path}`}
                alt={option.original_title}
              />
              <Link to={`/movies/${option.id}`}>{option.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
