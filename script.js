let hamburgerBtn = document.querySelector(".hamburger-menu");
let nav = document.querySelector("nav");
let bars = document.querySelectorAll(".bar");
let anchors = document.querySelectorAll("a");
let works = Array.from(document.querySelector('.work-list').children);
let navAnchors = [];

for(let i=0; i<=4; i++) {
    navAnchors.push(anchors[i]);
}


// On click mechanism for hamburger menu button

bars.forEach((bar) => {
    bar.addEventListener("click", function() {
        if (nav.style.display === "") {
            nav.style.display = "flex"; // To make the navbar visible upon clicking
            bars[2].style.display = "none"; // To make the 3rd horizontal line disappear
            // Mechanism to rotate the hamburger menu horizontal bars in way that it makes a cross 
            bars[0].style.transform = "rotate(38deg)";
            bars[0].style.transformOrigin = "10%";
            bars[0].style.transition = "0.5s"
            bars[1].style.transform = "rotate(316deg)";
            bars[1].style.transformOrigin = "34%";
            bars[1].style.transition = "0.5s"
        }
        else {
            hideNav();
        }
    })
})


navAnchors.forEach((a) => {
    a.addEventListener("click", hideNav)
})

function hideNav() {
    nav.style.display = "";
    bars[2].style.display = "block";
    // Mechanism to bring the horizontal bars into its original form
    bars[0].style.transform = "rotate(0deg)";
    bars[0].style.transformOrigin = "10%";
    bars[0].style.transition = "0.5s"
    bars[1].style.transform = "rotate(0deg)";
    bars[1].style.transformOrigin = "34%";
    bars[1].style.transition = "0.5s"
}



works.forEach((div) => {
    div.addEventListener('mouseenter', function() {
        // Reset flexGrow for all divs
        works.forEach((d) => {
            d.style.flexGrow = 0;
            d.style.transition = '0.5s';
        });

        // Expand the hovered div
        div.style.flexGrow = 1;
    })
    
    div.addEventListener('mouseleave', function() {
        div.style.flexGrow = 0;
    });

});