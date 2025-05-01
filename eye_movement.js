var header = document.getElementById("header");
var parallax = -3, max_dist = 13;
var mouseX = 0, mouseY = 0;
var scale = Math.max(window.innerWidth / 3840, window.innerHeight / 2100);

function update_eyes() {
    var left_dx = mouseX - (window.innerWidth / 2 + 225 * scale);
    var left_dy = mouseY - (window.innerHeight / 2 - 165 * scale + window.scrollY / parallax);
    var right_dx = mouseX - (window.innerWidth / 2 + 385 * scale);
    var right_dy = mouseY - (window.innerHeight / 2 - 215 * scale + window.scrollY / parallax);

    var left_dist = Math.sqrt(left_dx * left_dx + left_dy * left_dy);
    var right_dist = Math.sqrt(right_dx * right_dx + right_dy * right_dy);

    var left_x = 2, left_y = 0;
    if (left_dist > max_dist * scale) {
        left_x += max_dist * left_dx / left_dist;
        left_y += max_dist * 0.55 * left_dy / left_dist;
    }
    else {
        left_x += left_dx / scale;
        left_y += left_dy / scale;
    }

    var right_x = 0, right_y = 0;
    if (right_dist > max_dist * scale) {
        right_x += max_dist * right_dx / right_dist;
        right_y += max_dist * 0.55 * right_dy / right_dist;
    }
    else {
        right_x += right_dx / scale;
        right_y += right_dy / scale;
    }

    header.style.backgroundPositionX = `50%, calc(50% + ${left_x * scale}px), calc(50% + ${right_x * scale}px), 50%`;
    header.style.backgroundPositionY = `calc(50% + ${window.scrollY / parallax}px), calc(50% + ${left_y * scale + window.scrollY / parallax}px), calc(50% + ${right_y * scale + window.scrollY / parallax}px), calc(50% + ${window.scrollY / parallax}px)`;
}

window.addEventListener("resize", () => {
    scale = Math.max(window.innerWidth / 3840, window.innerHeight / 2100);
    update_eyes();
});
document.addEventListener("pointermove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    update_eyes();
});
document.addEventListener("scroll", update_eyes);