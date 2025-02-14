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
De opdracht was om een formulier te maken met alleen HTML / CSS, dus geen JavaScript.

## Node.js NPM Express & EJS
Ik heb zelfstandig deze video gevolgd: [https://www.youtube.com/watch?v=SccSCuHhOw0](https://www.youtube.com/watch?v=SccSCuHhOw0). Dit leek mij handig omdat het express en EJS in 1 video behandelde. 

Ik begon met het oefenen met het maken van routes en een 404. Nadat ik dit begrepen had ging ik aan de slag met wat EJS partials. Dit had ik vrij snel onder de knie en na dit gedaan te hebben kon ik verder met de variabelen dmv EJS dynamisch te maken. Uiteindelijk heb ik een formulier kunnen maken wat dynamisch de gebruikersnaam laat zien welke ingevoerd is in het formulier. 

Ik wil nog verder oefenen met formulieren en een beter begrip krijgen van het opslaan van de JSON die aangemaakt wordt bij het aanmaken van een gebruiker.

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
