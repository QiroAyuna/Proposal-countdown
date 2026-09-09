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
/* =========================================================
   PREMIUM UPGRADE: LANGUAGE, THEME, LIGHTBOX, UX
   ========================================================= */

const translations = {
    id: {
        eyebrow: "RAHASIA YANG SELAMA INI GUA SIMPEN",
        title: "Hari Saat Gua Bertanya",
        forLabel: "untuk",
        days: "HARI",
        hours: "JAM",
        minutes: "MENIT",
        seconds: "DETIK",
        message: "Setiap detik bikin gua makin deket<br>sama hari itu.",
        musicPlay: "♫ PUTAR LAGU KITA",
        musicPause: "♫ JEDA LAGU",
        musicError: "♫ FILE MUSIK TIDAK DITEMUKAN",
        storyScroll: "CERITA KITA",
        before: "SEBELUM GUA SADAR",
        storyTitle: "Mungkin lu nggak sadar<br>kapan semuanya mulai.",
        storyDesc: "Nggak ada satu momen tertentu.<br>Nggak ada adegan dramatis.<br>Nggak ada tanda-tanda juga.<br>Entah gimana, pelan-pelan,<br>lu jadi seseorang<br>yang nggak bisa gua bayangin buat kehilangan.",
        beginning: "AWALNYA",
        beginningTitle: "Semuanya dimulai sederhana.",
        beginningText: "Mungkin waktu itu kita nggak tahu semuanya bakal ke mana.<br>Mungkin cuma hari biasa.<br>Tapi kalau gua lihat sekarang,<br>ternyata hari itu berarti.",
        along: "DI TENGAH PERJALANAN",
        alongTitle: "Lu jadi rumah.",
        alongText: "Di antara obrolan, tawa, berantem kecil,<br>dan hari-hari biasa,<br>bareng lu mulai terasa<br>kayak tempat yang emang seharusnya gua datengin.",
        realization: "SAAT GUA SADAR",
        realizationTitle: "Sampai akhirnya gua sadar.",
        realizationText: "Gua nggak cuma pengen punya lebih banyak kenangan<br>sama lu.<br><br>Gua juga pengen tahun-tahun setelah ini<br>tetep sama lu.",
        little: "HAL-HAL KECIL",
        memoryTitle: "Beberapa momen<br>layak untuk disimpan.",
        firstChat: "PERCAKAPAN PERTAMA KITA",
        prewed: "PREWED ALA ALA",
        justUs: "HANYA KITA",
        memoryCaption: "Suatu hari nanti, momen-momen sederhana ini<br>bakal jadi cerita yang<br>kita ceritain ke anak-anak kita.",
        andThen: "DAN KEMUDIAN",
        forever: "Gua sadar,<br><span>selamanya</span> kedengerannya kayak lu.",
        foreverText: "Jadi gua berhenti nanya-nanya<br>apa lu orang yang pengen gua punya di sisi gua.<br><br>Gua mulai mikirin gimana caranya ngabisin<br>sisa hidup gua buat bikin lu tahu kalau itu emang lu.",
        until: "SAMPAI SAAT ITU",
        futureTitle: "Gua ngitung setiap momennya.",
        futureSubtitle: "Karena ada beberapa hari yang emang layak ditunggu.",
        oneLast: "SATU HAL TERAKHIR",
        letterTitle: "Sebuah surat buat lu.",
        notYet: "Tapi belum sekarang.",
        opens: "AKAN TERBUKA PADA 03 · 02 · 2030",
        myLove: "Sayang,",
        letter1: "Kalau lu baca ini,<br>berarti hari yang selama ini gua tunggu<br>akhirnya tiba.",
        letter2: "Gua bisa nulis seribu alasan<br>kenapa gua sayang sama lu, dan entah gimana<br>semuanya tetep nggak bakal cukup.",
        letter3: "Jadi gua bikin ini sesimpel mungkin.",
        choose: "Gua milih lu.",
        today: "Hari ini.<br>Besok.<br>Dan setiap hari biasa<br>yang bakal datang setelahnya.",
        thank: "Makasih udah jadi<br>bagian favorit gua di hidup ini.",
        signature: "Selalu buat lu.",
        finalDate: "03 · 02 · 2030",
        finalTitle: "Hari itu<br>akhirnya datang juga.",
        finalText: "Dan cuma ada satu pertanyaan<br>yang dari dulu pengen gua tanyain.",
        openHeart: "BUKA HATIKU",
        restLife: "UNTUK SISA HIDUPKU",
        question: "Lu mau nikah sama gua?"
    },
    en: {
        eyebrow: "A SECRET I'VE BEEN KEEPING",
        title: "The Day I Ask You",
        forLabel: "for",
        days: "DAYS",
        hours: "HOURS",
        minutes: "MINUTES",
        seconds: "SECONDS",
        message: "Every second brings me closer<br>to that day.",
        musicPlay: "♫ PLAY OUR SONG",
        musicPause: "♫ PAUSE OUR SONG",
        musicError: "♫ MUSIC FILE NOT FOUND",
        storyScroll: "OUR STORY",
        before: "BEFORE I KNEW",
        storyTitle: "You probably don't know<br>when it happened.",
        storyDesc: "There wasn't a single moment.<br>No dramatic scene.<br>No warning.<br>Somehow, quietly,<br>you became someone<br>I couldn't imagine losing.",
        beginning: "THE BEGINNING",
        beginningTitle: "It started simply.",
        beginningText: "Maybe we didn't know where everything was going.<br>Maybe it was just another day.<br>But looking back now,<br>I think that day mattered.",
        along: "SOMEWHERE ALONG THE WAY",
        alongTitle: "You became home.",
        alongText: "Somewhere between the conversations,<br>the laughter, the little arguments,<br>and the ordinary days,<br>being with you started feeling<br>like where I belonged.",
        realization: "THE REALIZATION",
        realizationTitle: "Then I knew.",
        realizationText: "I didn't just want more memories<br>with you.<br><br>I wanted the years after them.",
        little: "THE LITTLE THINGS",
        memoryTitle: "Some moments<br>deserve to stay.",
        firstChat: "OUR FIRST CHAT",
        prewed: "PREWED ALA ALA",
        justUs: "JUST US",
        memoryCaption: "One day, these ordinary moments<br>will become the memories<br>we'll tell our children about.",
        andThen: "AND THEN",
        forever: "I realized<br><span>forever</span> sounded a lot like you.",
        foreverText: "So I stopped wondering<br>whether you were the person I wanted beside me.<br><br>And started wondering how I could spend<br>the rest of my life making sure you knew it.",
        until: "UNTIL THEN",
        futureTitle: "I'm counting every moment.",
        futureSubtitle: "Because some days are worth waiting for.",
        oneLast: "ONE LAST THING",
        letterTitle: "A letter for you.",
        notYet: "But not yet.",
        opens: "IT WILL OPEN ON 03 · 02 · 2030",
        myLove: "My love,",
        letter1: "If you're reading this,<br>then the day I've been waiting for<br>has finally arrived.",
        letter2: "I could write a thousand reasons<br>why I love you, and somehow<br>none of them would be enough.",
        letter3: "So I'll keep it simple.",
        choose: "I choose you.",
        today: "Today.<br>Tomorrow.<br>And every ordinary day<br>that comes after.",
        thank: "Thank you for becoming<br>my favorite part of this life.",
        signature: "Always yours.",
        finalDate: "03 · 02 · 2030",
        finalTitle: "The day<br>has finally come.",
        finalText: "And there's only one question<br>I've been waiting to ask.",
        openHeart: "OPEN MY HEART",
        restLife: "FOR THE REST OF MY LIFE",
        question: "Will you marry me?"
    }
};

