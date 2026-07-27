/* ======================================================
   DANAYTHA PORTFOLIO
   script.js
====================================================== */

/* ==========================
   PRELOADER
========================== */

window.addEventListener("load", function () {

    const preloader = document.getElementById("preloader");

    preloader.style.opacity = "0";

    setTimeout(() => {

        preloader.style.display = "none";

    }, 500);

});


/* ==========================
   TYPED TEXT
========================== */

if (document.getElementById("typing")) {

    new Typed("#typing", {

        strings: [

            "Business Analyst",

            "Product Analyst",

            "Data Analyst",

            "Business Intelligence",

            "Power BI Developer"

        ],

        typeSpeed: 70,

        backSpeed: 40,

        backDelay: 1800,

        loop: true

    });

}


/* ==========================
   STICKY HEADER
========================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        header.classList.add("sticky");

    }

    else {

        header.classList.remove("sticky");

    }

});


/* ==========================
   MOBILE MENU
========================== */

const menuBtn = document.querySelector(".menu-btn");

const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");

});

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
/* ==========================
   CLOSE MENU AFTER CLICK
========================== */

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

    });

});


/* ==========================
   ACTIVE NAVIGATION
========================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

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


/* ==========================
   BACK TO TOP BUTTON
========================== */

const backTop = document.createElement("button");

backTop.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

backTop.className = "back-to-top";

document.body.appendChild(backTop);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        backTop.classList.add("show");

    }

    else {

        backTop.classList.remove("show");

    }

});

backTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* ==========================
   SCROLL REVEAL
========================== */

const revealElements = document.querySelectorAll(

    ".project-card,.skill-card,.certificate-card,.patent-card,.contact-card,.education-card"

);

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {

        threshold: 0.15

    }

);

revealElements.forEach(el => {

    observer.observe(el);

});


/* ==========================
   YEAR AUTO UPDATE
========================== */

const footerYear = document.querySelector(".footer-year");

if (footerYear) {

    footerYear.textContent = new Date().getFullYear();

}
