# NSCC Technical Recruitment Task

## Personal Introduction Page & Signup Dashboard

A responsive personal introduction website with an interactive Dark/Light mode, accompanied by a client-side signup form and dashboard with validation, password hashing, persistent storage, and user deletion.

This project was developed as part of the **NSCC Technical RecruitmentTechnical Domain Task** for first-year students.

---

## Table of Contents

* [Project Overview](#project-overview)
* [Features](#features)
* [Technologies Used](#technologies-used)
* [Project Structure](#project-structure)
* [Task 1 — Signup Form with Validation and Dashboard](#task-1--signup-form-with-validation-and-dashboard)
* [Task 2 — Personal Introduction Page](#task-2--personal-introduction-page)
* [How the Application Works](#how-the-application-works)
* [Password Security](#password-security)
* [Responsive Design](#responsive-design)
* [Dark/Light Mode](#darklight-mode)
* [Challenges and Solutions](#challenges-and-solutions)
* [Concepts Learned](#concepts-learned)
* [Additional Features](#additional-features)
* [How to Run](#how-to-run)
* [Testing](#testing)
* [Limitations](#limitations)
* [Future Improvements](#future-improvements)
* [Demo Video](#demo-video)
* [Conclusion](#conclusion)

---

## Project Overview

This project consists of two connected web applications:

### 1. Signup Dashboard

A signup form that allows users to enter:

* Username
* Email
* Password

The application validates the submitted information, hashes the password using the browser's Web Crypto API, and stores the resulting user information in `localStorage`.

The stored users are then displayed dynamically in a dashboard table. Users can also be deleted from the dashboard.

### 2. Personal Introduction Page

A responsive portfolio style personal introduction page containing:

* My name
* A personal introduction
* My photograph
* Interests and hobbies
* Skills
* Interactive animations
* Dark/Light mode

The selected theme is saved using `localStorage`, allowing it to remain unchanged after refreshing the page.

---

# Features

## Signup Dashboard

* Username validation
* Email validation using Regular Expressions
* Password length validation
* Password hashing using SHA-256
* User data persistence using `localStorage`
* Dynamic dashboard table
* Delete user functionality
* Responsive layout
* Form reset after successful signup
* Navigation back to the personal introduction page

## Personal Introduction Page

* Responsive personal portfolio layout
* Personal introduction
* Profile photograph
* Interests and hobbies section
* Skills section
* Animated background
* Animated profile card
* Hover effects
* Dark/Light mode toggle
* Persistent theme selection using `localStorage`
* Navigation to the Signup Dashboard

---

# Technologies Used

| Technology          | Purpose                                   |
| ------------------- | ----------------------------------------- |
| HTML5               | Page structure and content                |
| CSS3                | Styling, animations and responsive design |
| JavaScript          | Application logic and DOM manipulation    |
| Regular Expressions | Email validation                          |
| Web Crypto API      | SHA-256 password hashing                  |
| localStorage        | Persistent browser-side data storage      |
| JSON                | Storing and retrieving user data          |

No external frontend framework or backend service is required for this project.

---

# Project Structure

```text
NSCC-Technical-Task/
│
├── index.html
├── portfolio.css
├── profile.jpg
│
├── signup.html
├── style.css
└── signup.js
```

### File Description

**`index.html`**

Contains the personal introduction page.

**`portfolio.css`**

Contains the styling, animations, responsive layouts, theme variables and Dark/Light mode styles for the personal page.

**`profile.jpg`**

Personal profile photograph displayed on the introduction page.

**`signup.html`**

Contains the signup form and dashboard table.

**`style.css`**

Contains the styling and responsive layout for the signup dashboard.

**`signup.js`**

Handles form validation, password hashing, `localStorage`, dynamic table generation and user deletion.

---

# Task 1 — Signup Form with Validation and Dashboard

The first task required a signup form containing a username, email and password, followed by validation and storage of valid user information.

## Form Validation

### Username

The username cannot be empty.

```javascript
if (username === "") {
    alert("Username cannot be empty.");
    return;
}
```

The `.trim()` method is used before validation so that a username containing only spaces is also treated as empty.

### Email

The email is validated using a Regular Expression:

```javascript
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
```

The expression checks for a basic email structure containing:

* Text before `@`
* An `@` symbol
* Text after `@`
* A `.`
* A domain

The regular expression is then tested using:

```javascript
emailRegex.test(email)
```

### Password

The password must contain at least six characters.

```javascript
if (password.length < 6) {
    alert("Password must be at least 6 characters.");
    return;
}
```

---

# Password Security

The assignment requires the password to be hashed before it is stored.

Instead of directly storing the password entered by the user, the project uses the browser's built-in **Web Crypto API**.

The password is first converted into encoded data:

```javascript
const data = new TextEncoder().encode(password);
```

The encoded data is then passed to:

```javascript
crypto.subtle.digest("SHA-256", data);
```

This produces a SHA-256 hash.

The resulting binary hash is converted into a hexadecimal string:

```javascript
const hashArray =
    Array.from(new Uint8Array(hashBuffer));

const hashHex =
    hashArray
        .map(byte =>
            byte.toString(16).padStart(2, "0")
        )
        .join("");
```

The original password is therefore not placed inside the stored user object.

The user object contains:

```javascript
const user = {
    username: username,
    email: email,
    password: hashedPassword
};
```

The hashed value is then stored in `localStorage`.

### Important Security Note

This implementation is intended for the requirements of the assignment and is **not a production authentication system**.

`localStorage` is client-side storage and should not be used for storing sensitive authentication information in a real-world application.

For a production application, password authentication would normally be handled on a secure backend using a password-specific hashing algorithm such as Argon2, bcrypt or scrypt, along with appropriate authentication and security mechanisms.

---

# Persistent User Storage

The project uses the browser's `localStorage` to store registered users.

Existing users are retrieved using:

```javascript
const users =
    JSON.parse(localStorage.getItem("users")) || [];
```

If there are no existing users, an empty array is created.

After adding a new user:

```javascript
users.push(user);
```

The updated array is converted into a JSON string:

```javascript
JSON.stringify(users)
```

and stored using:

```javascript
localStorage.setItem("users", JSON.stringify(users));
```

This allows the users to remain available even after refreshing the page.

---

# Dynamic Dashboard

The dashboard table is generated using JavaScript.

The `displayUsers()` function:

1. Retrieves users from `localStorage`.
2. Clears the existing table.
3. Iterates through the users.
4. Creates a table row for each user.
5. Adds the user's information to the row.
6. Adds a Delete button.
7. Appends the row to the table.

The password displayed in the table is only a shortened portion of the stored hash:

```javascript
user.password.substring(0, 20)
```

The original plaintext password is never displayed.

---

# Delete Functionality

The Delete functionality was implemented as the brownie subtask.

When the Delete button is clicked, the corresponding user is removed from the array:

```javascript
users.splice(index, 1);
```

The updated array is then saved back into `localStorage`, and the dashboard is refreshed.

This means that deleting a user also removes that user from persistent browser storage.

---

# Task 2 — Personal Introduction Page

The second task required a responsive personal introduction webpage.

The page contains:

* Name
* Personal introduction
* Photograph
* Interests
* Hobbies
* Skills
* Interactive UI elements

The page is designed around a modern dark interface with glowing elements, animations and a responsive layout.

---

# Personal Information

The introduction page includes information about my interests, including:

* Podcasts
* Pharmaceutical research
* Fiction
* Football
* Cooking
* Evening walks

The skills section includes:

* Research
* Critical Thinking
* Problem Solving
* Adaptability
* Curiosity

The intention was to make the page represent both my technical interests and my personality rather than making it only a collection of technical skills.

---

# Responsive Design

The website is designed to work across desktop and mobile screen sizes.

CSS media queries are used to modify the layout on smaller screens.

For example:

```css
@media (max-width: 750px) {
    ...
}
```

On smaller screens:

* The hero section changes from a row layout to a column layout.
* The profile card expands to the available width.
* The interest cards change from two columns to one column.
* Section spacing is reduced.
* Typography and table spacing are adjusted.

The signup dashboard also has a mobile breakpoint:

```css
@media (max-width: 600px) {
    ...
}
```

The table is placed inside a horizontally scrollable container using:

```css
.table-container {
    overflow-x: auto;
}
```

This prevents a wide table from breaking the mobile layout.

---

# Dark/Light Mode

The Dark/Light mode was implemented as the brownie subtask for the personal introduction page.

The theme is changed by adding or removing the `light` class from the `<body>` element:

```javascript
document.body.classList.toggle("light");
```

CSS variables are then used to change the colors of the page.

For example, the default theme defines:

```css
:root {
    --background: #050509;
    --surface: rgba(255, 255, 255, 0.05);
    --text: #f5f5f5;
}
```

The light theme overrides those variables:

```css
body.light {
    --background: #f4f7fb;
    --surface: rgba(0, 0, 0, 0.04);
    --text: #111118;
}
```

This approach means that the same components can use the theme variables without requiring completely separate styles for both themes.

---

# Theme Persistence

The selected theme is saved in `localStorage`.

When the user selects Light Mode:

```javascript
localStorage.setItem("theme", "light");
```

When Dark Mode is selected:

```javascript
localStorage.setItem("theme", "dark");
```

When the page loads, the saved value is retrieved:

```javascript
const savedTheme = localStorage.getItem("theme");
```

If the saved theme is Light Mode, the `light` class is applied automatically:

```javascript
if (savedTheme === "light") {
    document.body.classList.add("light");
}
```

Therefore, the selected theme remains persistent across page refreshes.

---

# Challenges and Solutions

## 1. Storing Multiple Users

### Challenge

`localStorage` stores values as strings, while multiple users need to be stored as structured data.

### Solution

Users are maintained inside a JavaScript array.

`JSON.stringify()` is used when storing the array, while `JSON.parse()` is used when retrieving it.

This allowed multiple user records to be stored under a single `localStorage` key.

---

## 2. Preventing Plaintext Password Storage

### Challenge

The task specifically required passwords to be hashed before being stored.

### Solution

I researched and implemented the browser's Web Crypto API.

The password is processed using SHA-256 before being added to the user object.

This helped me understand the difference between the value entered by the user and the value ultimately stored by the application.

---

## 3. Updating the Dashboard Automatically

### Challenge

The dashboard should reflect changes to the stored user data without manually editing the HTML.

### Solution

I created a `displayUsers()` function that dynamically generates table rows using DOM manipulation.

It is called after:

* Page load
* Successful signup
* User deletion

This keeps the dashboard synchronized with the stored data.

---

## 4. Making the Interface Responsive

### Challenge

A layout that looks good on a desktop can become difficult to use on a small mobile screen.

### Solution

CSS media queries were used to change layouts at smaller screen widths.

For example, the interests section changes from two columns to one column on mobile devices.

The dashboard table also becomes horizontally scrollable when necessary.

---

## 5. Persisting the Selected Theme

### Challenge

Simply changing the CSS theme would cause the selection to disappear after refreshing the page.

### Solution

The selected theme is stored in `localStorage`.

When the page loads, JavaScript checks the stored value and applies the corresponding theme.

---

# Concepts Learned

While completing this project, I worked with and gained a better understanding of:

### HTML

* Semantic page structure
* Forms
* Labels and inputs
* Tables
* Navigation links
* Image elements

### CSS

* CSS variables
* Flexbox
* CSS Grid
* Media queries
* Responsive design
* Transitions
* Keyframe animations
* Hover effects
* `clamp()` for responsive typography

### JavaScript

* Variables and constants
* Functions
* Event listeners
* Form submission events
* `preventDefault()`
* DOM manipulation
* Dynamic element creation
* Template literals
* Arrays
* Array methods
* Async functions
* Promises

### Browser APIs

* `localStorage`
* Web Crypto API
* `TextEncoder`

### Data Handling

* JSON
* `JSON.stringify()`
* `JSON.parse()`

### Validation

* Input validation
* Regular expressions
* Password length checks

---

# Additional Features

In addition to the basic requirements, the following features were implemented:

* Delete functionality in the signup dashboard
* Dark/Light mode
* Persistent theme selection
* Animated background
* Floating profile card
* Hover animations
* Responsive mobile layout
* Navigation between the portfolio and signup dashboard
* Mobile-friendly horizontally scrollable table

---

# How to Run

This project does not require a backend server or database.

### Option 1 — Open Directly

1. Download or clone the repository.
2. Make sure all project files are in the correct locations.
3. Open `index.html` in a modern web browser.
4. Use the **Signup Dashboard** button to access the signup application.

### Option 2 — Use VS Code Live Server

1. Open the project folder in Visual Studio Code.
2. Install the **Live Server** extension if it is not already installed.
3. Right-click `index.html`.
4. Select **Open with Live Server**.
5. The project will open in the browser.

Using Live Server is recommended during development because it provides a convenient local web server environment.

---

# Testing

The following test cases can be used to verify the application.

## Signup Form

| Test                               | Expected Result                   |
| ---------------------------------- | --------------------------------- |
| Empty username                     | Validation error                  |
| Invalid email                      | Validation error                  |
| Password shorter than 6 characters | Validation error                  |
| Valid username, email and password | User is stored and displayed      |
| Refresh after signup               | User remains in dashboard         |
| Delete user                        | User is removed                   |
| Multiple users                     | All users appear in the dashboard |

## Password Storage

After creating a user, browser developer tools can be used to inspect Local Storage.

The stored password value should be a SHA-256 hexadecimal hash rather than the original password.

## Theme

| Test                  | Expected Result           |
| --------------------- | ------------------------- |
| Click theme button    | Theme changes             |
| Refresh in Light Mode | Light Mode remains active |
| Refresh in Dark Mode  | Dark Mode remains active  |

## Responsive Design

The website should be tested at both desktop and mobile screen widths.

The layout should adapt without requiring horizontal page scrolling.

---

# Limitations

This project is intentionally a client-side implementation based on the requirements of the first-year task.

There is no backend server or external database.

The signup data is stored in the browser's `localStorage`, which means it is specific to the browser and device being used.

The password hashing implementation demonstrates the requested hashing concept, but it should not be considered a complete production authentication system.

---

# Future Improvements

If this project were expanded beyond the recruitment task, I would consider:

* Adding a backend API
* Using a proper database
* Implementing real user authentication
* Using secure server-side password hashing
* Adding stronger form validation
* Adding unique user IDs
* Adding duplicate email detection
* Adding improved error messages instead of browser alerts
* Adding accessibility improvements
* Adding a proper authentication/session system
* Deploying the application online

---

# Demo Video

A short demonstration video will show:

1. The personal introduction page
2. Responsive layout
3. Dark/Light mode
4. Theme persistence after refresh
5. Navigation to the Signup Dashboard
6. Form validation
7. Successful signup
8. Dashboard user display
9. Password hash storage
10. Delete functionality

**Demo Video:** `https://drive.google.com/file/d/1w5Ch_frpLBNtZbD50MhNX_JRha2oXeyX/view?usp=drive_link`

---

# Screenshots

Screenshots of the completed application can be added here.

### Personal Introduction Page

<img width="1920" height="1080" alt="स्क्रीनशॉट 2026-09-07 155233" src="https://github.com/user-attachments/assets/e873dc9c-68a1-4886-a012-4ebc80fad356" />


### Light Mode

`<img width="1920" height="1080" alt="स्क्रीनशॉट 2026-09-07 155346" src="https://github.com/user-attachments/assets/f3885084-c935-483e-a6f0-a40629628484" />




`

### Signup Dashboard

 <img width="1920" height="1080" alt="स्क्रीनशॉट 2026-09-07 155346" src="https://github.com/user-attachments/assets/d6483d19-2d9e-4aaf-aa3d-a576b08fc510" />

### Validation

<img width="1920" height="1080" alt="स्क्रीनशॉट 2026-09-07 155845" src="https://github.com/user-attachments/assets/eeb7b545-eab7-4ff8-afc0-d266bc270c59" />

### User Dashboard

<img width="1920" height="1080" alt="स्क्रीनशॉट 2026-09-07 160016" src="https://github.com/user-attachments/assets/20a98f74-6bec-432b-a8e3-96e6f1138e82" />


---

# GitHub Repository

**Repository:** `https://github.com/Shash123-max/NSCC-Technical-Task`

---

# Conclusion

This project helped me apply HTML, CSS and JavaScript to a practical problem rather than using them only as isolated concepts.

The signup application gave me experience with form validation, regular expressions, asynchronous JavaScript, password hashing, browser storage and DOM manipulation.

The personal introduction page allowed me to explore responsive design, CSS variables, animations, UI interactions and persistent theme preferences.

One of the main things I learned from the project was that building a feature is only part of the process. Understanding how the feature works, testing edge cases, debugging problems and being able to explain the implementation are equally important.

The project was developed with the goal of meeting the NSCC requirements while also demonstrating an understanding of the underlying web development concepts.
