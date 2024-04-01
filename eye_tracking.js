var header = document.getElementById('header');
/*
image width: 3840

left eye
x: 2360, 61.5%
y: 840, 21.9%

right eye
x: 2660, 69.3%
y: 850, 22.1%
*/

document.onmousemove = (e) => {
    var xpercent = e.clientX / window.innerWidth * 100;
    var ypercent = e.clientY / window.innerHeight * 100;
    console.log(xpercent);
}