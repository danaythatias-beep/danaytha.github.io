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
