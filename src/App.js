import React, { useState, useEffect } from 'react';
import './App.css';
import LazyLoad from 'react-lazyload'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchAPI() {
      try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts')
        response = await response.json()
        setData(response)

      } catch (e) {
        console.log(e)
      }
    };
    fetchAPI()
  }, [])

  const Loading = () => (
    <div className="post loading">
      <div class="spinner-border text-danger" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  )

  const Post = ({ id, title, body }) => {
    return (
      <div className="post">
        <LazyLoad
          once={true}
          placeholder={<img src="https://images.unsplash.com/photo-1601474285955-f4840166ce07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=10" alt="placeholder" />}
        >
        </LazyLoad>
        <div className="card" key={id}>
          <img src="https://images.unsplash.com/photo-1601474285955-f4840166ce07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{body}</p>
          </div>
        </div>
      </div>
    )
  }
  const renderFunc = () => {
    return (
      data.map(post => {
        return (
          <LazyLoad key={post.id}
            height={100}
            offset={[-100, 100]}
            placeholder={<Loading />}>
            <Post key={post.id} {...post} />
          </LazyLoad>
        )
      })
    )
  }


  return (
    <div className="App">
      <h2>LazyLoad Demo</h2>
      <div className="container">

        {renderFunc()}
        {console.log(data)}
      </div>
    </div>
  );
}

export default App;
