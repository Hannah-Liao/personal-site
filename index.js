// stiky navbar & hamburger menu
window.addEventListener("scroll", () => {
    document.querySelector("header").classList.toggle("sticky", window.scrollY > 100);
    document.querySelector("#menu-icon").classList.remove("bx-x");
    document.querySelector(".nav-list").classList.remove("open");

    document.querySelector("#scroll_up").classList.toggle("show_scroll_up", window.scrollY > 650);
});

document.querySelector("#menu-icon").onclick = () => {
    document.querySelector("#menu-icon").classList.toggle("bx-x");
    document.querySelector(".nav-list").classList.toggle("open");
}

// dark mode
let darkMode = document.querySelector("#darkmode-icon");
darkMode.onclick = () => {
    if (darkMode.classList.contains("bx-moon")) {
        darkMode.classList.replace("bx-moon", "bx-sun");
        document.body.classList.add("dark");
        document.body.classList.add("toggle");
        document.querySelector("#download_btn").classList.replace("btn-outline-dark", "btn-outline-light")
        document.querySelector("#contact_info_btn").classList.replace("btn-dark", "btn-light")

    } else {
        darkMode.classList.replace("bx-sun", "bx-moon");
        document.body.classList.remove("dark");
        document.body.classList.add("toggle");
        document.querySelector("#download_btn").classList.replace("btn-outline-light", "btn-outline-dark")
        document.querySelector("#contact_info_btn").classList.replace("btn-light", "btn-dark")
    }
}