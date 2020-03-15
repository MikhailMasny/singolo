/* Task: Get a quote */

function getQuote() {
    const error = "Fill out the form and try again.";

    const name = document.querySelector("input:nth-child(1)").value;
    const email = document.querySelector("input:nth-child(2)").value;

    if (name === "" || email === "") {
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

const submitButton = document.querySelector(".contact__button");
submitButton.addEventListener("click", getQuote);