document.getElementById('menuToggle').addEventListener('click', function () {
    var container = document.querySelector('.menu-container');
    var hamburgerIcon = document.querySelector('.menu-toggle .hamburger');
    var cancelIcon = document.querySelector('.menu-toggle .cancel');

    container.classList.toggle('menu-visible');
    hamburgerIcon.computedStyleMap.display = container.classList.contains('menu-visible') ? 'none' : 'block';
    cancelIcon.style.display = container.classList.contains('menu-visible') ? 'block' : 'none';
});

document.addEventListener('DOMContentLoaded', function () {
    const faqQuestios = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function () {
            const answer = this.nextElementSibling;
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
            } else {
                answer.style.display = 'block'
            }
        });
    });
});


document.addEventListener('DOMContentLoaded',function(){
    const faqQuestions = this.document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
            } else {
                answer.style.display = 'block'
            }
        })
    })
})

// for counter
document.addEventListener('DOMContentLoaded',() {
    const counters = document.querySelectorAll('.counter');

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const currentText = counter.innerText;
            const currentNumber = +currentText.replace('+','');

            const speed = 500;
            const increment = target / speed;
        }
    })
})