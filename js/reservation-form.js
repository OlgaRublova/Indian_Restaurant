const reservationBtn = document.getElementById("reservation");
const reservationBox = document.querySelector(".reservation");
const closeBtn = document.querySelector(".close-btn");
const bookTable = document.querySelector(".book-table");




//event listeners
loadEventListeners();

function loadEventListeners() {
    reservationBtn.addEventListener("click", toggleReservationPopUp);
    closeBtn.addEventListener('click', toggleReservationPopUp);
    bookTable.addEventListener('click', postBookingConfirmation);
}


//functions
function toggleReservationPopUp() {
    reservationBox.classList.toggle('none');

}

function postBookingConfirmation() {
    // Read the values from the FORM
    const day = document.getElementById('day').value;
    const hour = document.getElementById('hour').value;
    const person = document.getElementById('person').value;

    let messageHeading = document.querySelector(".reservation__heading");
    let personName = document.getElementById('personName').value;
    messageHeading.textContent = `Thank you, ${personName}`;


    const div = document.querySelector(".card__content");
    div.innerHTML = `
    <p> Your table for ${person} person was booked for ${day} at ${hour}</p>
    `
    div.classList.add('divLayout');
    console.log(div);
}


//when the form is submitted
