import { useState, useEffect } from "react";
import { fetchMe } from "../api/users";
import { deleteActivity } from "../api/helpers";
import useAuth from "../hooks/useAuth";

export default function Profile() {
  const { token } = useAuth();
  const [activities, setActivities] = useState([]);
  console.log(activities);
  useEffect(() => {
    async function getActivities() {
      const dataList = await fetchMe(token);
      setActivities(dataList.activities);
    }
    getActivities();
  }, [token]);
  return (
    <div>
      <h1>My Activities</h1>
      {activities.map((activity) => {
        const ACTIVITY_ID = activity.id;
        let activated = "";
        if (activity.active === true) {
          activated = "True";
        } else {
          activated = "False";
        }
        return (
          <div>
            <div key={activity.id}>
              <h3>{activity.name}</h3>
              <p>Active: {activated}</p>
              <p>Description: {activity.description}</p>
            </div>
            <button
              className="button"
              onClick={async () => {
                await deleteActivity(token, ACTIVITY_ID);
                const response = await fetchMe(token);
                if (response.success) {
                  setActivities(response.activities);
                } else {
                  setError(response.error);
                }
              }}
            >
              Delete Post
            </button>
          </div>
        );
      })}
    </div>
  );
}
