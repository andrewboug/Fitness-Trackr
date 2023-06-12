import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
import { createPost } from "../api/helpers";
import { useNavigate } from "react-router-dom";

export default function CreatePostForm({ posts, setPosts }) {
  const navigate = useNavigate();
  const { token, setToken } = useAuth();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [willDeliver, setWillDeliver] = useState(false);
  // Step 1:
  // control each input w a state value
  // example value={title} onChcnage={(e)=>setTitle(e.target.value)}
  async function handleSubmit(e) {
    e.preventDefault();
    await createPost(token, title, description, price, location, willDeliver);
    navigate("/");

    // take all the state values, and pass it into createPost
    // Dont forget to pull the token out of useAuth
    // await createPost(token, ....)
    // maybe navigate back home?
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
          />
        </label>
        <label>
          Description
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
          />
        </label>
        <label>
          Price
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="text"
          />
        </label>
        <label>
          Location
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            type="text"
          />
        </label>
        <label>
          Will Deliver?
          <input
            value={willDeliver}
            onChange={() => setWillDeliver(!willDeliver)}
            type="checkbox"
          />
        </label>
        <button className="button">Create Post</button>
      </form>
    </div>
  );
}
