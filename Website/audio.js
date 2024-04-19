var i = 0;
var images = [];
var time = 1000;

// Image list

images[0] = 'redtint2.jpg';
images[1] = 'NewTint.png';
images[2] = 'image3.jpg';

function changeImg(){
    document.slide.src = images[i];

    if(i < images.length - 1){
i ++;

    } else {
        i = 0;
    }
setTimeout("changeImg()",time);

}

window.onload = changeImg;