# 🎉 Department Technical Event Website

A fully responsive web application for hosting and managing a department's annual technical event. Built with **React + Vite** on the frontend and **Node.js + Express + MongoDB** on the backend, this project handles user registrations with client and server-side validation.

---

## 🌐 Frontend (React + Vite)

### 🚀 Features

- Built with **React + Vite**
- Fully **responsive** on all devices
- **Form validation** on client-side using hooks
- Sends data to backend via **Fetch API**
- Modern and clean UI

### 🛠️ Getting Started (Frontend)

1. Clone the frontend repo:

   ```bash
   git clone 
   cd frontend-repo
   ```

2. Install dependencies:

   ```bash
   npm install --legacy-peer-deps
   ```

3. Run the development server:

   ```bash
   npm run dev --legacy-peer-deps
   ```

4. Visit the site:

   Open `http://localhost:5173` in your browser.

---

## 🧠 Backend (Node.js + Express + MongoDB)
The backend for this project is managed in a **separate repository**.

👉 Visit the backend repo here: ([https://github.com/backend-repo](https://github.com/NightWolf0506/Technovate2025BackEnd))

That repository includes: 

### ⚙️ Features

- **Express.js** server
- **MVC architecture**
- **MongoDB** database with **Mongoose**
- **Auth route** for handling registration
- **Server-side validation** using custom middleware
- Secure and scalable backend design

### 📁 Folder Structure (Backend)

```
backend/
├── controllers/        # Logic for route handling
├── models/             # Mongoose schemas
├── routes/             # API route definitions
├── middleware/         # Validation and auth logic
├── config/             # DB config and connection
├── .env                # Environment variables (MongoDB URI)
├── index.js            # Server entry point
```

### 🔐 .env File Example

Create a `.env` file in the backend root:

```
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/tech-event
PORT=5000
```

### 🛠️ Getting Started (Backend)

1. Clone the backend repo:

   ```bash
   git clone 
   cd backend-repo
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the server:

   ```bash
   node index.js
   ```

4. API will be live at:

   ```
   http://localhost:5000
   ```

---

## 🔄 Registration Flow

1. User fills out the form on the frontend
2. Client-side validation checks fields
3. Data is sent to the backend via `fetch`
4. Server validates request using middleware
5. Valid data is saved to MongoDB
6. Success/error response sent back to frontend

---

## 📦 Tech Stack Summary

| Layer        | Tech                         |
|--------------|------------------------------|
| Frontend     | React, Vite, CSS / Tailwind  |
| Backend      | Node.js, Express             |
| Database     | MongoDB Atlas, Mongoose      |
| Validation   | Custom middleware (Express)  |

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

