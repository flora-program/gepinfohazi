document.addEventListener('DOMContentLoaded', () => {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            displayUser(user);
        })
        .catch(error => console.error('Error fetching user data:', error));

    function displayUser(user) {
        document.getElementById('name').innerText = `Név: ${user.name.first} ${user.name.last}`;
        document.getElementById('email').innerText = `Email: ${user.email}`;
        document.getElementById('phone').innerText = `Telefon: ${user.phone}`;
        document.getElementById('address').innerText = `Cím: ${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.country}`;
        document.getElementById('profile-picture').src = user.picture.large;

        // Példa tapasztalatok és oktatás hozzáadása
        const experienceList = document.getElementById('experience-list');
        experienceList.innerHTML = `
            <li>
                <h3>Senior Fejlesztő - ABC Kft.</h3>
                <p>2020 - Jelenleg</p>
                <p>Feladatok: Webalkalmazások fejlesztése, csapat vezetése, technikai döntések meghozatala.</p>
            </li>
            <li>
                <h3>Junior Fejlesztő - XYZ Kft.</h3>
                <p>2017 - 2020</p>
                <p>Feladatok: Weboldalak karbantartása, új funkciók fejlesztése, hibajavítás.</p>
            </li>
        `;

        const educationList = document.getElementById('education-list');
        educationList.innerHTML = `
            <li>
                <h3>Informatikai BSc - Budapesti Műszaki Egyetem</h3>
                <p>2013 - 2017</p>
            </li>
        `;

        const skillsList = document.getElementById('skills-list');
        skillsList.innerHTML = `
            <li>HTML, CSS, JavaScript</li>
            <li>React, Angular</li>
            <li>Node.js, Express</li>
            <li>Git, Docker</li>
        `;
    }
});
