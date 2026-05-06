# 📝 Blog Application (Node.js + Express + EJS)

A full-stack blog application built using **Node.js**, **Express**, and **EJS** that allows users to create, view, edit, and delete posts.

---

## 🚀 Features

* ✍️ Create new blog posts
* 📖 View all posts
* 📝 Edit existing posts
* ❌ Delete posts
* 📅 Dynamic footer with current year
* 🎯 Clean UI with reusable components (header & footer)

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Frontend:** EJS (Embedded JavaScript Templates), HTML, CSS
* **Middleware:** Morgan (logging), Body Parser (Express built-in)
* **Storage:** In-memory (array-based)

---

## 📂 Project Structure

```
Blog/
│
├── views/
│   ├── features/
│   │   ├── create.ejs
│   │   ├── edit.ejs
│   │   ├── blogs.ejs
│   │
│   ├── utilities/
│   │   ├── header.ejs
│   │   ├── footer.ejs
│   │
│   ├── index.ejs
│
├── public/
│   ├── *.css
│
├── index.js
├── package.json
```

---

## ⚙️ Installation & Setup

1. Clone the repository

```bash
git clone https://github.com/your-username/blog-app.git
cd blog-app
```

2. Install dependencies

```bash
npm install
```

3. Run the server

```bash
node index.js
```

4. Open in browser

```bash
http://localhost:3000
```

---

## 🔄 Application Flow

1. User creates a post
2. Data is stored in an array
3. Posts are displayed on the blogs page
4. User can:

   * Edit → Pre-filled form → Update
   * Delete → Remove post instantly

---

## 🧠 Key Learnings

* Understanding **MVC-like structure** in Express
* Handling **GET & POST routes**
* Using **EJS templating** with dynamic data
* Managing state using arrays (temporary storage)
* Implementing **CRUD operations**
* Handling form data with `req.body`
* Passing data between routes and views

---

## ⚠️ Limitations

* Data is not persistent (resets when server restarts)
* No authentication (anyone can edit/delete)

---

## 🚀 Future Improvements

* 🗄️ Integrate MongoDB / Database
* 🔐 Add authentication (login/signup)
* ❤️ Add likes/comments feature
* 🌐 Deploy online (Render / Vercel / Railway)

---

## 📸 Screenshots

*(Add screenshots of your UI here for better impact)*

---

## 👨‍💻 Author

**Hemanth Guntuku**

* GitHub: https://github.com/your-username
* LinkedIn: https://www.linkedin.com/in/hemanth-guntuku-643732280

---

## ⭐ Show your support

If you like this project, give it a ⭐ on GitHub!

---
