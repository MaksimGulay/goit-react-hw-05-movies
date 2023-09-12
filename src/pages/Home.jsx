import React, { useState, useEffect } from 'react';
import { options } from "api";
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = ()=> {
    const [items, setItems] = useState([]);

    useEffect(() => {
        // Викликати API, коли компонент відобразиться на екрані
        axios.request(options)
            .then(function (response) {
                // Встановити дані в стан компонента
                setItems(response.data.results);
            })
            .catch(function (error) {
                console.error(error);
            });
    }, []); // Заборонити виклик API у випадку змін стану

    return (
        <ul>
            {items.map((option)=> (
                <li key={option.id}>
                    <img src={`https://image.tmdb.org/t/p/w200${option.poster_path}`} alt={option.original_title} />
                    <Link to={`/movies/${option.id}`}>{option.title}</Link>
                    </li>
                    
            ))}
        </ul>
    );
};

export default Home;
