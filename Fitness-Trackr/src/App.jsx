import { Routes, Route } from "react-router-dom";
import "./App.css";

import Profile from "./components/Profile";

import useAuth from "./hooks/useAuth";
import AllActivities from "./components/AllActivities";

import AuthForm from "./components/AuthForm";
import NavBar from "./components/NavBar";
import CreateActivityForm from "./components/CreateActivityForm";

function App() {
  const { token, user } = useAuth();

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/create" element={<CreateActivityForm />} />
        <Route path="/register" element={<AuthForm />} />
        <Route path="/login" element={<AuthForm />} />
        <Route path="/" element={<AllActivities />} />
      </Routes>
    </div>
  );
}

export default App;
