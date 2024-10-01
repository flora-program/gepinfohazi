document.addEventListener("DOMContentLoaded", function() {
    const userContainer = document.getElementById('user-container');
    const fetchButton = document.getElementById('fetch-user');

    fetchButton.addEventListener('click', fetchRandomUser);

    function fetchRandomUser() {
        fetch('https://randomuser.me/api/')
            .then(response => response.json())
            .then(data => {
                const user = data.results[0];
                displayUser(user);
            })
            .catch(error => console.error('Error fetching user:', error));
    }

    function displayUser(user) {
        userContainer.innerHTML = `
            <h2>${user.name.first} ${user.name.last}</h2>
            <p>Email: ${user.email}</p>
            <p>Telefon: ${user.phone}</p>
            <p>Cím: ${user.location.street.name} ${user.location.street.number}, ${user.location.city}, ${user.location.country}</p>
            <img src="${user.picture.large}" alt="User Picture">
        `;
    }
});
