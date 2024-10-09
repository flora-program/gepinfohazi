document.addEventListener('DOMContentLoaded', () => {
    const resumes = [
        {
            "name": "Kovács János",
            "email": "janos.kovacs@example.com",
            "phone": "+36 30 123 4567",
            "address": "1234 Budapest, Fő utca 1.",
            "experience": [
                {
                    "title": "Senior Fejlesztő",
                    "company": "ABC Kft.",
                    "period": "2020 - Jelenleg",
                    "description": "Webalkalmazások fejlesztése, csapat vezetése, technikai döntések meghozatala."
                },
                {
                    "title": "Junior Fejlesztő",
                    "company": "XYZ Kft.",
                    "period": "2017 - 2020",
                    "description": "Weboldalak karbantartása, új funkciók fejlesztése, hibajavítás."
                }
            ],
            "education": [
                {
                    "degree": "Informatikai BSc",
                    "institution": "Budapesti Műszaki Egyetem",
                    "period": "2013 - 2017"
                }
            ],
            "skills": ["HTML", "CSS", "JavaScript", "React", "Angular", "Node.js", "Express", "Git", "Docker"]
        }
        // További adatok...
    ];

    // Véletlenszerű önéletrajz kiválasztása és megjelenítése az oldal betöltésekor
    const randomResume = resumes[Math.floor(Math.random() * resumes.length)];
    displayResume(randomResume);

    function displayResume(resume) {
        const userContainer = document.getElementById('user-container');
        userContainer.innerHTML = `
            <section id="personal">
                <h2>Személyes adatok</h2>
                <p>Név: ${resume.name}</p>
                <p>Email: ${resume.email}</p>
                <p>Telefon: ${resume.phone}</p>
                <p>Cím: ${resume.address}</p>
            </section>
            <section id="experience">
                <h2>Tapasztalat</h2>
                <ul>
                    ${resume.experience.map(exp => `
                        <li>
                            <h3>${exp.title} - ${exp.company}</h3>
                            <p>${exp.period}</p>
                            <p>${exp.description}</p>
                        </li>
                    `).join('')}
                </ul>
            </section>
            <section id="education">
                <h2>Oktatás</h2>
                <ul>
                    ${resume.education.map(edu => `
                        <li>
                            <h3>${edu.degree} - ${edu.institution}</h3>
                            <p>${edu.period}</p>
                        </li>
                    `).join('')}
                </ul>
            </section>
            <section id="skills">
                <h2>Készségek</h2>
                <ul>
                    ${resume.skills.map(skill => `<li>${skill}</li>`).join('')}
                </ul>
            </section>
        `;

        // Stílusok hozzáadása JavaScript segítségével
        userContainer.style.border = '2px solid #000';
        userContainer.style.padding = '20px';
        userContainer.style.maxWidth = '600px';
        userContainer.style.margin = '20px auto';
        userContainer.style.backgroundColor = '#f9f9f9';
    }
});
