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

const PICTURES = document.querySelectorAll(".portfolio__picture");

const TABS = document.querySelector(".portfolio__tags");
TABS.addEventListener("click", handlerPortfolio);

function removePictureClasses() {
    PICTURES.forEach(element => {
        element.classList.remove("portfolio__picture-ordered");
    });
}

function selectPictures(...pictures) {

    pictures.forEach(picture => {
        let element = document.getElementById(picture);
        element.classList.add("portfolio__picture-ordered");
    });
}

function handlerPortfolio(event) {
    TABS.querySelectorAll(".portfolio__tag").forEach(element => {
        element.classList.remove("portfolio__tag-selected");
    });

    event.target.classList.add("portfolio__tag-selected");

    if (event.target.name === "all") {
        removePictureClasses();
    }
    
    if (event.target.name === "web-design") {
        removePictureClasses();
        selectPictures("portfolio-picture-6", "portfolio-picture-10", "portfolio-picture-12");
    }

    if (event.target.name === "graphic-design") {
        removePictureClasses();
        selectPictures("portfolio-picture-2", "portfolio-picture-7", "portfolio-picture-8", "portfolio-picture-11");
    }

    if (event.target.name === "artwork") {
        removePictureClasses();
        selectPictures("portfolio-picture-1", "portfolio-picture-3", "portfolio-picture-4", "portfolio-picture-5", "portfolio-picture-9");
    }
}
