var pets = document.getElementById("pets");

function update_pets() {
    var size = pets.firstElementChild.clientWidth;
    var right = pets.firstElementChild.getBoundingClientRect().right;
    if (right <= -size) {
        pets.appendChild(pets.firstElementChild);
        pets.scrollLeft -= size;
    } else if (right >= 0) {
        pets.scrollLeft += pets.lastElementChild.clientWidth;
        pets.insertBefore(pets.lastElementChild, pets.firstElementChild);
    }

    for (image of pets.children) {
        var rect = image.getBoundingClientRect();
        var scale = window.innerWidth / 2 - (rect.right + rect.left) / 2;
        scale = 1 - Math.abs(scale) / window.innerWidth;
        image.style.scale = scale;
    }
}

pets.addEventListener("pointermove", (event) => {
    event.preventDefault();
    if (getComputedStyle(pets).getPropertyValue("content") == '"dragging"') {
        pets.scrollLeft -= event.movementX * 2;
    }
});

pets.addEventListener("scroll", update_pets);
window.addEventListener("resize", update_pets);

