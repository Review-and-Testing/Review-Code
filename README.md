# 📝 Task Management App

A simple React application that uses Redux and Redux Thunk for state management. This app allows users to add, edit, delete, view, filter, and sort tasks. It uses `json-server` to simulate backend API calls.

---

## 🚀 Features

- List all tasks in a sortable table.
- View detailed info for a single task.
- Edit task fields (title, status, assignee, etc.).
- Delete tasks with confirmation.
- Filter and sort tasks.
- Uses Redux for state management and Thunk middleware for async actions.

---

## 📦 Tech Stack

- **React**
- **Redux**
- **Redux Thunk**
- **React Router v6+**
- **json-server** (for mock API)

---

## 📁 Folder Structure

```
task-manager/
│
├── public/
├── src/
│   ├── components/
│   │   ├── TaskTable.jsx
│   │   ├── TaskDetail.jsx
│   │   ├── TaskEdit.jsx
│   ├── redux/
│   │   ├── actions/
│   │   │   └── taskActions.js
│   │   ├── reducers/
│   │   │   └── taskReducer.js
│   │   └── store.js
│   ├── App.jsx
│   └── index.js
├── db.json
└── README.md
```

---

## ⚙️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/task-manager.git
cd task-manager
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start JSON server

This serves the mock API at `http://localhost:5000`.

```bash
npx json-server --watch db.json --port 5001
```

### 4. Start React app

```bash
npm start
```

---

## 🛠 API Endpoints (via `json-server`)

| Method | Endpoint            | Description            |
|--------|---------------------|------------------------|
| GET    | `/tasks`            | Get all tasks          |
| POST   | `/tasks`            | Create new task        |
| PUT    | `/tasks/:id`        | Update task            |
| DELETE | `/tasks/:id`        | Delete a task          |

---

## 📆 Sample Task JSON Format

```json
{
  "id": 1,
  "title": "Create Login Page",
  "assignedTo": "alice@example.com",
  "status": "Open",
  "priority": "High",
  "startDate": "01Jan2024",
  "endDate": ""
}
```

---

## ✅ To Do

- [x] Add routing using React Router
- [x] Use Redux for global state
- [x] Implement CRUD for tasks
- [x] Add sorting and filtering
- [ ] Add unit tests
