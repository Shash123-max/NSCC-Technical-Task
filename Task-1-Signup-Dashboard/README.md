# Task 1 — Signup Form with Validation and Dashboard

## Overview

This project is Task 1 of the SRM NSCC Technical Recruitment Tasks.

It is a Signup Form with client-side validation and a dashboard that displays registered users. The project uses HTML, CSS and JavaScript, with localStorage used to store the user data in the browser.

## Live Demo

https://shash123-max.github.io/NSCC-Technical-Task/Task-1-Signup-Dashboard/signup.html

## Demo Video

A 2-minute demonstration of the project covering both Task 1 and Task 2.

https://drive.google.com/file/d/1w5Ch_frpLBNtZbD50MhNX_JRha2oXeyX/view?usp=drive_link

## Features

- Signup form with Username, Email and Password fields
- Username validation
- Email validation using Regular Expression (Regex)
- Password validation requiring at least 6 characters
- Password hashing using the SHA-256 algorithm
- User details stored using localStorage
- Dashboard displaying registered users
- Displays Username, Email and hashed Password
- Delete button for removing users
- Data remains available after refreshing the page
- Responsive layout for different screen sizes

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Browser localStorage
- Web Crypto API
- SHA-256 hashing
- Regular Expressions

## Form Validation

The form checks the following conditions before creating a user:

### Username

The username field cannot be empty.

### Email

The email address must follow a valid email format using a regular expression.

### Password

The password must contain at least 6 characters.

If any validation fails, the user is shown an alert and the signup process is stopped.

## Password Hashing

The password is not stored as plain text.

After validation, the password is converted into a SHA-256 hash using the browser's Web Crypto API.

Only the generated hash is stored in localStorage and displayed in the dashboard.

## Local Storage

User information is stored in the browser using localStorage.

The stored data contains:

- Username
- Email
- Hashed Password

The data is converted into JSON before being stored.

When the page is opened, the stored users are retrieved and displayed automatically.

## Dashboard

The dashboard displays all registered users in a table.

The table contains:

| Field | Description |
|---|---|
| Username | Registered username |
| Email | Registered email |
| Password | SHA-256 hashed password |
| Action | Delete button |

The delete button removes the selected user from the dashboard and updates localStorage.

## Project Structure

Task-1-Signup-Dashboard/
│
├── signup.html
├── signup.js
├── style.css
└── README.md

## How to Run Locally

1. Download or clone the repository.
2. Open the `Task-1-Signup-Dashboard` folder.
3. Open `signup.html` in a web browser.
4. Enter a username, email and password.
5. Click the Sign Up button.
6. The validated user will appear in the dashboard.

No external server or database is required.

## Environment Setup

The project only requires a modern web browser.

Recommended browsers:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox

No additional packages or dependencies are required.

## Deployment

The project is deployed using GitHub Pages.

The live Task 1 page can be accessed here:

https://shash123-max.github.io/NSCC-Technical-Task/Task-1-Signup-Dashboard/signup.html

## Testing

The following functionality was tested:

- Empty username validation
- Invalid email validation
- Password shorter than 6 characters
- Successful signup
- Password hashing
- User data storage in localStorage
- Dashboard display
- Delete functionality
- Page refresh and data persistence
- Responsive layout

## Concepts Learned

Through this task, I learned and practiced:

- HTML form creation
- Form submission handling
- JavaScript DOM manipulation
- Event listeners
- Input validation
- Regular Expressions
- JSON conversion
- Browser localStorage
- Asynchronous JavaScript
- Web Crypto API
- SHA-256 hashing
- Dynamic HTML table generation
- Responsive CSS

## Challenges and Solutions


### Form Validation

One of the main challenges was making sure incorrect input was rejected before storing user information.

This was solved by validating each input field when the form is submitted.

### Password Storage

Storing passwords as plain text is not a good practice.

To address this, the password is hashed using SHA-256 before being stored in localStorage.

### Dynamic Dashboard

The dashboard needs to update whenever a user is added or deleted.

This was handled by storing the users as an array in localStorage and regenerating the table whenever the data changes.

## Additional Features

The project includes the following additional functionality:

- Delete user functionality
- Persistent data using localStorage
- Password hashing
- Responsive interface
- Automatic dashboard loading when the page opens

## Security Note

This project is intended as a frontend learning project.

SHA-256 hashing demonstrates the concept of not storing the password directly, but a real production authentication system should use a secure backend, proper password hashing algorithms such as Argon2 or bcrypt, secure session management and a database.

## Repository

https://github.com/Shash123-max/NSCC-Technical-Task

## Submission

This task was completed as part of the SRM NSCC Technical Recruitment Technical Domain tasks.

The project includes the source code, documentation, deployment and a demonstration video covering both tasks.

## Screenshots

### Signup Validation Error
<img width="1920" height="1080" alt="स्क्रीनशॉट 2026-09-07 155845" src="https://github.com/user-attachments/assets/d73de687-54b8-4918-a9c5-9f0b99c83569" />


This screenshot shows the validation message displayed when invalid input is submitted.

### User Added Successfully
<img width="1920" height="1080" alt="स्क्रीनशॉट 2026-09-07 160016" src="https://github.com/user-attachments/assets/a5ec9aa2-9eab-47ca-8a9b-7f0f9d57d70a" />


This screenshot shows a user successfully added to the dashboard after passing validation.

### Signup Dashboard
<img width="1920" height="1080" alt="स्क्रीनशॉट 2026-09-07 155653" src="https://github.com/user-attachments/assets/1f5cd174-76b5-49bb-a52b-216a711b252d" />

This screenshot shows the dashboard displaying the registered user details.
