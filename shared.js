var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var selectPlanButtons = document.querySelectorAll('.plan button');
var negativeResponseButton = document.querySelector(".modal__action.modal__action--negative");
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

console.dir(negativeResponseButton);
for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', () => {
        // modal.style.display = "block";
        // backdrop.style.display = 'block';
        modal.classList.add('open');
        backdrop.classList.add('open');
    });
}

backdrop.addEventListener('click', () => {
    mobileNav.classList.remove("open");
    closeModal();
});

if (negativeResponseButton) {
    negativeResponseButton.addEventListener('click', closeModal);
}


toggleButton.addEventListener('click', function () {
    //mobileNav.style.display = 'block';
    //backdrop.style.display = 'block';
    mobileNav.classList.add("open");
    backdrop.classList.add('open');
})

function closeModal() {
    if (modal) {
        modal.classList.remove('open');
    }
    backdrop.classList.remove('open');
}