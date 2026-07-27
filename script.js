/*====================================================
HEADER SCROLL
====================================================*/

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > window.innerHeight - 120) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/*====================================================
SMOOTH SCROLL
====================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            window.scrollTo({

                top: target.offsetTop - 100,

                behavior: "smooth"

            });

        }

    });

});


/*====================================================
ACTIVE MENU
====================================================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 180;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/*====================================================
TYPING EFFECT
====================================================*/

const texts = [

    "Business Analyst",

    "Business Intelligence",

    "Data Analyst",

    "Product Development"

];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

    if (count === texts.length) {

        count = 0;

    }

    currentText = texts[count];

    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if (letter.length === currentText.length) {

        setTimeout(() => {

            erase();

        }, 1800);

    } else {

        setTimeout(type, 90);

    }

})();

function erase() {

    letter = currentText.slice(0, --index);

    document.getElementById("typing").textContent = letter;

    if (letter.length === 0) {

        count++;

        setTimeout(type, 250);

    } else {

        setTimeout(erase, 45);

    }

}


/*====================================================
REVEAL ANIMATION
====================================================*/

const reveals = document.querySelectorAll(".white-section");

function revealSection() {

    reveals.forEach(section => {

        const windowHeight = window.innerHeight;

        const revealTop = section.getBoundingClientRect().top;

        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {

            section.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealSection);

revealSection();


/*====================================================
PARALLAX HERO
====================================================*/

const heroImage = document.querySelector(".hero-image");

window.addEventListener("mousemove", (e) => {

    const x = (window.innerWidth / 2 - e.clientX) / 45;

    const y = (window.innerHeight / 2 - e.clientY) / 45;

    heroImage.style.transform = `translate(${x}px, ${y}px)`;

});
