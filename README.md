# 🚀 BuyerForeSight Frontend Assignment

A responsive **User Directory Dashboard** built using React, showcasing user data with search, sorting, and detailed views.

---

## 📌 Features

- 📊 Display users in a structured table
- 🔍 Search users by **name or email**
- 🔃 Sort users by:
  - Name (A–Z / Z–A)
  - Company (A–Z / Z–A)
- 👤 User Detail Page with complete information
- ⚡ Fast and responsive UI

---

## 🛠️ Tech Stack

- React (Vite)
- React Router DOM
- Axios
- CSS

---

## 📂 Project Structure


buyer-foresight/
│
├── src/
│ ├── components/
│ │ ├── UserTable.jsx
│ │ ├── SearchBar.jsx
│ │ ├── SortControls.jsx
│ │
│ ├── pages/
│ │ ├── Dashboard.jsx
│ │ ├── UserDetail.jsx
│ │
│ ├── services/
│ │ ├── api.js
│ │
│ ├── utils/
│ │ ├── sortUtils.js
│ │
│ ├── App.jsx
│ ├── main.jsx
│ └── styles.css
│
├── package.json


---

## 🔌 API Used

User data is fetched from:

https://jsonplaceholder.typicode.com/users

---

## ⚙️ Setup Instructions

### 1. Clone the repository

git clone <your-repo-link>
cd buyer-foresight


### 2. Install dependencies

npm install


### 3. Run the development server

npm run dev


---

## ⚠️ Important Note (Node Version)

This project requires:

- Node.js **v20.19+** OR **v22+**

Check your version:

node -v


---

## 🧠 Implementation Details

### Search
- Implemented using client-side filtering
- Matches both name and email (case-insensitive)

### Sorting
- Custom sorting logic using a utility function
- Handles both string fields and nested company name

### Routing
- React Router used for navigation
- Dynamic route for user details (`/user/:id`)

---

## 📈 Possible Improvements

- Add loading and error states
- Debounce search input for performance
- Highlight matching search results
- Improve UI with Tailwind or Material UI
- Add pagination for scalability

---

## 🎯 Conclusion

This project demonstrates:
- Clean component architecture
- Separation of concerns
- Efficient state management
- Practical frontend development skills

---

## 👤 Author

Sachin Kumar  
Frontend Developer (MERN Stack)