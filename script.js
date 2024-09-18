fetch("/wolf0023server/header.html")
    .then((response) => response.text())
    .then((data) => document.querySelector("main").insertAdjacentHTML('afterbegin', data))
    .catch((error) => console.error('Error fetching header:', error));
fetch("/wolf0023server/footer.html")
    .then((response) => response.text())
    .then((data) => document.querySelector("main").insertAdjacentHTML('afterend', data))
    .catch((error) => console.error('Error fetching footer:', error));