// Handle booking ticket functionality
function bookTicket(movieTitle) {
    const form = document.getElementById('form');
    const bookingForm = document.getElementById('booking-form');
    const movieTitleInput = document.createElement('h3');
    movieTitleInput.innerText = "Booking Tickets for " + movieTitle;
    bookingForm.insertBefore(movieTitleInput, form);

    // Show booking form
    form.style.display = "block";

    // When form is submitted, show confirmation message
    form.onsubmit = function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const seats = document.getElementById('seats').value;

        if (name && seats) {
            alert(`Booking Confirmed!\nName: ${name}\nSeats: ${seats} for ${movieTitle}`);
            form.reset();
            form.style.display = "none";
            movieTitleInput.remove();
        } else {
            alert("Please fill in all fields!");
        }
    };
}
