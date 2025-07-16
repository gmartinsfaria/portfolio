
document.addEventListener("DOMContentLoaded", function () {
    const d = new Date();
    let year = d.getFullYear();
    console.log("Estamos no ano " + year);
    document.getElementById("currentYear").innerHTML = year;
});