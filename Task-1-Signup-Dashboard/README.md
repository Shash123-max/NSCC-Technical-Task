# Task 1 – Signup Form with Validation and Dashboard

## Overview

This project implements a signup form with client-side validation and a dashboard for displaying registered user details.

The task demonstrates form handling, input validation, password hashing, browser storage, DOM manipulation and dynamic table updates.

---

## Live Deployment

The project is deployed using GitHub Pages and is publicly accessible.

### Live Demo

https://shash123-max.github.io/NSCC-Technical-Task/Task-1-Signup-Dashboard/signup.html

---

## Features

- Username validation
- Email validation using Regular Expression (Regex)
- Password validation
- SHA-256 password hashing
- User data stored using localStorage
- Dynamic user dashboard
- Delete user functionality
- Responsive interface

---

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Web Crypto API
- Browser localStorage

---

## Project Structure

Task-1-Signup-Dashboard/

- signup.html
- signup.js
- style.css
- README.md

---

## Form Validation

The signup form validates three inputs.

### Username

The username cannot be empty.

### Email

The email is validated using a regular expression.

The regular expression used is:

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

This checks that the entered email follows a basic valid email format.

### Password

The password must contain at least 6 characters.

---

## Password Hashing

Before storing a user's password, the password is hashed using SHA-256 through the Web Crypto API.

The hashing process uses crypto.subtle.digest() with the SHA-256 algorithm.

The original plaintext password is not stored in localStorage.

The dashboard displays only part of the generated hash rather than the original password.

Note: This implementation is intended for the recruitment task. A production authentication system would normally use a password-specific hashing algorithm such as Argon2, bcrypt or scrypt with appropriate salting and secure server side storage.

---

## Local Storage

User information is stored in the browser using localStorage.

The stored data contains:

- Username
- Email
- Hashed password

JSON.stringify() is used when storing the user array, while JSON.parse() is used when retrieving it.

---

## Dashboard

After a successful signup, the registered user is dynamically displayed in a table.

The dashboard contains:

- Username
- Email
- Partial representation of the hashed password
- Delete button

---

## Delete Functionality

A Delete button is provided for every registered user.

When clicked:

1. The selected user is removed from the stored array.
2. The updated data is saved to localStorage.
3. The dashboard is refreshed.

---

## Responsive Design

The interface includes responsive CSS so that the signup form and dashboard remain usable on smaller screens.

The table is placed inside a horizontally scrollable container when necessary.

---

## Testing

The following cases were tested:

- Empty username
- Invalid email
- Password shorter than 6 characters
- Valid username, email and password
- Password hashing
- User storage
- Dashboard rendering
- Delete functionality
- Data persistence after refresh

---

## Screenshots

Screenshots demonstrating the Task 1 interface and functionality are included in the main project README.

The demonstrated functionality includes:

- Signup form
- Validation
- Successful signup
- Dashboard
- Hashed password
- Delete functionality

---

## Demo Video

A short demonstration video shows the working features of the project.

Demo:

PASTE YOUR GOOGLE DRIVE VIDEO LINK HERE

The demonstration includes:

- Form validation
- Successful signup
- Dashboard
- Hashed password
- Delete functionality

---

## Environment Setup

No external libraries, frameworks or package installations are required.

The project runs directly in a modern web browser.

### Requirements

- Modern web browser
- Internet connection for the deployed version

---

## Running Locally

1. Clone or download the repository.
2. Open the Task-1-Signup-Dashboard folder.
3. Open signup.html in a modern web browser.
4. Enter the required signup information.
5. Submit the form and test the dashboard.

---

## Concepts Learned

Through this task, I worked with:

- HTML forms
- Form submission events
- JavaScript validation
- Regular expressions
- JavaScript functions
- async / await
- Web Crypto API
- SHA-256 hashing
- localStorage
- JSON parsing and stringifying
- DOM manipulation
- Dynamic HTML generation
- Responsive CSS

---

## Challenges and Solutions

### Input Validation

The form needed to reject invalid information before storing user data.

Solution: JavaScript validation was implemented for username, email and password.

### Password Security

The original password should not be stored directly.

Solution: The password is hashed with SHA-256 before being stored.

### Dynamic Dashboard

The dashboard needed to update whenever a user was added or removed.

Solution: JavaScript dynamically generates the table from the data stored in localStorage.

### Delete Functionality

Users needed to be removable from the dashboard.

Solution: Each table row receives a Delete button that removes the corresponding user from storage.

---

## Additional Feature

The Delete functionality was implemented as the brownie-point feature for Task 1.

---

## Deployment

This project is deployed using GitHub Pages from the main branch of the GitHub repository.

### Live Deployment

https://shash123-max.github.io/NSCC-Technical-Task/Task-1-Signup-Dashboard/signup.html

### Deployment Steps

1. The complete source code was pushed to GitHub.
2. GitHub Pages was opened from the repository settings.
3. The main branch was selected as the deployment source.
4. GitHub Pages generated the public deployment.
5. The live deployment link was added to this README.

---

## Repository

https://github.com/Shash123-max/NSCC-Technical-Task

---

## Security Note

This project is a front-end demonstration created for the recruitment task.

SHA-256 hashing is used to demonstrate the required password hashing concept.

For a real-world authentication system, passwords should be processed using a dedicated password-hashing algorithm such as Argon2, bcrypt or scrypt with appropriate salting and secure server-side storage.
