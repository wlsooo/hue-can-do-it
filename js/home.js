document.addEventListener('DOMContentLoaded', function () {
    const challengeContainer = document.getElementById('challenges');
    const challengeTypeContainer = document.getElementById('challenge-types');
    const startContainer = document.getElementById('startContainer');

    const challengeButtons = challengeContainer.querySelectorAll('.challenge button');
    const challengeTypeButtons = challengeTypeContainer.querySelectorAll('.challenge-type button');

    challengeButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            challengeTypeContainer.style.display = 'flex';
        });
    });

    challengeTypeButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            startContainer.style.display = 'flex';
        });
    });


    
    const modal = document.getElementById('modal');

    const startbtn = document.querySelector('.startbtn');
    startbtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
});