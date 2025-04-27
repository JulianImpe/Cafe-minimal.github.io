document.addEventListener("DOMContentLoaded", function () {
    const elementos = document.querySelectorAll(".scroll-reveal");

    function checkScroll() {
        elementos.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.85) {
                el.classList.add("visible"); 
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); 
});
document.addEventListener("DOMContentLoaded", function () {
    const elementos = document.querySelectorAll(".fade-left ");

    function checkScroll() {
        elementos.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.85) {
                el.classList.add("visible"); 
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); 
});
document.addEventListener("DOMContentLoaded", function () {
    const elementos = document.querySelectorAll(".zoom-in ");

    function checkScroll() {
        elementos.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.85) {
                el.classList.add("visible"); 
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".fade-in");

    function checkScroll() {
        elements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.85) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});