var header = document.getElementById('header');
var scaleX = window.innerWidth / 3840;
var scaleY = window.innerHeight / 2880;
var scale = Math.max(window.innerWidth / 3840, window.innerHeight / 2880);

var temp = document.getElementById('temp');

window.onresize = (e) => {
    scale = Math.max(window.innerWidth / 3840, window.innerHeight / 2880);
};

document.onmousemove = (e) => {
    temp.style.left = (window.innerWidth / 2 + 440 * scaleX) + "px";
    temp.style.top = (window.innerHeight / 2 - 210 * scaleY) + "px";
    var left_dx = e.clientX - (window.innerWidth / 2 + 440 * scale);
    var left_dy = e.clientY - (window.innerHeight / 2 - 210 * scale); // 64
    var right_dx = e.clientX - (window.innerWidth / 2 + 760 * scale);
    var right_dy = e.clientY - (window.innerHeight / 2 - 200 * scale); // 50
    
    console.log((e.clientX - window.innerWidth / 2) / scale + " " + (e.clientY - window.innerHeight / 2) / scale);
    //console.log(left_dx + " " + left_dy + "        " + right_dx + " " + right_dy);

    var left_dist = Math.sqrt(left_dx * left_dx + left_dy * left_dy);
    var right_dist = Math.sqrt(right_dx * right_dx + right_dy * right_dy);

    var left_x = 10 + 10 * left_dx / left_dist;
    var left_y = 10 * left_dy / left_dist;
    var right_x = 16 + 10 * right_dx / right_dist;
    var right_y = 2 + 10 * right_dy / right_dist;
    header.style.backgroundPositionX = "0," + left_x * scale + "px," + right_x * scale + "px,0";
    header.style.backgroundPositionY = "0," + left_y * scale + "px," + right_y * scale + "px,0";
};