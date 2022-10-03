$(document).ready(function() {

    $('#header').on('mousemove',(e)=>{e.preventDefault()
        let spaceman = document.querySelector('.spaceman > img');
        let movementValue = spaceman.getAttribute('data-parallax');

        let dx = e.clientX * movementValue;
        let dy = e.clientY * movementValue;
        let w = window.innerWidth;
        let h = window.innerHeight;
        w>h ? dx = dx*(h/w) : dy = dy*(w/h);

            spaceman.style.transform = "translate("+-dx+"px,"+-dy+"px)";
        })
});