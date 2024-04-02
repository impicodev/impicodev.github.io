var header = document.getElementById('header');
var scaleX = window.innerWidth / 3840;
var scaleY = window.innerHeight / 2880;
var scale = Math.max(window.innerWidth / 3840, window.innerHeight / 2880);

var temp = document.getElementById('temp');

window.onresize = (e) => {
    scale = Math.max(window.innerWidth / 3840, window.innerHeight / 2880);
};

document.onmousemove = (e) => {
    var left_dx = e.clientX - (window.innerWidth / 2 + 440 * scale);
    var left_dy = e.clientY - (window.innerHeight / 2 - 210 * scale); // 64
    var right_dx = e.clientX - (window.innerWidth / 2 + 730 * scale);
    var right_dy = e.clientY - (window.innerHeight / 2 - 200 * scale); // 50

    var left_dist = Math.sqrt(left_dx * left_dx + left_dy * left_dy);
    var right_dist = Math.sqrt(right_dx * right_dx + right_dy * right_dy);

    var left_x = 10, left_y = 0;
    if (left_dist > 10 * scale) {
        left_x += 10 * left_dx / left_dist;
        left_y += 10 * left_dy / left_dist;
    }
    else {
        left_x += left_dx / scale;
        left_y += left_dy / scale;
    }

    var right_x = 16, right_y = 2;
    if (right_dist > 10 * scale) {
        right_x += 10 * right_dx / right_dist;
        right_y += 10 * right_dy / right_dist;
    }
    else {
        right_x += right_dx / scale;
        right_y += right_dy / scale;
    }
    header.style.backgroundPositionX = `50%, calc(50% + ${left_x * scale}px), calc(50% + ${right_x * scale}px), 50%`;
    header.style.backgroundPositionY = `50%, calc(50% + ${left_y * scale}px), calc(50% + ${right_y * scale}px), 50%`;
};