import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [userId, setUserId] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (userId === '') {
      setData(null);
      setError(null);
      return;
    }

    const id = Number(userId);

    if (id < 1 || id > 10) {
      setData(null);
      setError('User not found');
      return;
    }

    async function fetchData() {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`); //chu y cach viet url khi co tham so
        console.log(res);

        if (!res.ok) {
          throw new Error('User not found');
        }

        const result = await res.json();
        console.log(result);
        setData(result);
      } catch (error) {
        setData(null);
        setError(error.message);
      } finally {
        console.log('Done');
        setLoading(false);
      }
    }

    fetchData();
  }, [userId]); //tham so truyen vao la userId, khi userId thay doi thi useEffect se duoc goi lai

  return (
    <div className="container">
      <h1>Nhập id cần lấy</h1>

      <input
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="Nhập id từ 1 đến 10"
      />

      {
        loading ? (
          <p className="loading">Loading...</p>
        ) : error ? (
          <p className="error">{error}</p>
        ) : data ? (
          <div className="card">
            <p><b>Name:</b> {data.name}</p>
            <p><b>Phone:</b> {data.phone}</p>
            <p><b>Website:</b> {data.website}</p>
          </div>
        ) : (
          <p>Vui lòng nhập userId</p>
        )
      }
    </div>
  );
}

export default App;