$(document).ready(function() {
    let itemsLeft = document.querySelector('.row.scrollLeft').querySelectorAll('DIV');
    let itemsRight = document.querySelector('.row.scrollRight').querySelectorAll('DIV');
    let delta = 0
    let step = 24
    console.log(itemsLeft)

    $(document).ready(function() {
        document.body.addEventListener('wheel',(event)=>{

            delta += (event.deltaY/100 < 0 ? event.deltaY/100 : -event.deltaY/100)

            if(delta % step == 0)
            {
                delta %= step
                itemsLeft[0].style.transition = '0s'
                itemsLeft[1].style.transition = '0s'
                itemsLeft[2].style.transition = '0s'

                itemsRight[0].style.transition = '0s'
                itemsRight[1].style.transition = '0s'
                itemsRight[2].style.transition = '0s'

                console.log(delta)

                delta1 = delta * itemsLeft[0].offsetWidth / step
                delta2 = itemsLeft[1].offsetWidth + delta1 + 100
                delta3 = itemsLeft[2].offsetWidth + delta2 - 50

                delta4 = (-delta * itemsRight[0].offsetWidth / step) -itemsRight[0].offsetWidth
                delta5 = (itemsRight[1].offsetWidth + delta4 + 100)
                delta6 = (itemsRight[2].offsetWidth + delta5 - 50)

                delta %= step

                delta1 = delta * itemsLeft[0].offsetWidth / step
                delta2 = itemsLeft[1].offsetWidth + delta1 + 100
                delta3 = itemsLeft[2].offsetWidth + delta2 - 50

                delta4 = (-delta * itemsRight[0].offsetWidth / step) -itemsRight[0].offsetWidth
                delta5 = (itemsRight[1].offsetWidth + delta4 + 100)
                delta6 = (itemsRight[2].offsetWidth + delta5 - 50)
            }
            else
            {
                itemsLeft[0].style.transition = '.4s'
                itemsLeft[1].style.transition = '.4s'
                itemsLeft[2].style.transition = '.4s'

                itemsRight[0].style.transition = '.4s'
                itemsRight[1].style.transition = '.4s'
                itemsRight[2].style.transition = '.4s'

                delta1 = delta * itemsLeft[0].offsetWidth / step
                delta2 = itemsLeft[1].offsetWidth + delta1 + 100
                delta3 = itemsLeft[2].offsetWidth + delta2 - 50

                delta4 = (-delta * itemsRight[0].offsetWidth / step) -itemsRight[0].offsetWidth
                delta5 = (itemsRight[1].offsetWidth + delta4 + 100)
                delta6 = (itemsRight[2].offsetWidth + delta5 - 50)
            }


            itemsLeft[0].style.transform = 'translateX('+delta1+'px)';
            itemsLeft[1].style.transform = 'translateX('+delta2+'px)';
            itemsLeft[2].style.transform = 'translateX('+delta3+'px)';

            itemsRight[0].style.transform = 'translateX('+delta4+'px)';
            itemsRight[1].style.transform = 'translateX('+delta5+'px)';
            itemsRight[2].style.transform = 'translateX('+delta6+'px)';
            // console.log(delta3)
        })
    });
});