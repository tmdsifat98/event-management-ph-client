# All Events 🎉

**All Events** is a modern event management web application that allows users to create, explore, join, and manage events seamlessly. Built with the **MERN Stack**, this platform offers a dynamic experience with features like authentication, filtering, searching, and role-based event operations.

---

## 🌟 Features

- 🔐 **Custom Authentication**
  - Email & password-based login (JWT optional in future)
  - Authentication state stored in `localStorage`
  - Login/Logout state reflected instantly in UI

- 🎉 **Event Creation**
  - Authenticated users can add new events
  - Fields: Title, Organizer Name, Date & Time, Location, Description
  - Default attendee count: `0`

- 📆 **Event Listing**
  - View all events on the homepage
  - Events sorted by date (latest first)

- 🔍 **Search & Filter**
  - Search events by title
  - Filter options:
    - Today
    - Current Week
    - Last Week
    - Current Month
    - Last Month

- 🧾 **Event Details Page**
  - Full information view with join option
  - Displays description, location, date & time, organizer, and attendees

- 🙋 **Join Event**
  - Logged-in users can join events (only once per event)
  - Attendee count increases after successful join

- 👤 **My Events (Private Route)**
  - View events created by the logged-in user
  - Update or Delete options with modal and confirmation

- 🖼️ **Upcoming Events Section**
  - Beautifully styled event cards
  - Scroll-based carousel or grid display

---

## 🛠️ Technologies Used

### 🔹 Frontend:
- React
- Tailwind CSS
- React Router DOM
- Axios
- SweetAlert2
- React Icons

### 🔹 Backend:
- Node.js
- Express.js
- MongoDB (Native driver, no Mongoose used)
- CORS & JSON middleware

### 🔹 Other Tools:
- Moment.js (optional for date filtering)
- React Context API for Auth state
- LocalStorage for persisting login

---

## 🗂️ Folder Structure Highlights

```bash
client/
├── components/
├── pages/
│   ├── Home.jsx
│   ├── Events.jsx
│   ├── AddEvent.jsx
│   ├── MyEvent.jsx
│   ├── EventDetails.jsx
├── hooks/
│   ├── useAuth.jsx
│   ├── useAxiosSecure.jsx
│   ├── useAxiosLocal.jsx
├── context/
│   └── AuthContext.jsx
│   ├── ContextProvider.js
│   ├── ThemeProvider.js

server/
├── index.js
```
---

## 🛠️ Local Development Setup

Follow these steps to run **All Events** on your local machine:

---

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/all-events.git
cd all-events
npm install
npm run dev
```