let currentLang = localStorage.getItem("siteLanguage") || "id";

function setText(selector, value) {
    const el = document.querySelector(selector);
    if (el) el.innerHTML = value;
}

function applyLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];

    document.documentElement.lang = lang;

    setText(".eyebrow", t.eyebrow);
    setText(".hero h1", t.title);
    setText(".recipient span", t.forLabel);

    const labels = document.querySelectorAll(".countdown .time small");
    labels.forEach((el, i) => {
        el.textContent = [t.days,t.hours,t.minutes,t.seconds][i];
    });

    setText(".message", t.message);
    setText("#musicButton", ourSong && !ourSong.paused ? t.musicPause : t.musicPlay);
    setText(".scroll span", t.storyScroll);

    const storyIntro = document.querySelector(".story .section-intro");
    if (storyIntro) {
        setText(".story .section-label", t.before);
        setText(".story .section-intro h2", t.storyTitle);
        setText(".story .section-description", t.storyDesc);
    }

    const cards = document.querySelectorAll(".story-card");
    if (cards[0]) {
        setText(".story-card:nth-child(1) .story-card-content span", t.beginning);
        setText(".story-card:nth-child(1) h3", t.beginningTitle);
        setText(".story-card:nth-child(1) p", t.beginningText);
    }
    if (cards[1]) {
        setText(".story-card:nth-child(2) .story-card-content span", t.along);
        setText(".story-card:nth-child(2) h3", t.alongTitle);
        setText(".story-card:nth-child(2) p", t.alongText);
    }
    if (cards[2]) {
        setText(".story-card:nth-child(3) .story-card-content span", t.realization);
        setText(".story-card:nth-child(3) h3", t.realizationTitle);
        setText(".story-card:nth-child(3) p", t.realizationText);
    }

    setText(".memory-heading .section-label", t.little);
    setText(".memory-heading h2", t.memoryTitle);
    setText(".photo-one .image-caption", t.firstChat);
    setText(".photo-two .image-caption", t.prewed);
    setText(".photo-three .photo-placeholder span", t.justUs);
    setText(".memory-caption", t.memoryCaption);

    setText(".realization .section-label", t.andThen);
    setText(".realization h2", t.forever);
    setText(".realization p:last-child", t.foreverText);

    setText(".future .section-label", t.until);
    setText(".future h2", t.futureTitle);
    setText(".future-subtitle", t.futureSubtitle);

    const futureLabels = document.querySelectorAll(".second-countdown span");
    futureLabels.forEach((el, i) => {
        el.textContent = [t.days,t.hours,t.minutes,t.seconds][i];
    });

    setText(".letter-container > .section-label", t.oneLast);
    setText(".letter-lock h2", t.letterTitle);
    setText(".letter-lock p", t.notYet);
    setText(".letter-lock small", t.opens);

    const letter = document.querySelectorAll(".letter-content p");
    if (letter[0]) setText(".letter-content p:nth-of-type(1)", t.myLove);
    if (letter[1]) setText(".letter-content p:nth-of-type(2)", t.letter1);
    if (letter[2]) setText(".letter-content p:nth-of-type(3)", t.letter2);
    if (letter[3]) setText(".letter-content p:nth-of-type(4)", t.letter3);
    setText(".letter-highlight", t.choose);
    setText(".letter-content p:nth-of-type(6)", t.today);
    setText(".letter-content p:nth-of-type(7)", t.thank);
    setText(".signature", t.signature);

    setText(".proposal-content .section-label", t.finalDate);
    setText(".proposal h2", t.finalTitle);
    setText(".proposal-content > p:not(.section-label)", t.finalText);
    setText("#proposalButton", t.openHeart);
    setText(".question span", t.restLife);
    setText(".question h3", t.question);

    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.lang === lang);
    });

    localStorage.setItem("siteLanguage", lang);
}

