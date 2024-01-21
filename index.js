let menu = document.getElementById("menu");

let sidebar = document.getElementById("main");

let body = document.getElementsByTagName("body");

let btn = document.querySelectorAll(".signin");

let scroll = document.querySelector('.image-container');

let containers = document.querySelectorAll(".container");

let input = document.querySelector("#input");
let checklist = document.querySelector("#inputchecklist");

// ---------------------------------------------------------------------------------------------------------------------
let slides = document.querySelectorAll(".slide");

let prev = document.querySelector(".left");
let next = document.querySelector(".right");
let flag = 0;

slides[0].style.display = "block";

prev.addEventListener("click", function () {
    flag = flag - 1;
    updateSlide();
});

next.addEventListener("click", function () {
    flag = flag + 1;
    updateSlide();
});


function updateSlide() {
    if (flag < 0) {
        flag = slides.length - 1;
    } else if (flag >= slides.length) {
        flag = 0;
    }
    for (let i = 0; i < slides.length; i++) {
        if (i === flag) {
            slides[i].style.display = "block";
        } else {
            slides[i].style.display = "none";
        }
    }
}

setInterval(function () {
    flag = flag + 1;
    updateSlide();
}, 1500);

// ---------------------------------------------------------------------------------------------------------------------

input.addEventListener("focus", function () {
    input.style.outline = "none";
    input.style.backgroundColor = "rgb(246, 255, 246)";
});

input.addEventListener("blur", function () {
    input.style.backgroundColor = "white";
});


// ---------------------------------------------------------------------------------------------------------------------

let innerContainers = document.querySelectorAll(".inner-Containers");

for (let i = 0; i < innerContainers.length; i++) {
    let divChild = innerContainers[i].children;

    for (let j = 0; j < divChild.length; j++) {
        divChild[j].addEventListener("mouseenter", function () {
            divChild[j].style.transform = "scale(1.04)";

        });
    }

    for (let j = 0; j < divChild.length; j++) {
        divChild[j].addEventListener("mouseleave", function () {
            divChild[j].style.transform = "scale(1.00)";
        });
    }
}


for (let i = 0; i < containers.length; i++) {
    containers[i].addEventListener("mouseenter", function () {
        containers[i].style.transform = "scale(1.05)";
        containers[i].style.backgroundColor = "rgb(255, 255, 223)";
    })
    containers[i].addEventListener("mouseleave", function () {
        containers[i].style.transform = "scale(1.0)";
        containers[i].style.backgroundColor = "white"
    })
}

btn.forEach(function (button) {
    button.addEventListener("click", function () {
        window.location.href = "Signin.html";
    })
})


// ---------------------------------------------------------------------------------------------------------------------

menu.addEventListener("click", function () {
    sidebar.style.transform = "translateX(0%)";
    document.body.style.overflow = "hidden";
});

let closebtn = document.getElementById("close");

closebtn.addEventListener("click", function () {
    sidebar.style.transform = "translateX(-100%)";
    document.body.style.overflow = "auto";
});


// ---------------------------------------------------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
    setInterval(() => {
        scroll.appendChild(scroll.firstElementChild);
    }, 1000);
});


// ---------------------------------------------------------------------------------------------------------------------

sidebar.addEventListener("wheel", function (event) {
    if (event.deltaY > 0) {
        sidebar.style.backgroundColor = "rgb(255, 235, 235)";
    } else {
        sidebar.style.backgroundColor = "rgb(235, 255, 254)";
    }
});

