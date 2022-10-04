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

    $('.arrowForm').on('click',()=>{
        $('.popup').removeClass('d-none')
        $(document.body).addClass('blured')
})
    $('.openform').on('click',()=>{
        $('.popup').removeClass('d-none')
        $(document.body).addClass('blured')
})
    $('.x-mark').on('click',()=>{
        $('.popup').addClass('d-none')
        $(document.body).removeClass('blured')
})



    document.body.querySelectorAll('INPUT').forEach((item)=>{

        item.onfocus = function() {
            item.parentNode.classList.add('active')
        };

        item.onblur = function() {
            if(item.value==''){
                item.parentNode.classList.remove('active')
                item.parentNode.classList.remove('texted')
            }
        };

        $(item).on('keydown', (e)=>{
                item.parentNode.classList.add('texted')
        })
    })
})