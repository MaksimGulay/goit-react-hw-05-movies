// import { useState } from 'react';
// import axios from 'axios';
// import { getCast } from 'api';

// const Cast = () => {
//   const [casts, setCasts] = useState([]);

//   axios;
//   const casts = casts
//     .request(getCast)
//     .then(function (response) {
//       console.log(response.data);
//     })
//     .catch(function (error) {
//       console.error(error);
//     });

//   return (
//     <div>
//       <ul>
//         {casts.map(cast => (
//           <li key={cast.id}>
//             <p></p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Cast;

// -------------------------------------------------------------------------

// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { getCast } from 'api';
// import { useParams } from 'react-router-dom';

// const Cast = ({ movieId }) => {
//   const [casts, setCasts] = useState([]);
//   const [loadind, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchCasts = async () => {
//       try {
//         const response = await axios.get(
//           `https://api.themoviedb.org/3/movie/${movieId}/credits`,
//           {
//             params: {
//               language: 'en-US',
//               page: '1',
//             },
//             headers: {
//               accept: 'application/json',
//               Authorization:
//                 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODA3ZDJhN2IzNjZjOGRkMjBiM2UxN2IxMDQ5NTAyOSIsInN1YiI6IjY0ZmYzOTczZWZlYTdhMDExYWI3N2E5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WfuiyWNSMnK0XUfRzXRBAAegiGGslDwG9EegGgPDSdI', // Add your API key here
//             },
//           }
//         );

//         setCasts(response.data.results);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching reviews:', error);
//         setLoading(false);
//       }
//     };
//     fetchCasts();
//   }, [movieId]);

//   return (
//     <div>
//       <h2>Casts</h2>
//       {loadind ? (
//         <div>Loading casts...</div>
//       ) : (
//         <ul>
//           {casts.map(cast => (
//             <li key={cast.id}>
//               <p>{cast.name}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Cast;

import { useState, useEffect } from 'react';
import axios from 'axios';

const Cast = ({ movieId }) => {
  const [casts, setCasts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCasts = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits`,
          {
            params: {
              language: 'en-US',
              page: '1',
            },
            headers: {
              accept: 'application/json',
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODA3ZDJhN2IzNjZjOGRkMjBiM2UxN2IxMDQ5NTAyOSIsInN1YiI6IjY0ZmYzOTczZWZlYTdhMDExYWI3N2E5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WfuiyWNSMnK0XUfRzXRBAAegiGGslDwG9EegGgPDSdI', // Add your API key here
            },
          }
        );

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

export default Cast;
