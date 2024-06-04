const hamburgerMenu = document.getElementById('hamburger-menu');
const toggleDiv = document.getElementsByClassName('toggle-element')[0];

hamburgerMenu.addEventListener("click", function () {
    // console.log(toggleDiv.style.display)
    if (toggleDiv.style.display === "") {
        toggleDiv.style.display = "flex";
    } else {
        toggleDiv.style.display = "";
    }
})