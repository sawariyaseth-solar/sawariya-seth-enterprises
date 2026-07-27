// ===============================
// Sawariya Seth Enterprises
// Main JavaScript
// ===============================

// Mobile Menu
const menuBtn = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-links");

if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}

// Sticky Header
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (header) {
        if (window.scrollY > 50) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }
});

// Scroll to Top Button
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (!topBtn) return;

    if (window.pageYOffset > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

if (topBtn) {

    topBtn.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// Simple Counter Animation
const counters = document.querySelectorAll(".counter");

const runCounter = () => {

    counters.forEach(counter => {

        const target = +counter.getAttribute("data-target");
        const speed = 200;

        const update = () => {

            const count = +counter.innerText;
            const inc = Math.ceil(target / speed);

            if (count < target) {

                counter.innerText = count + inc;
                setTimeout(update, 10);

            } else {

                counter.innerText = target;

            }

        };

        update();

    });

};

if (counters.length > 0) {
    runCounter();
}

console.log("Sawariya Seth Enterprises Website Loaded Successfully");