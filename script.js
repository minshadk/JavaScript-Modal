'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal'); // like array
console.log(btnsOpenModal);


const openModal = function() {
    // console.log('Button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for (let i = 0; i < btnsOpenModal.length; i++)
// secelt all modals
btnsOpenModal[i].addEventListener('click',openModal);


btnCloseModal.addEventListener('click',closeModal);
// clicking out side
overlay.addEventListener('click',closeModal);

// Adding Key press event 
document.addEventListener('keydown',function(e) {
    // ??? e stores key pressed in e 

    // ??? checking Escape is pressed or not
    if(e.key === 'Escape' && !modal.classList.contains ('hidden')) {
        closeModal();
    }
});

