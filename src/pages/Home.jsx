import React, { useState, useEffect } from 'react';
import { options } from 'api';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import { CardContainer,  CardImage, CardTitle, Item, Items } from './HomeStyled';

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
    <CardContainer>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Items>
          {items.map(option => (
            <Item key={option.id}>
              <Link to={`/movies/${option.id}`} state={{ from: location }}>
              <CardImage
                  src={`https://image.tmdb.org/t/p/w200${option.poster_path}`}
                  alt={option.original_title}
                />

                <CardTitle>{option.title}</CardTitle>
                
              </Link>
            </Item>
          ))}
        </Items>
      )}
    </CardContainer>
  );
};

export default Home;
