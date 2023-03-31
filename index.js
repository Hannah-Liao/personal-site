window.addEventListener("scroll", () => {
    document.querySelector("header").classList.toggle("sticky", window.scrollY > 100);
    document.querySelector("#menu-icon").classList.remove("bx-x");
    document.querySelector(".nav-list").classList.remove("open");
});

document.querySelector("#menu-icon").onclick = () => {
    document.querySelector("#menu-icon").classList.toggle("bx-x");
    document.querySelector(".nav-list").classList.toggle("open");
}

let lightMode = document.querySelector("#lightmode-icon");

lightMode.onclick = () => {
    if (lightMode.classList.contains("bx-sun")) {
        lightMode.classList.replace("bx-sun", "bx-moon");
        document.body.classList.add("light");
        document.body.classList.add("toggle");
    } else {
        lightMode.classList.replace("bx-moon", "bx-sun");
        document.body.classList.remove("light");
        document.body.classList.add("toggle");
    }
}


