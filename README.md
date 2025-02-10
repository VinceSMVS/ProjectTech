# ProjectTech

# Chapters

## JavaScript ES6 (herhaling)
## API Basics (fetch, async/await)
async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    const studenten = data.studenten;
    const lijst = document.querySelector('ul')
    studenten.forEach((student) => {
        console.log(student);
        const inhoud = document.createElement('li');
        lijst.appendChild(inhoud);
        inhoud.textContent = student.naam;

    })
}
fetchData("pt-studenten.json")

## JSON
## GitHub basics
## HTTP en CLI
## Formulieren
## Node.js en NPM
## Express
## Templating (EJS)
## Formulieren met Node.js
## Concept
## MongoDB
## CRUD
## Formulieren naar MongoDB
## Github voor teams
## Coding standards
## ListJS
## API met loading state en foutafhandeling
## Security
## Linters
