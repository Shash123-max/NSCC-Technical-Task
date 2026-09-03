const form = document.getElementById("signupForm");

const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const userTableBody = document.getElementById("userTableBody");


form.addEventListener("submit", async function (event) {

    event.preventDefault();

    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;


    if (username === "") {
        alert("Username cannot be empty.");
        return;
    }


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }


    if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
    }


    const hashedPassword = await hashPassword(password);


    const user = {
        username: username,
        email: email,
        password: hashedPassword
    };


    const users =
        JSON.parse(localStorage.getItem("users")) || [];


    users.push(user);


    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );


    form.reset();

    displayUsers();

});


async function hashPassword(password) {

    const data =
        new TextEncoder().encode(password);


    const hashBuffer =
        await crypto.subtle.digest(
            "SHA-256",
            data
        );


    const hashArray =
        Array.from(new Uint8Array(hashBuffer));


    const hashHex =
        hashArray
            .map(byte =>
                byte.toString(16).padStart(2, "0")
            )
            .join("");


    return hashHex;
}


function displayUsers() {

    const users =
        JSON.parse(localStorage.getItem("users")) || [];


    userTableBody.innerHTML = "";


    users.forEach(function (user, index) {

        const row =
            document.createElement("tr");


        row.innerHTML = `
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.password.substring(0, 20)}...</td>
            <td>
                <button
                    class="delete-btn"
                    onclick="deleteUser(${index})">
                    Delete
                </button>
            </td>
        `;


        userTableBody.appendChild(row);

    });

}


function deleteUser(index) {

    const users =
        JSON.parse(localStorage.getItem("users")) || [];


    users.splice(index, 1);


    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );


    displayUsers();

}


displayUsers();