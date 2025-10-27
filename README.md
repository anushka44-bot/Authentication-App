# 🔐 MERN Authentication System

A complete **MERN stack authentication application** built with **MongoDB, Express, React, and Node.js**.  
It allows users to **sign up, log in, verify their email, reset their password via OTP**, and manage secure sessions.

---

## 🚀 Features

- ✅ **User Registration (Sign Up)**
- 🔑 **User Login (JWT-based Authentication)**
- ✉️ **Email Verification with OTP**
- 🔁 **Password Reset via Email OTP**
- 🔒 **Protected Routes**
- 🧠 **Session Handling using Cookies**
- 📱 **Responsive UI (React + CSS)**
- ⚙️ **Backend built with Express & MongoDB**

---

## 🏗️ Tech Stack

### **Frontend**
- React.js  
- Axios  
- React Router DOM  
- React Toastify  

### **Backend**
- Node.js  
- Express.js  
- MongoDB + Mongoose  
- JSON Web Token (JWT)  
- Nodemailer  
- Bcrypt.js  
- Dotenv  
- CORS  

---

## ⚙️ Project Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/mern-authentication-app.git
cd mern-authentication-app
```
### 2️⃣ Install dependencies

## For backend
```
cd backend
npm install
```

## For frontend
```
cd ../frontend
npm install
```

### 🔧 Environment Variables

Create a .env file in your backend folder and add:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password_or_app_password
CLIENT_URL=http://localhost:3000
```

### 🧩 Run the Application
## Run Backend
```
cd backend
npm run dev
```

## Run Frontend
```
cd frontend
npm start
```

## 🧠 Folder Structure
```
mern-authentication-app/
│
├── backend/
│   ├── server.js
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middlewares/
│   └── utils/
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── context/
│   │   ├── assets/
│   │   └── App.js
│
└── README.md

```

### 💡 How It Works

Sign Up: User registers → receives OTP for email verification.

Email Verification: OTP validates the email before login.

Login: Uses JWT authentication for secure sessions.

Forgot Password: Sends OTP to user’s registered email.

Reset Password: User enters OTP → sets new password.

### 🧑‍💻 Author

Anushka bag
💼 Full Stack Developer | MERN Stack Enthusiast
📧 bag82262@gmail.com

⭐ Show Your Support

If you like this project, please give it a ⭐ on GitHub!
### 
