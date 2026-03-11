import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = 'https://jsonplaceholder.typicode.com/users1';

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(url);
        console.log(res);

        if (!res.ok) {
          throw new Error('Error Network');
        }

        const result = await res.json();
        console.log(result);

        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        console.log('Done');
        setTimeout(() => {
          setLoading(false);
        }, 5000);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>Danh sách Users</h1>

      {
        loading ? (
          <p className="loading">Loading...</p>
        ) : (error == null ? (
          data.map((item) => {
            return (
              <div key={item.id} className="card">
                <p><b>Name:</b> {item.name}</p>
                <p><b>Email:</b> {item.email}</p>
              </div>
            );
          })
        ) : (
          <p className="error">Error: {error}</p>
        ))
      }
    </div>
  );
}

export default App;