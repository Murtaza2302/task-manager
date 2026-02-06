# Task Management Web Application

A simple full-stack Task Management web application that allows users to create, view, update, and delete tasks.  

---

## 🚀 Features

- Create tasks with title, description, and status
- View all tasks in a clean UI
- Update existing tasks
- Delete tasks
- Client-side form validation
- RESTful API
- Persistent data storage using MongoDB

---


## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Murtaza2302/task-manager.git
cd task-manager

### 2️⃣ Backend Setup

cd backend
npm install

Create a .env file inside the backend folder:

MONGO_URI=mongodb://127.0.0.1:27017/taskmanager
PORT=5000

### Start the backend server:

npx nodemon app.js

### Backend will run at:

http://localhost:5000

### 3️⃣ Frontend Setup

Open the frontend directly in the browser:

frontend/index.html

(No build or installation required)

## 🛠️ Tech Stack

### Frontend
- HTML
- CSS
- JavaScript (Vanilla)

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas 

---

## 📁 Project Structure

task-management-app/
├── backend/
│ ├── config/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── app.js
│ └── package.json
│
├── frontend/
│ ├── index.html
│ ├── style.css
│ └── script.js
│
└── README.md

---
