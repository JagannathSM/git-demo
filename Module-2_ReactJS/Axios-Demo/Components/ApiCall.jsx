import React, { useEffect, useState } from "react";
import axios from "axios";

const ApiCall = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Make the API request using axios
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setPosts(data); // Set the data to state
        console.log(data);
      } catch (err) {
        setError("Error fetching posts");
        console.error(err);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {error && <p>{error}</p>} {/* Display error if there is one */}
      <ul>
        {posts.map((post) => (
          <dl key={post.id}>
            <dt><b>{post.id} / {post.title}</b></dt>
            <dd>{post.body}</dd>
            <br></br>
          </dl>
        ))}
      </ul>
    </div>
  );
};

export default ApiCall;
