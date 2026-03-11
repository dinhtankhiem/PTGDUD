import { useEffect } from 'react'
import { useState } from 'react'

function App() {
  const [posts, setPosts] = useState([])
  const [keyword, setKeyword] = useState('')
  const [searchTerms, setSearchTerm] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true)
        setError(null)

        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        console.log(res)

        if (!res.ok) {
          throw new Error('Error Network')
        }

        if (keyword.trim() === '') {
          setPosts([])
          setSearchTerm([])
          return
        }
        const result = await res.json()
        console.log(result)
        setPosts(result)
        const filteredPosts = result.filter((post) => post.title.toLowerCase().includes(keyword.toLowerCase()));
        setSearchTerm(filteredPosts);
      } catch (error) {
        setPosts([])
        setError(error.message)
      } finally {
        console.log('Done')
        setLoading(false)
      }
    }

    fetchPosts()
  }, [keyword])

  return (
    <div className="container">
      <h1>Nhập từ khóa tìm kiếm</h1>

      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Nhập từ khóa tìm kiếm"
      />
      {
        loading ? (
          <p className="loading">Loading...</p>
        ) : error ? (
          <p className="error">{error}</p>
        ) : searchTerms.length > 0 ? (
          searchTerms.map((item) => {
            return (
              <div key={item.id} className="card">
                <p><b>Title:</b> {item.title}</p>
                <p><b>Body:</b> {item.body}</p>
              </div>
            );
          })
        ) : (
          <p>Không tìm thấy bài viết nào</p>
        )
      }
    </div>
  );
}

export default App
