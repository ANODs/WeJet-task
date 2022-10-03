$(document).ready(function() {
    header = document.querySelector('#header');
    let interval1 = setTimeout(() => {
        header.classList.toggle('visible');
        header.classList.toggle('visible');
        header.classList.toggle('visible');
    }, 1000);
    let interval2 = setTimeout(() => {
        header.classList.toggle('visible');
        header.classList.toggle('active');
    }, 3000);

    interval1
    interval2
})