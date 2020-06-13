var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var selectPlanButtons = document.querySelectorAll('.plan button');
var negativeResponseButton = document.querySelector(".modal__action.modal__action--negative");
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
var ctaButton = document.querySelector('.main-nav__item--cta');

// console.dir(negativeResponseButton);
for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', () => {
        // modal.style.display = "block";
        // backdrop.style.display = 'block';
        modal.classList.add('open');
        backdrop.style.display = 'block';
        setTimeout(function () {
            backdrop.classList.add('open');
        }, 10);
    });
}

backdrop.addEventListener('click', () => {
    mobileNav.classList.remove("open");
    closeModal();
});

if (negativeResponseButton) {
    negativeResponseButton.addEventListener('click', closeModal);
}

function closeModal() {
    if (modal) {
        modal.classList.remove('open');
    }
    backdrop.classList.remove('open');
    setTimeout(function () {
        backdrop.style.display = 'none';
    }, 10);
}

toggleButton.addEventListener('click', function () {
    //mobileNav.style.display = 'block';
    //backdrop.style.display = 'block';
    mobileNav.classList.add("open");
    backdrop.style.display = "block";
    setTimeout(function () {
        backdrop.classList.add('open');
    }, 10);
})

ctaButton.addEventListener('animationstart', function (event) {
    console.log('Animation started', event);
});

ctaButton.addEventListener('animationend', function (event) {
    console.log('Animation finished', event);
})

ctaButton.addEventListener('animationiteration', function (event) {
    console.log('Animation iteration', event);
})