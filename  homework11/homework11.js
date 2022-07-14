function getRandomColor(value = 256) {
    const randomColor = Math.floor(Math.random() * value);
    return randomColor
}

function changeColor() {
    document.querySelectorAll('.box').forEach(element => {
        element.style.backgroundColor = `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;

    });
}

let timer = setTimeout(function run() {
    let i = changeColor();
    (i++);
    timer = setTimeout(run, 1000);
}, 1000);