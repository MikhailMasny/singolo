/* Task: Header */

const NAVIGATION = document.querySelector(".nav");
NAVIGATION.addEventListener("click", handlerHeader);

function handlerHeader(event) {
    NAVIGATION.querySelectorAll(".nav__link").forEach(element => {
        element.classList.remove("nav__link-active");
    });

    event.target.classList.add("nav__link-active");
}

/* Task: Get a quote */

const SUBMIT_BUTTON = document.querySelector(".contact__button");
SUBMIT_BUTTON.addEventListener("click", getQuote);

function getQuote() {
    const error = "Fill out the form and try again.";

    const NAME = document.querySelector("input:nth-child(1)").value;
    const EMAIL = document.querySelector("input:nth-child(2)").value;

    if (NAME === "" || EMAIL === "") {
        alert(error);
        return;
    }

    let subject = document.querySelector("input:nth-child(3)").value;
    let describe = document.querySelector("textarea").value;

    if (subject === "") {
        subject = "Without subject";
    }

    if (describe === "") {
        describe = "Without description";
    }

    alert(`The letter was sent\nSubject: ${subject}\nDescription: ${describe}`);
}

/* Task: Portfolio. Tab Switching */

const PICTURES = document.querySelectorAll(".portfolio__item");

const TABS = document.querySelector(".portfolio__tags");
TABS.addEventListener("click", handlerPortfolio);

function removePictureClasses() {
    PICTURES.forEach(element => {
        element.classList.remove("portfolio__picture-ordered");
    });
}

function orderPictures(...pictures) {
    pictures.forEach(picture => {
        let element = document.getElementById(picture);
        element.classList.add("portfolio__picture-ordered");
    });
}

function handlerPortfolio(event) {
    if (event.target.classList.contains("portfolio__tags")) {
        return;
    }

    TABS.querySelectorAll(".portfolio__tag").forEach(element => {
        element.classList.remove("portfolio__tag-selected");
    });

    event.target.classList.add("portfolio__tag-selected");

    if (event.target.name === "all") {
        removePictureClasses();
    }
    
    if (event.target.name === "web-design") {
        removePictureClasses();
        orderPictures("portfolio-picture-6", "portfolio-picture-10", "portfolio-picture-12");
    }

    if (event.target.name === "graphic-design") {
        removePictureClasses();
        orderPictures("portfolio-picture-2", "portfolio-picture-7", "portfolio-picture-8", "portfolio-picture-11");
    }

    if (event.target.name === "artwork") {
        removePictureClasses();
        orderPictures("portfolio-picture-1", "portfolio-picture-3", "portfolio-picture-4", "portfolio-picture-5", "portfolio-picture-9");
    }
}

/* Task: Portfolio. Image Interaction */

const PORTFOLIO = document.querySelector(".portfolio__pictures");
PORTFOLIO.addEventListener("click", handlerPicture);

function handlerPicture(event) {
    if (event.target.classList.contains("portfolio__pictures")) {
        return;
    }

    PORTFOLIO.querySelectorAll(".portfolio__picture").forEach(element => {
        element.classList.remove("portfolio__picture-selected");
        
        element.width = 220;
        element.height = 187;
    });
    
    event.target.width = 220;
    event.target.height = 187;

    event.target.classList.add("portfolio__picture-selected");
}

/* Task: Slider. Slide switch */

const CAROUSEL_SECTION = document.querySelector(".carousel");
const CAROUSEL_WRAPPER = document.querySelector(".carousel__wrapper");
const CAROUSEL = document.querySelector(".carousel__list");

const PREV = document.querySelector(".carousel__object-left");
const NEXT = document.querySelector(".carousel__object-right");

PREV.addEventListener("click", handlerCarousel);
NEXT.addEventListener("click", handlerCarousel);

function handlerCarousel() {
    if (CAROUSEL.childNodes[1].classList.contains("carousel__item-hidden")) {
        CAROUSEL.childNodes[1].classList.remove("carousel__item-hidden");
        CAROUSEL.childNodes[3].classList.add("carousel__item-hidden");
        
        CAROUSEL_SECTION.style.background = "#F06C64";
        CAROUSEL_WRAPPER.style.padding = "0px 0px 55px 0px";
    } else {
        CAROUSEL.childNodes[3].classList.remove("carousel__item-hidden");
        CAROUSEL.childNodes[1].classList.add("carousel__item-hidden");

        CAROUSEL_SECTION.style.background = "#648BF0";
        CAROUSEL_WRAPPER.style.padding = "0px 0px 41px 0px";
    }
}

/* Task: Slider. Activating Phone Screens */

const MOBILE_V_DISPLAY = document.querySelector("img.carousel__mobile-v");
const MOBILE_H_DISPLAY = document.querySelector("img.carousel__mobile-h");

const MOBILE_V = document.getElementById("mobile_v");
const MOBILE_H = document.getElementById("mobile_h");

MOBILE_V.addEventListener("click", handlerMobileV);
MOBILE_H.addEventListener("click", handlerMobileH);

function handlerMobileV() {
    MOBILE_V_DISPLAY.classList.toggle("carousel__display-hidden");
}

function handlerMobileH() {
    MOBILE_H_DISPLAY.classList.toggle("carousel__display-hidden");
}
