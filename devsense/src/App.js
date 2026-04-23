import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedMetric, setSelectedMetric] = useState(null);
  const [metrics, setMetrics] = useState(null);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      fetch("http://localhost:5000/api/dashboard")
        .then((res) => res.json())
        .then((data) => setMetrics(data.metrics))
        .catch(() => alert("Backend not running"));
    }
  }, [isLoggedIn]);

  const handleSignup = () => {
    const newUser = { fullName, username };
    const updatedUsers = [...users, newUser];

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setUsers(updatedUsers);

    setIsLogin(true);
    setFullName("");
    setUsername("");
  };

  const handleLogin = () => {
    const foundUser = users.find((u) => u.username === username);

    if (foundUser) {
      setCurrentUser(foundUser);
      setIsLoggedIn(true);
    } else {
      alert("User not found");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setMetrics(null);
  };

  if (!isLoggedIn) {
    return (
      <div className="container login-container">
        <div className="login-box">
          <h1>DevSense</h1>

          {!isLogin ? (
            <>
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />

              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <button onClick={handleSignup}>Sign Up</button>

              <p onClick={() => setIsLogin(true)} className="link">
                Already have an account? Login
              </p>
            </>
          ) : (
            <>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <button onClick={handleLogin}>Login</button>

              <p onClick={() => setIsLogin(false)} className="link">
                New user? Sign Up
              </p>
            </>
          )}
        </div>
      </div>
    );
  }

  if (!metrics) {
    return <h2 style={{ textAlign: "center" }}>Loading metrics...</h2>;
  }

  return (
    <div className="container">
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>

      <div className="header">
        <h1>DevSense Dashboard</h1>
        <div className="welcome">Welcome, {currentUser?.fullName}</div>
        <div className="company">Company: TheProductWorks.in</div>
      </div>

      <h2 className="metrics-title">Metrics</h2>

      <div className="metrics">
        <div className="card" onClick={() => setSelectedMetric("leadTime")}>
          <h3>Lead Time</h3>
          <p>{metrics.leadTime} days</p>
        </div>

        <div className="card" onClick={() => setSelectedMetric("cycleTime")}>
          <h3>Cycle Time</h3>
          <p>{metrics.cycleTime} days</p>
        </div>

        <div className="card" onClick={() => setSelectedMetric("bugRate")}>
          <h3>Bug Rate</h3>
          <p>{metrics.bugRate}</p>
        </div>

        <div className="card" onClick={() => setSelectedMetric("prThroughput")}>
          <h3>PR Throughput</h3>
          <p>{metrics.prThroughput}</p>
        </div>

        <div className="card" onClick={() => setSelectedMetric("deploymentFrequency")}>
          <h3>Deployment Frequency</h3>
          <p>{metrics.deploymentFrequency}</p>
        </div>
      </div>

      {selectedMetric && (
        <div className="insight-box">
          <h2>Insight</h2>
          <p>Performance insight based on selected metric.</p>
          <h2>Suggestion</h2>
          <p>Take appropriate actions to improve performance.</p>
        </div>
      )}
    </div>
  );
}

export default App;