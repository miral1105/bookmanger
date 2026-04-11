# 📚 Book Manager

A modern, full-stack application for managing your personal book collection. Built with a focus on speed, aesthetics, and a premium user experience.

![Preview](https://img.shields.io/badge/Status-Active-brightgreen)
![Version](https://img.shields.io/badge/Version-1.0.0-blue)
![License](https://img.shields.io/badge/License-ISC-orange)
[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://bookmanger-client.onrender.com)

---

## 🌐 Live Demo

You can view the live application here: **[Book Manager Live](https://bookmanger-client.onrender.com)**


## 🚀 Features

- **Intuitive UI**: Modern design with responsive layouts.
- **Secure Authentication**: Built-in user authentication using JWT and bcrypt.
- **Full CRUD Support**: Add, Edit, Delete, and View your book collection.
- **Visual Excellence**: Premium styling components using Material UI.

---

## 🛠️ Technology Stack

- **Frontend**: React, Vite, Material UI (MUI), Framer Motion, Axios.
- **Backend**: Node.js, Express, Mongoose.
- **Database**: MongoDB (Atlas).
- **Authentication**: JSON Web Tokens (JWT).

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16.x or higher recommended)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account or a local MongoDB instance.

---

## ⚙️ Setup & Installation

### 1. Clone the Repository
```bash
git clone https://github.com/miral1105/bookmanger.git
```

### 2. Backend Configuration
Navigate to the `server` directory and install dependencies:
```bash
cd server
npm install
```

Create a `.env` file in the `server` directory and add your credentials:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

### 3. Frontend Configuration
Navigate to the `client` directory and install dependencies:
```bash
cd ../client
npm install
```

Create a `.env` file in the `client` directory and set the API base URL:
```env
VITE_BASE_URL=http://localhost:5000
```

---

## 🏃 Running the Application

### Start Backend
From the `server` directory:
```bash
npm run dev
```
The server will start on `http://localhost:5000`.

### Start Frontend
From the `client` directory:
```bash
npm run dev
```
The application will be available at `http://localhost:5173` (default Vite port).

---

## 📁 Project Structure

```text
├── client/          # React frontend (Vite)
├── server/          # Express backend
└── README.md        # Documentation
```

---

## 📄 License
This project is licensed under the ISC License.
