# ✅ To-Do List Web Application

A **Full Stack To-Do List Application** developed as part of the **Full Stack Development** course.  
This project enables users to create, organize, and track their daily tasks with a clean, intuitive, and responsive interface.

---

## 📌 Table of Contents
1. [About the Project](#about-the-project)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Screenshots](#screenshots)
5. [Installation](#installation)
6. [Folder Structure](#folder-structure)
7. [API Endpoints](#api-endpoints)
8. [Environment Variables](#environment-variables)
9. [Usage](#usage)
10. [Deployment](#deployment)
11. [Future Enhancements](#future-enhancements)
12. [Acknowledgements](#acknowledgements)
13. [License](#license)

---

## 📖 About the Project
The **To-Do List Web Application** is a productivity tool designed to help users manage their daily activities efficiently.  
It allows users to:
- Add tasks
- Edit tasks
- Mark tasks as completed
- Delete tasks

The application is designed to be **responsive**, **fast**, and **user-friendly**, ensuring a seamless experience across mobile, tablet, and desktop devices.

---

## ✨ Features
- **Add Tasks** — Quickly add new tasks with a simple form.
- **Edit Tasks** — Update task names or details at any time.
- **Mark as Completed** — Visually track completed tasks with strike-through formatting.
- **Delete Tasks** — Remove tasks you no longer need.
- **Responsive Design** — Optimized for all screen sizes.
- **Data Persistence** — Stores tasks in a database for permanent access.
- *(Optional)* **Dark Mode** — Switch between light and dark themes.

---

## 🛠 Tech Stack
### **Frontend**
- HTML5
- CSS3 / Bootstrap / Tailwind CSS
- JavaScript (Vanilla JS or React.js)

### **Backend**
- Node.js + Express.js

### **Database**
- MongoDB (with Mongoose ODM)

### **Development Tools**
- Git & GitHub
- Postman (API Testing)
- VS Code
- Heroku / Render / Vercel (Deployment)

---

## 📸 Screenshots
*(Replace the placeholders below with actual screenshots)*

| Homepage | Adding a Task |
|----------|---------------|
| ![Homepage](link_to_homepage_image) | ![Add Task](link_to_add_task_image) |

---

## ⚙️ Installation

1. **Clone the repository**
```bash
git clone https://github.com/himansh3333/To-Do--List.git
cd To-Do--List

2. Install dependencies



npm install

3. Set up environment variables (see Environment Variables)


4. Run the application

npm start

---

📂 Folder Structure

To-Do--List/
│
├── backend/           # Express.js backend code
├── frontend/          # HTML/CSS/JS or React frontend code
├── package.json       # Project metadata & dependencies
├── README.md          # Documentation
└── .env               # Environment variables


---

🔗 API Endpoints

Method	Endpoint	Description

GET	/api/tasks	Retrieve all tasks
POST	/api/tasks	Add a new task
PUT	/api/tasks/:id	Update an existing task
DELETE	/api/tasks/:id	Delete a task



---

🌱 Environment Variables

Create a .env file in the root directory and include:

PORT=5000
MONGO_URI=your_mongodb_connection_string


---

🚀 Deployment

Live Demo: https://himansh3333.github.io/To-Do--List/


---

🔮 Future Enhancements

User Authentication (Sign Up / Login)

Task Categories & Tags

Deadline Reminders & Notifications

Drag-and-Drop Task Reordering

Share Tasks with Other Users

Offline Support (PWA)



---
