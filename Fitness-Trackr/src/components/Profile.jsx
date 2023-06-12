import { useState, useEffect } from "react";
import { fetchMe } from "../api/users";
import { deletePost } from "../api/helpers";
import useAuth from "../hooks/useAuth";

export default function Profile() {
  const { token } = useAuth();
  const [posts, setPosts] = useState([]);
  console.log(posts);
  useEffect(() => {
    async function getPosts() {
      const dataList = await fetchMe(token);
      setPosts(dataList.data.posts);
    }
    getPosts();
  }, [token]);
  return (
    <div>
      <h1>My Posts</h1>
      {posts.map((post) => {
        const POST_ID = post._id;
        let activated = "";
        if (post.active === true) {
          activated = "True";
        } else {
          activated = "False";
        }
        return (
          <div>
            <div key={post._id}>
              <h3>{post.title}</h3>
              <p>Active: {activated}</p>
              <p>Description: {post.description}</p>
              <p>Price: {post.price}</p>
              <p>Created at: {post.createdAt}</p>
              <p>Updated at: {post.updatedAt}</p>
              <p>Location: {post.location}</p>
              <div>
                Messages:
                {post.messages.map((message) => {
                  return (
                    <div key={message._id}>
                      <p>From: {message.fromUser.username}</p>
                      <p>Content: {message.content}</p>
                    </div>
                  );
                })}
              </div>
              <button
                className="button"
                onClick={async () => {
                  await deletePost(token, POST_ID);
                  const response = await fetchMe(token);
                  if (response.success) {
                    setPosts(response.data.posts);
                  } else {
                    setError(response.error);
                  }
                }}
              >
                Delete Post
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
