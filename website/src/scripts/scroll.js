$(document).ready(function(){
    

    document.body.addEventListener('wheel',()=>{
        if(backgroundImage.speed >= -1){
            setTimeout(()=>{backgroundImage.speed = -6},0)
            setTimeout(()=>{backgroundImage.speed = -5},20)
            setTimeout(()=>{backgroundImage.speed = -4},80)
            setTimeout(()=>{backgroundImage.speed = -3},120)
            setTimeout(()=>{backgroundImage.speed = -2},160)
            setTimeout(()=>{backgroundImage.speed = -1},200)
            setTimeout(()=>{backgroundImage.speed = -.5},300)
            setTimeout(()=>{backgroundImage.speed = -.3},400)
        }
    })

    const canvas = document.getElementById('canvas');

    canvas.width = 10490
    canvas.height = 110; //document.height is obsolete
    const ctx = canvas.getContext('2d');

    const wordsL = ["Эта строка должна двигаться"," влево"," / Эта строка должна двигаться"," влево"," / ","Эта строка должна двигаться"," влево"," / Эта строка должна двигаться"," влево"," / ","Эта строка должна двигаться"," влево"," / Эта строка должна двигаться"," влево"," / ","Эта строка должна двигаться"," влево"," / Эта строка должна двигаться"," влево"," / ","Эта строка должна двигаться"," влево"," / Эта строка должна двигаться"," влево"," / ","Эта строка должна двигаться"," влево"]
    const colors = ["#555555", "#00CAE5","#555555", "#00CAE5", "#555555","#555555", "#00CAE5","#555555", "#00CAE5", "#555555","#555555", "#00CAE5","#555555", "#00CAE5", "#555555","#555555", "#00CAE5","#555555", "#00CAE5", "#555555","#555555", "#00CAE5","#555555", "#00CAE5", "#555555","#555555", "#00CAE5","#555555", "#00CAE5", "#555555","#555555", "#00CAE5","#555555", "#00CAE5", "#555555","#555555", "#00CAE5","#555555", "#00CAE5", "#555555","#555555", "#00CAE5","#555555", "#00CAE5", "#555555"]
    const wordsR = ["Эта строка должна двигаться"," вправо"," / Эта строка должна двигаться"," вправо"," / ","Эта строка должна двигаться"," вправо"," / Эта строка должна двигаться"," вправо"," / ","Эта строка должна двигаться"," вправо"," / Эта строка должна двигаться"," вправо"," / ","Эта строка должна двигаться"," вправо"," / Эта строка должна двигаться"," вправо"," / ","Эта строка должна двигаться"," вправо"," / Эта строка должна двигаться"," вправо"," / Эта строка должна дви..."]
    const backgroundImage = {
        x: 0,
        speed: -.3,
        move: function () {
            this.x += this.speed;
            this.x %= canvas.width;
        },

        draw: function () {

            let offsetL = 0
            let offsetR = 0
            for (let i = 0; i < wordsL.length; i++) {
                offsetL += ctx.measureText(wordsL[i]).width
                let x = this.x + offsetL
                ctx.fillStyle = colors[i]
                ctx.font = "48px Russo";
                ctx.fillText(wordsL[i], x % canvas.width - ctx.measureText(wordsL[i]).width, 36);
                if (this.speed < 0) {
                    ctx.fillText(wordsL[i], x + canvas.width - ctx.measureText(wordsL[i]).width, 36);
                } else {
                    ctx.fillText(wordsL[i], x - ctx.measureText(wordsL[i]).width, 36);
                }
            }

            for (let i = 0; i < wordsR.length; i++) {
                offsetR += ctx.measureText(wordsR[i]).width
                let x = -this.x + offsetR
                ctx.fillStyle = colors[i]
                ctx.font = "48px Russo";
                ctx.fillText(wordsR[i], x % canvas.width - ctx.measureText(wordsR[i]).width, 92);
                if (this.speed > 0) {
                    ctx.fillText(wordsR[i], x + canvas.width - ctx.measureText(wordsR[i]).width, 92);
                } else {
                    ctx.fillText(wordsR[i], x - ctx.measureText(wordsR[i]).width, 92);
                }
            }
            
        },
    };

    function updateCanvas() {
        backgroundImage.move();

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        backgroundImage.draw();

        requestAnimationFrame(updateCanvas);
    }

    // start calling updateCanvas once the image is loaded
    updateCanvas();
});