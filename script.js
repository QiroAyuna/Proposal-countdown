/* =========================
   MAIN COUNTDOWN
========================= */

const targetDate =
    new Date("2030-02-03T00:00:00");


function getTimeDifference() {

    const now = new Date();

    return targetDate - now;

}


function updateCountdown() {

    const difference =
        getTimeDifference();


    /*
        Jika hari H sudah tiba
    */

    if (difference <= 0) {

        document.querySelector(".countdown").innerHTML = `
            <div class="time">
                <span>♡</span>
                <small>THE DAY IS HERE</small>
            </div>
        `;

        document.querySelector(".message").innerHTML =
            "The wait is over.";

        activateProposal();

        return;

    }


    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (difference /
                (1000 * 60 * 60)) % 24
        );


    const minutes =
        Math.floor(
            (difference /
                (1000 * 60)) % 60
        );


    const seconds =
        Math.floor(
            (difference / 1000) % 60
        );


    document.getElementById("days")
        .textContent =
        days.toLocaleString("id-ID");


    document.getElementById("hours")
        .textContent =
        String(hours).padStart(2, "0");


    document.getElementById("minutes")
        .textContent =
        String(minutes).padStart(2, "0");


    document.getElementById("seconds")
        .textContent =
        String(seconds).padStart(2, "0");


    /*
        Update second countdown
    */

    document.getElementById("futureDays")
        .textContent =
        days.toLocaleString("id-ID");


    document.getElementById("futureHours")
        .textContent =
        String(hours).padStart(2, "0");


    document.getElementById("futureMinutes")
        .textContent =
        String(minutes).padStart(2, "0");


    document.getElementById("futureSeconds")
        .textContent =
        String(seconds).padStart(2, "0");

}


updateCountdown();

setInterval(
    updateCountdown,
    1000
);


/* =========================
   MUSIC
========================= */

const musicButton =
    document.getElementById("musicButton");

const ourSong =
    document.getElementById("ourSong");


musicButton.addEventListener(
    "click",
    async () => {

        if (ourSong.paused) {

            try {

                await ourSong.play();

                musicButton.textContent =
                    "♫ PAUSE OUR SONG";

            } catch (error) {

                console.log(
                    "Music could not be played.",
                    error
                );

            }

        } else {

            ourSong.pause();

            musicButton.textContent =
                "♫ PRESS PLAY WHEN YOU'RE READY";

        }

    }
);


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target
                            .classList
                            .add("visible");

                    }

                }
            );

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach(
    (element) => {

        revealObserver.observe(element);

    }
);


/* =========================
   LETTER
========================= */

const letterLock =
    document.getElementById("letterLock");

const letterContent =
    document.getElementById("letterContent");


function unlockLetter() {

    letterLock.style.display =
        "none";

    letterContent.style.display =
        "block";

}


function checkLetterDate() {

    const now =
        new Date();

    if (now >= targetDate) {

        unlockLetter();

    }

}


checkLetterDate();


/* =========================
   PROPOSAL
========================= */

const proposalButton =
    document.getElementById(
        "proposalButton"
    );

const question =
    document.getElementById(
        "question"
    );


proposalButton.addEventListener(
    "click",
    () => {

        question.classList.add("show");

        document.body.style.overflow =
            "hidden";

    }
);


/* =========================
   DAY-H ARRIVAL
========================= */

let proposalActivated = false;


function activateProposal() {

    if (proposalActivated) {
        return;
    }

    proposalActivated = true;

    const proposal =
        document.getElementById(
            "proposal"
        );

    if (!proposal) {
        return;
    }

    proposal.scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================
   SUBTLE PARALLAX
========================= */

const heroContent =
    document.querySelector(
        ".hero-content"
    );


window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY <
            window.innerHeight
        ) {

            const movement =
                window.scrollY * 0.12;

            heroContent.style.transform =
                `translateY(${movement}px)`;

        }

    },
    {
        passive: true
    }
);