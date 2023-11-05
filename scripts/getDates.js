const currentYear = new Date().getFullYear();
const yearElement = document.getElementById("year");
if (yearElement) {
    yearElement.textContent = currentYear;
}

const lastModified = document.lastModified;
const lastModifiedElement = document.getElementById("lastModified");
if (lastModifiedElement) {
    lastModifiedElement.textContent = "Last Modified: " + lastModified;
}