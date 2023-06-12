import React, { useState } from "react";
import useAuth from "../hooks/useAuth";

import { useNavigate } from "react-router-dom";
import { createActivity } from "../api/helpers";

export default function CreateActivityForm({ activities, setActivities }) {
  const navigate = useNavigate();
  const { token, setToken } = useAuth();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    await createActivity(token, name, description);
    navigate("/");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            value={title}
            onChange={(e) => setName(e.target.value)}
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

        <button className="button">Create Activity</button>
      </form>
    </div>
  );
}
