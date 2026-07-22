# Student-Performance-Analytics-Portal-Week-5

# EduTrack — Student Performance Analytics Portal

A fully responsive front-end web application built using HTML5, CSS3, and JavaScript as part of a Web Development Internship — Weeks 5.

---

## 📌 Project Overview

EduTrack is a web-based Student Performance Analytics Portal designed to help educators and administrators monitor student academic performance, manage student records, generate performance reports, and visualize data through interactive charts.

---

## 📄 Pages

| File | Page | Description |
|------|------|-------------|
| `login.html` | Login | Login form with role selector, session auth, validation |
| `register.html` | Register | Registration with password strength meter, localStorage |
| `forgot-password.html` | Forgot Password | Email-based reset request |
| `reset-password.html` | Reset Password | New password with strength meter |
| `index.html` | Home | Animated stats, recent activity, quick links |
| `dashboard.html` | Dashboard | Charts, progress bars, top students table |
| `admin-dashboard.html` | Admin Dashboard | Red theme, 6 cards, department overview, teacher table |
| `teacher-dashboard.html` | Teacher Dashboard | Amber theme, courses, pending reviews, student table |
| `student-dashboard.html` | Student Dashboard | Blue theme, GPA, schedule, assignments table |
| `analytics.html` | Analytics | 5 Chart.js charts, export options, activity and notification widgets |
| `report.html` | Performance Report | Grade distribution, subject scores, term history |
| `students.html` | Student Records | Advanced search, filter, pagination, export, registration form |
| `profile.html` | Student Profile | Dynamic profile loaded from URL parameter |
| `profile-manage.html` | Profile Management | 4 tabs: Personal Info, Security, Preferences, Notifications |
| `about.html` | About | Mission, platform stats, features, team |
| `contact.html` | Contact | Contact form with validation |

---

## ✅ Week 5 — Advanced Features and Data Management

- [x] Advanced Search and Filter System with 5 filter fields
- [x] Active filter tags that can be removed individually
- [x] Pagination with page numbers, previous and next buttons
- [x] Export to CSV — real downloadable file
- [x] Export to PDF — print dialog
- [x] 5 Interactive Charts using Chart.js
- [x] Charts update on dark mode toggle
- [x] Subject chart filters by academic year
- [x] Recent Activity Widget with timeline design
- [x] Notification Widget with mark as read
- [x] Improved form validation with live ✅ ❌ icons
- [x] Dedicated Analytics page
- [x] Performance optimizations

---

## 📊 Interactive Charts — analytics.html

| Chart | Type | Data |
|-------|------|------|
| GPA Trend | Line | Last 6 semesters average GPA |
| Grade Distribution | Doughnut | A, B, C, D, F percentage breakdown |
| Department Enrollment | Bar | Students per department |
| Monthly Attendance | Multi-line | 4 year groups Jan–Jun |
| Subject Performance | Bar | Average scores per subject, filterable by year |

---

## ⚙️ Features

**Authentication**
- Login with email and password validation
- Role selector — Administrator, Teacher, Student
- Redirects to role-specific dashboard after login
- sessionStorage for login state
- Auth guard on every page — redirects to login if not authenticated
- Sign Out button in sidebar on every page
- Register with localStorage to save accounts
- Forgot password and reset password flow

**Role-Based Navigation**
- Administrator — red sidebar, admin menu items
- Teacher — amber sidebar, teacher menu items
- Student — blue sidebar, student menu items
- Role saved to localStorage, applied on every page automatically

**Dark Mode**
- Toggle button in topbar on every page
- Applies instantly across all elements
- Saved to localStorage — persists after browser close
- Charts rebuild with dark-friendly colors when toggled

**Dashboard Charts**
- Built with Chart.js CDN
- Line chart, doughnut chart, bar chart, multi-line chart
- Responsive — resize with window
- Interactive tooltips on hover
- Subject chart updates dynamically based on year dropdown

**Student Records**
- 10 students with full data
- 11 column table
- Live search bar with row highlighting
- Status chip filters — All, Active, New, Warning, At-Risk
- Advanced filter panel — department, year, GPA range, attendance
- Active filter tags — removable individually
- Sortable columns — click header to sort ascending or descending
- Pagination — page buttons, prev/next, record count
- Export to CSV — downloads real file
- Export to PDF — opens print dialog
- View button opens dynamic student profile
- Registration form with improved live validation

**Form Validation — Week 5**
- Live ✅ ❌ icons appear on each field as you type
- Validation on blur — checks when you leave the field
- Better error messages explaining exactly what is wrong
- Student ID format validated — must be STU-YYYY-XXXX
- All errors clear automatically when fixed

**Notifications**
- Bell icon with unread count badge in topbar
- Panel slides in from right
- 6 notifications with icons and timestamps
- Unread items highlighted in blue
- Click any notification to mark as read
- Mark all read button
- Notification widget on Analytics page

**Responsive Design**
- Desktop — full sidebar and content layout
- Tablet — sidebar narrows, charts stack
- Mobile — hidden sidebar, hamburger button, bottom navigation bar
- All grids and charts resize with screen width

---

## 📁 Folder Structure

```
edutrack-portal/
├── login.html
├── register.html
├── forgot-password.html
├── reset-password.html
├── index.html
├── dashboard.html
├── admin-dashboard.html
├── teacher-dashboard.html
├── student-dashboard.html
├── analytics.html
├── report.html
├── students.html
├── profile.html
├── profile-manage.html
├── about.html
├── contact.html
├── README.md
├── css/
│   └── style.css
└── js/
    ├── nav.js
    ├── dashboard.js
    ├── students.js
    ├── contact.js
    ├── theme.js
    ├── notifications.js
    └── role.js
```

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| HTML5 | Page structure and semantic markup |
| CSS3 | Styling, Flexbox, Grid, animations, responsive design |
| JavaScript ES6 | DOM manipulation, validation, auth, sorting, filtering, pagination, export |
| Chart.js 4.4.0 | Interactive data visualization charts |
| localStorage | Theme, role, registered users, student data |
| sessionStorage | Login session authentication |
| Google Fonts — Inter | Typography |
| VS Code | Development environment |
| GitHub | Version control and project hosting |

---

## 🔐 Authentication Flow

```
login.html
  ├── Select role — Administrator / Teacher / Student
  ├── Enter credentials
  ├── Correct → sessionStorage + localStorage role saved
  │     ├── Administrator → admin-dashboard.html
  │     ├── Teacher       → teacher-dashboard.html
  │     └── Student       → student-dashboard.html
  ├── Wrong credentials → red error banner
  └── Sign Out → sessionStorage cleared → login.html

register.html   → localStorage.edutrack_users
forgot-password → localStorage.edutrack_reset_email
reset-password  → localStorage.edutrack_password
students form   → localStorage.edutrack_students
```

---

## 📝 What I Learned

**Week 5** — Chart.js for interactive data visualizations, dynamic chart updates, CSV file export using Blob API, multi-condition filter system with active tags, pagination logic, live form validation with visual feedback icons.

---

## 👤 Author

| Field | Details |
|-------|---------|
| **Name** | Zeeshan Haider |
| **Institution** | Abasyn University Islamabad Campus |
| **Internship** | Web Development Internship — week 5 @Codiora House (Private) Limited|
| **Project** | EduTrack Student Performance Analytics Portal |
| **Year** | 2026 |

---
