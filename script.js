const body = document.querySelector('body');
const toggle = document.querySelector('.toggle');
const cardItem = document.querySelectorAll('.item');
const socialRows = document.querySelectorAll('.social-rows');
const followersNumber = document.querySelectorAll('.followers-number');
const overview = document.querySelectorAll('.overview');
const topbg = document.querySelector('.top-bg');

toggle.addEventListener('click', () => {
    body.classList.toggle('light');
    toggle.classList.toggle('active');
    toggle.classList.toggle('light');
    cardItem.forEach(card => {
        card.classList.toggle('light');
    });
    socialRows.forEach(socialRow => {
        socialRow.classList.toggle('light');
    });
    followersNumber.forEach(follower => {
        follower.classList.toggle('light');
    });
    overview.forEach(view => {
        view.classList.toggle('light');
    });
    topbg.classList.toggle('light');
});
