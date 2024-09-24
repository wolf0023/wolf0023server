fetch("../include/header.html")
    .then((response) => response.text())
    .then((data) => document.querySelector("#header").insertAdjacentHTML("afterbegin", data))
    .catch((error) => console.error('Error fetching header:', error));
fetch("../include/footer.html")
    .then((response) => response.text())
    .then((data) => document.querySelector("#footer").insertAdjacentHTML("afterbegin", data))
    .catch((error) => console.error('Error fetching footer:', error));
fetch("../include/nav.html")
    .then((response) => response.text())
    .then((data) => document.querySelector("#nav").insertAdjacentHTML("afterbegin", data))
    .catch((error) => console.error('Error fetching footer:', error));