/* LANGUAGE + THEME CONTROLS */
const themeToggle = document.getElementById("themeToggle");

function applyTheme(theme) {
    document.body.classList.toggle("light-mode", theme === "light");
    if (themeToggle) themeToggle.textContent = theme === "light" ? "☀" : "☾";
    try { localStorage.setItem("siteTheme", theme); } catch (e) {}
}

document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const lang = btn.dataset.lang;
        if (lang && translations[lang]) applyLanguage(lang);
    });
});

if (themeToggle) {
    themeToggle.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const current = document.body.classList.contains("light-mode") ? "light" : "dark";
        applyTheme(current === "light" ? "dark" : "light");
    });
}

const savedTheme = localStorage.getItem("siteTheme");
applyTheme(savedTheme || "dark");


/* MUSIC STATUS */
const musicStatus = document.createElement("div");
musicStatus.className = "music-status";
musicStatus.textContent = "READY";
if (musicButton) musicButton.insertAdjacentElement("afterend", musicStatus);

function updateMusicUI() {
    const t = translations[currentLang];

    if (!ourSong || !musicButton) return;

    if (ourSong.paused) {
        musicButton.textContent = t.musicPlay;
        musicButton.classList.remove("playing");
        musicStatus.textContent = "READY";
        musicStatus.classList.remove("playing");
    } else {
        musicButton.textContent = t.musicPause;
        musicButton.classList.add("playing");
        musicStatus.textContent = "NOW PLAYING";
        musicStatus.classList.add("playing");
    }
}

