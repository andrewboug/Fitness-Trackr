import React, { useEffect, useState } from "react";
import { fetchActivities } from "../api/helpers";
import { useNavigate } from "react-router-dom";

export default function AllActivities() {
  const navigate = useNavigate();
  const [activities, setActivities] = useState([]);
  const [searchPosts, setSearchPosts] = useState("");
  console.log(activities);
  useEffect(() => {
    async function getAllActivities() {
      const getActivities = await fetchActivities();
      setActivities(getActivities);
    }
    getAllActivities();
  }, []);

  return (
    <div>
      <h1>All Activities</h1>
      {activities.map((activity) => {
        return (
          <div key={activity.id}>
            <h3>{activity.name}</h3>
            <p>{activity.description}</p>
          </div>
        );
      })}
    </div>
  );
}
