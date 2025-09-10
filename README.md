# 🎨 Just Imagine

**Just Imagine** is a full-stack AI image generation app.  
It allows users to enter a text prompt, generate images using the [ClipDrop API](https://clipdrop.co/apis), manage their credits, and download their results.  

---

## 🚀 Features

### 🔑 Authentication
- **Register** with name, email, and password.
- **Login** with email and password.
- Secure password storage with **bcrypt**.
- Session management using **JWT tokens**.

### 💳 Credit System
- Each new user starts with **5 free credits**.
- Every image generation request deducts **1 credit**.
- If credits run out, user cannot generate new images until more credits are added (future: buy credits with plans).

### 🖼️ AI Image Generation
- Input a **text prompt** describing the image you want.
- Backend integrates with **ClipDrop Text-to-Image API**.
- Resulting image is returned as a **base64 data URL**.
- Download images directly from the app.

### 🌐 Frontend
- Built with **React + Vite**.
- Styled with **Tailwind CSS**.
- Pages:
  - **Home** – intro page.
  - **Result** – enter prompt, see generated images, download them.
  - **Buy Credits** – view plans and (future) purchase credits.
  - **Login/Signup Modal** – authentication overlay.

### ⚙️ Backend
- Built with **Express.js**.
- Routes:
  - `POST /api/user/register` → Register a new user.
  - `POST /api/user/login` → Login and get a token.
  - `POST /api/user/credits` → Get remaining credits (protected route).
  - `POST /api/image/generate` → Generate an image from a text prompt (protected route).
- Middleware:
  - **userAuth** – verifies JWT and attaches `req.user`.
- Database:
  - **MongoDB Atlas** (via Mongoose).
  - User schema includes: `name`, `email`, `password`, `creditBalance`.

---

## 🛠️ Tech Stack

**Frontend:**
- React (Vite)
- Tailwind CSS
- React Router

**Backend:**
- Node.js
- Express.js
- JWT (jsonwebtoken)
- bcrypt
- axios
- form-data

**Database:**
- MongoDB (Mongoose ODM)

**API:**
- ClipDrop Text-to-Image

---

## 📦 Installation & Setup

### 1. Clone the repo
```bash
git clone https://github.com/Akankshya02/Just_Imagine.git
cd Just_Imagine