if (ourSong) {
    ourSong.addEventListener("play", updateMusicUI);
    ourSong.addEventListener("pause", updateMusicUI);
    ourSong.addEventListener("ended", updateMusicUI);
    ourSong.addEventListener("error", () => {
        musicButton.textContent = translations[currentLang].musicError;
        musicStatus.textContent = "CHECK: music/janji-suci.mp3";
        musicStatus.classList.remove("playing");
    });
}

/* PHOTO LIGHTBOX */
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxClose = document.getElementById("lightboxClose");

window.openMemoryPhoto = function(img) {
    if (!img || !lightbox || !lightboxImage) return;
    lightboxImage.src = img.src;
    lightboxImage.alt = img.alt || "";
    const caption = img.closest(".memory-photo")?.querySelector(".image-caption");
    if (lightboxCaption) lightboxCaption.textContent = caption ? caption.textContent.trim() : "";
    lightbox.classList.add("show");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
};

document.querySelectorAll(".memory-photo img").forEach(img => {
    img.addEventListener("click", () => {
        lightboxImage.src = img.src;
        lightboxImage.alt = img.alt;
        const caption = img.closest(".memory-photo")?.querySelector(".image-caption");
        lightboxCaption.textContent = caption ? caption.textContent : "";
        lightbox.classList.add("show");
        lightbox.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
    });
});

function closeLightbox() {
    lightbox.classList.remove("show");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
if (lightbox) {
    lightbox.addEventListener("click", e => {
        if (e.target === lightbox) closeLightbox();
    });
}
document.addEventListener("keydown", e => {
    if (e.key === "Escape" && lightbox?.classList.contains("show")) closeLightbox();
});

/* READING PROGRESS + BACK TO TOP */
const progress = document.getElementById("readingProgress");
const backTop = document.getElementById("backTop");

window.addEventListener("scroll", () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const percent = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;

    if (progress) progress.style.width = `${percent}%`;
    if (backTop) backTop.classList.toggle("show", window.scrollY > window.innerHeight * 0.8);
}, {passive:true});

if (backTop) {
    backTop.addEventListener("click", () => {
        window.scrollTo({top:0, behavior:"smooth"});
    });
}

/* FLOATING HEARTS */
function spawnHeart() {
    const heart = document.createElement("span");
    heart.className = "heart-particle";
    heart.textContent = Math.random() > .5 ? "♡" : "✦";
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.bottom = "-20px";
    heart.style.setProperty("--drift", `${(Math.random() - .5) * 180}px`);
    heart.style.animationDuration = `${6 + Math.random() * 5}s`;
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 11000);
}

setInterval(spawnHeart, 2400);


/* GLOBAL CONTROL API */
window.setSiteLanguage = function(lang) {
    if (lang && translations[lang]) applyLanguage(lang);
};
window.toggleSiteTheme = function() {
    const current = document.body.classList.contains("light-mode") ? "light" : "dark";
    applyTheme(current === "light" ? "dark" : "light");
};

/* INITIAL LANGUAGE */
applyLanguage(currentLang);
updateMusicUI();
