# Contact Form - MERN Stack Project

This is a full-stack contact form web application built using the **MERN (MongoDB, Express.js, React.js, Node.js)** stack. It allows users to submit their **name, email, contact number, and message**, which are securely stored in a MongoDB database using Mongoose. The application prevents duplicate email submissions for clean data storage.

---

## 📌 Features

- 📥 Collects user details: Name, Email, Contact Number, and Message
- ✉️ Submissions are saved in MongoDB Atlas
- ❗ Prevents duplicate email entries
- ⚙️ RESTful API integration using Express and Axios
- 🎨 Aesthetic and responsive UI built with React and CSS
- 🔐 Environment variables managed securely with `.env`

---

## 📁 Tech Stack

| Technology        | Role                               |
| ----------------- | ---------------------------------- |
| **React.js**      | Frontend UI                        |
| **Node.js**       | Backend JavaScript runtime         |
| **Express.js**    | Server framework (API)             |
| **MongoDB Atlas** | Cloud database                     |
| **Mongoose**      | MongoDB Object Modeling (ODM)      |
| **Axios**         | HTTP client for frontend API calls |

---

## 🚀 Getting Started

### 🔧 Prerequisites

- Node.js and npm installed
- MongoDB Atlas account
- Git installed

---

## 🛠️ Setup Instructions

Follow these steps to run the project locally:

### ✅ 1. Clone the Repository

```bash
git clone https://github.com/VINAY0416/contact-form-mern.git
cd contact-form-mern
```

### ✅ 2. Backend Setup

```bash
cd backend
npm install
```

🔐 Create a .env file in the backend/ folder with the following content:

```bash
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

▶️ Start the backend server:

```bash

node server.js
```

📍 Backend will run on: http://localhost:5000

### ✅ 3. Frontend Setup

Open a new terminal tab or window and run:

```bash

cd frontend
npm install
npm start
```

📍 Frontend will run on: http://localhost:3000

| Method | Route           | Description          |
| ------ | --------------- | -------------------- |
| POST   | `/api/messages` | Submits contact data |

🧠 Database Setup for Reviewers
This project uses MongoDB Atlas to store submitted messages.

If you're reviewing this project and want to test it:

Create a free MongoDB Atlas account at https://www.mongodb.com/cloud/atlas

Create a new cluster and get your connection string

Replace MONGO_URI inside the .env file in /backend/ with your connection string

❗ For security reasons, my personal MongoDB URI is not included in this repository.

👤 Author
Vinay Akerkar
📧 akerkarvinay@gmail.com
📍 Belgaum, India
🔗 (https://github.com/VINAY0416)

📝 Note
This project was developed as part of a technical interview assignment and is intended for review and evaluation by the hiring team only.
