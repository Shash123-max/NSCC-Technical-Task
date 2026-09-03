# NSCC Technical Task

A web development project created for the SRM NSCC technical recruitment task.

## Tasks Completed

### Task 1: Signup Form and Dashboard

The signup page allows users to create an account by entering:

* Username
* Email
* Password

The form validates the entered information before storing it.

### Features

* Username cannot be empty
* Email validation using regular expressions
* Password must contain at least 6 characters
* Password is hashed using SHA 256 before storage
* User details are stored using localStorage
* Registered users are displayed in a dashboard table
* Users can delete entries from the dashboard
* Stored users remain available after refreshing the page

## Task 2: Personal Introduction Page

The portfolio page introduces me and showcases my interests, hobbies and skills.

### Features

* Personal introduction
* Profile photograph
* Interests and hobbies section
* Skills section
* Responsive design for desktop and mobile devices
* Futuristic animated user interface
* Dark mode and light mode
* Selected theme is saved using localStorage
* Navigation between the portfolio and signup dashboard

## Technologies Used

* HTML
* CSS
* JavaScript
* Browser localStorage
* Web Crypto API

## How to Run

1. Download or clone this repository.
2. Open the project folder.
3. Open `index.html` in a web browser.
4. Use the `Signup Dashboard` button to access Task 1.
5. Use the `Back to Portfolio` button to return to Task 2.

No additional software or dependencies are required.

## Additional Features

* Delete functionality in the signup dashboard
* Dark and light mode toggle
* Theme preference persistence using localStorage
* Responsive layout
* Animated background elements
* Navigation between both tasks

## Concepts Learned

* HTML page structure and forms
* CSS styling and responsive design
* JavaScript DOM manipulation
* Form validation
* Regular expressions
* Event handling
* localStorage
* Password hashing with SHA 256
* CSS animations
* Responsive web design
* Light and dark themes

## Project Structure

```text
NSCC Technical Task
│
├── signup.html
├── signup.js
├── style.css
├── index.html
├── portfolio.css
├── README.md
│
└── images
    └── profile.jpg
```

## Demo

A short demonstration video showing the features of both tasks is included as part of the submission.
