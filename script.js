let offset = 0;
const sliderline = document.querySelector('.slider_line');

document.querySelector('.next').addEventListener('click',function() {
    offset += 520
    if (offset>1060){
        offset = 0
    }
    sliderline.style.left = -offset + 'px';
})

document.querySelector('.prev').addEventListener('click',function() {
    offset -= 520
    if (offset < 0){
        offset = 520
    }
    sliderline.style.left = -offset + 'px';
})