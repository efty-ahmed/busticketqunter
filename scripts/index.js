
// Toggle mobile menu visibility
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});


const seats = document.querySelectorAll('.seat');
const selectedSeatsContainer = document.getElementById('selected-seats');
const totalPriceElement = document.getElementById('total-price');
let selectedSeats = [];
const seatPrice = 550;
const seatClass = "Economy"; 
const maxSeats = 4;

seats.forEach(seat => {
    seat.addEventListener('click', () => {
        const seatNumber = seat.getAttribute('data-seat');

        if (seat.classList.contains('selected')) {
            // Deselect seat
            seat.classList.remove('selected');
            selectedSeats = selectedSeats.filter(s => s !== seatNumber);
        } else if (selectedSeats.length < maxSeats) {
            // Select seat
            seat.classList.add('selected');
            selectedSeats.push(seatNumber);
        }

        // Update selected seats and total price
        updateSelectedSeats();
    });
});

function updateSelectedSeats() {
    selectedSeatsContainer.innerHTML = selectedSeats.map(seat => `
        <div class="flex justify-between mb-2">
            <span>${seat}</span>
            <span>${seatClass}</span> <!-- Add Class Information -->
            <span>BDT ${seatPrice}</span>
        </div>
    `).join('');

    const totalPrice = selectedSeats.length * seatPrice;
    totalPriceElement.textContent = `BDT ${totalPrice}`;
}

//------------------------------------->>>>>>



// Elements
const passengerNameInput = document.getElementById('passenger-name');
const phoneNumberInput = document.getElementById('phone-number');
const emailInput = document.getElementById('email-id');
const nextButton = document.getElementById('next-button');
const successModal = document.getElementById('success-modal');

// Function to check if all fields are filled
function validateForm() {
    if (passengerNameInput.value && phoneNumberInput.value && emailInput.value) {
        nextButton.disabled = false;
        nextButton.classList.remove('bg-gray-400', 'cursor-not-allowed');
        nextButton.classList.add('bg-green-500', 'hover:bg-green-600');
    } else {
        nextButton.disabled = true;
        nextButton.classList.add('bg-gray-400', 'cursor-not-allowed');
        nextButton.classList.remove('bg-green-500', 'hover:bg-green-600');
    }
}

// Event listeners to validate the form
passengerNameInput.addEventListener('input', validateForm);
phoneNumberInput.addEventListener('input', validateForm);
emailInput.addEventListener('input', validateForm);

// Show success modal when form is submitted
nextButton.addEventListener('click', function () {
    if (!nextButton.disabled) {
        successModal.classList.remove('hidden');
    }
});

// Close modal
function closeModal() {
    successModal.classList.add('hidden');
}


//------------------------------->>>







