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
