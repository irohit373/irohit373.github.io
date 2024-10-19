let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');

let openModal = () => {
    console.log("modal is open");
    modal.classList.add("active");
    overlay.classList.add("overlayactive");
};

let closeModal = () => {
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
};