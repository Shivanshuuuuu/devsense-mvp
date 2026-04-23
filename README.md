# DevSense MVP

DevSense is a lightweight developer productivity dashboard that helps developers and managers understand key engineering metrics and take actionable steps to improve performance.

---

## 🚀 Features

- 🔐 Login / Signup (localStorage-based)
- 👥 Multi-user support (simulated)
- 📊 Metrics Dashboard:
  - Lead Time
  - Cycle Time
  - Bug Rate
  - PR Throughput
  - Deployment Frequency
- 🧠 Insight + Suggestion system (Micro-template)
- 🖱 Interactive metric exploration
- 🔁 Logout functionality

---

## 🎯 Objective

The goal of this project is not just to display metrics, but to:

- Help users understand what the metrics mean  
- Identify potential issues  
- Provide actionable suggestions  
- Enable better decision-making  

---

## 🧠 User Flow

User → Login → Dashboard → Identify Issue → Click Metric → Insight → Action

---

## 🛠 Tech Stack

- Frontend: React.js  
- Backend: Node.js (Express)  
- Storage: LocalStorage (for user simulation)  
- API: REST API for metrics  

---

## 🔐 Authentication & Data Behavior

- Users can sign up using a full name and username.
- The application stores user data in the browser using localStorage.
- Only previously registered usernames can log in.
- This simulates a basic multi-user system without a database.

## 📊 Metrics Behavior

- Metrics are not fetched from a real data source.
- Values are generated dynamically to simulate realistic scenarios.
- This allows the application to demonstrate functionality without backend data integration.
