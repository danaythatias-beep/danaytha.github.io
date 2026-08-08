/* =========================================================
   PROJECT CAROUSEL
   6 PROJECTS
   3 PROJECTS / PAGE
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const track = document.getElementById("projectsTrack");

    const cards = track
        ? Array.from(track.querySelectorAll(".project-card"))
        : [];

    const prevButton =
        document.getElementById("projectsPrev");

    const nextButton =
        document.getElementById("projectsNext");

    const pageButtons =
        Array.from(
            document.querySelectorAll(".project-page")
        );

    const showingText =
        document.getElementById("projectShowing");


    /* =====================================================
       CHECK ELEMENTS
    ===================================================== */

    if (!track || cards.length === 0) {
        console.warn("Project carousel tidak ditemukan.");
        return;
    }


    /* =====================================================
       SETTINGS
    ===================================================== */

    const projectsPerPage = 3;

    const totalPages =
        Math.ceil(cards.length / projectsPerPage);

    let currentPage = 0;


    /* =====================================================
       GET CARD WIDTH + GAP
    ===================================================== */

    function getSlideDistance() {

        if (!cards[0]) {
            return 0;
        }

        const cardWidth =
            cards[0].getBoundingClientRect().width;

        const trackStyle =
            window.getComputedStyle(track);

        const gap =
            parseFloat(trackStyle.columnGap) ||
            parseFloat(trackStyle.gap) ||
            0;

        return (cardWidth + gap) * projectsPerPage;
    }


    /* =====================================================
       UPDATE SHOWING TEXT
    ===================================================== */

    function updateShowing() {

        if (!showingText) {
            return;
        }

        const start =
            (currentPage * projectsPerPage) + 1;

        const end =
            Math.min(
                start + projectsPerPage - 1,
                cards.length
            );

        showingText.textContent =
            `${start}–${end}`;
    }


    /* =====================================================
       UPDATE CAROUSEL
    ===================================================== */

    function updateCarousel(animate = true) {

        const distance =
            getSlideDistance();


        /* -----------------------------------------------
           TRANSITION
        ------------------------------------------------ */

        if (animate) {

            track.style.transition =
                "transform 0.65s cubic-bezier(.65,0,.35,1)";

        } else {

            track.style.transition =
                "none";
        }


        /* -----------------------------------------------
           MOVE TRACK
        ------------------------------------------------ */

        track.style.transform =
            `translate3d(-${distance * currentPage}px, 0, 0)`;


        /* -----------------------------------------------
           PAGE BUTTON ACTIVE
        ------------------------------------------------ */

        pageButtons.forEach(
            function (button, index) {

                button.classList.toggle(
                    "active",
                    index === currentPage
                );

                button.setAttribute(
                    "aria-current",
                    index === currentPage
                        ? "page"
                        : "false"
                );

            }
        );


        /* -----------------------------------------------
           PREVIOUS
        ------------------------------------------------ */

        if (prevButton) {

            prevButton.disabled =
                currentPage === 0;
        }


        /* -----------------------------------------------
           NEXT
        ------------------------------------------------ */

        if (nextButton) {

            nextButton.disabled =
                currentPage >= totalPages - 1;
        }


        /* -----------------------------------------------
           SHOWING 1–3 / 4–6
        ------------------------------------------------ */

        updateShowing();
    }


    /* =====================================================
       GO TO PAGE
    ===================================================== */

    function goToPage(page) {

        if (page < 0) {
            page = 0;
        }

        if (page > totalPages - 1) {
            page = totalPages - 1;
        }

        currentPage = page;

        updateCarousel(true);
    }


    /* =====================================================
       PAGE BUTTONS
    ===================================================== */

    pageButtons.forEach(
        function (button, index) {

            button.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();

                    goToPage(index);
                }
            );

        }
    );


    /* =====================================================
       PREVIOUS BUTTON
    ===================================================== */

    if (prevButton) {

        prevButton.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                if (currentPage > 0) {

                    goToPage(
                        currentPage - 1
                    );
                }

            }
        );

    }


    /* =====================================================
       NEXT BUTTON
    ===================================================== */

    if (nextButton) {

        nextButton.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                if (
                    currentPage <
                    totalPages - 1
                ) {

                    goToPage(
                        currentPage + 1
                    );
                }

            }
        );

    }


    /* =====================================================
       TOUCH SWIPE
    ===================================================== */

    let touchStartX = 0;
    let touchEndX = 0;


    track.addEventListener(
        "touchstart",
        function (event) {

            touchStartX =
                event.touches[0].clientX;

        },
        {
            passive: true
        }
    );


    track.addEventListener(
        "touchend",
        function (event) {

            touchEndX =
                event.changedTouches[0].clientX;

            const difference =
                touchEndX - touchStartX;


            /* Swipe LEFT */

            if (difference < -50) {

                if (
                    currentPage <
                    totalPages - 1
                ) {

                    goToPage(
                        currentPage + 1
                    );
                }
            }


            /* Swipe RIGHT */

            else if (difference > 50) {

                if (currentPage > 0) {

                    goToPage(
                        currentPage - 1
                    );
                }
            }

        }
    );


    /* =====================================================
       MOUSE DRAG
    ===================================================== */

    let mouseStartX = 0;
    let mouseEndX = 0;
    let isDragging = false;


    track.addEventListener(
        "mousedown",
        function (event) {

            isDragging = true;

            mouseStartX =
                event.clientX;

            mouseEndX =
                mouseStartX;

            track.style.cursor =
                "grabbing";
        }
    );


    document.addEventListener(
        "mousemove",
        function (event) {

            if (!isDragging) {
                return;
            }

            mouseEndX =
                event.clientX;
        }
    );


    document.addEventListener(
        "mouseup",
        function () {

            if (!isDragging) {
                return;
            }

            isDragging = false;

            track.style.cursor =
                "grab";


            const difference =
                mouseEndX - mouseStartX;


            /* Drag LEFT */

            if (difference < -60) {

                if (
                    currentPage <
                    totalPages - 1
                ) {

                    goToPage(
                        currentPage + 1
                    );
                }
            }


            /* Drag RIGHT */

            else if (difference > 60) {

                if (currentPage > 0) {

                    goToPage(
                        currentPage - 1
                    );
                }
            }

        }
    );


    /* =====================================================
       KEYBOARD
    ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            const activeElement =
                document.activeElement;

            const isTyping =
                activeElement &&
                (
                    activeElement.tagName === "INPUT" ||
                    activeElement.tagName === "TEXTAREA" ||
                    activeElement.isContentEditable
                );


            if (isTyping) {
                return;
            }


            /* LEFT */

            if (event.key === "ArrowLeft") {

                if (currentPage > 0) {

                    goToPage(
                        currentPage - 1
                    );
                }
            }


            /* RIGHT */

            if (event.key === "ArrowRight") {

                if (
                    currentPage <
                    totalPages - 1
                ) {

                    goToPage(
                        currentPage + 1
                    );
                }
            }

        }
    );


    /* =====================================================
       RESIZE
    ===================================================== */

    let resizeTimer;

    window.addEventListener(
        "resize",
        function () {

            clearTimeout(resizeTimer);

            resizeTimer =
                setTimeout(
                    function () {

                        updateCarousel(false);

                    },
                    150
                );

        }
    );


    /* =====================================================
       INITIALIZE
    ===================================================== */

    updateCarousel(false);

});
