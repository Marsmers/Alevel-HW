function createDivElements(arr) {
    const filteredUsers = arr.filter(user => !user.first_name);
    filteredUsers.forEach(user => {
        const userDiv = document.createElement("div");
        userDiv.className = "user";

        const avatarImg = document.createElement("img");
        avatarImg.src = user.avatar_url;
        avatarImg.alt = "Avatar";

        const userIdDiv = document.createElement("div");
        userIdDiv.textContent = `User ID: ${user.user_ID}`;

        const userLoginDiv = document.createElement("div");
        userLoginDiv.textContent = `User Login: ${user.user_login}`;

        userDiv.appendChild(avatarImg);
        userDiv.appendChild(userIdDiv);
        userDiv.appendChild(userLoginDiv);

        usersContainer.appendChild(userDiv);
    });
}

const BASE_URL = 'https://stage-two.i-wp-dev.com/wp-json/v4/'

// const data = {
//     email: "maryan.smerchinskiy@gmail.com",
//     password: "MarSmer@2001!"
// }

// const REGISTRATION_URL = BASE_URL + 'registration'

// const postOptions = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify(data)
// };
// fetch(REGISTRATION_URL, postOptions)
//     .then(response => {return response.json()})
//     .then(data => console.log("Успешный ответ от сервера:", data))
//     .catch(error => console.error("Произошла ошибка:", error));

const jwtToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3N0YWdlLXR3by5pLXdwLWRldi5jb20vIiwiYXVkIjoiaHR0cHM6Ly9zdGFnZS10d28uaS13cC1kZXYuY29tLyIsImlhdCI6MTM1Njk5OTUyNCwibmJmIjoxMzU3MDAwMDAwLCJkYXRhIjp7ImlkIjozMiwidXNlcl9lbWFpbCI6Im1hcnlhbi5zbWVyY2hpbnNraXlAZ21haWwuY29tIiwidXNlcl9wYXNzIjoiTWFyU21lckAyMDAxISJ9fQ.qrPlFJyge0BdaXkw41-8p1MweKGe-0apdjlzTkNGjR4"

const USERS_URL = BASE_URL + 'users'
const getOptions = {
    method: "GET",
    headers: {
        Authorization: `Bearer ${jwtToken}`
    }
};

fetch(USERS_URL, getOptions)
    .then(response => response.json())
    .then(data => createDivElements(data))
    .catch(error => console.log(error))


const USER_URL = BASE_URL + 'user'
const putData = {
    id: "32",
    avatar_url: "https://i.pinimg.com/originals/2a/d2/ec/2ad2ec336d3a46f019607baff0325c8f.png"
};
const putOptions = {
    method: "PUT",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`
    },
    body: JSON.stringify(putData)
};

fetch(USER_URL, putOptions)