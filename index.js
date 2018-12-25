const tree = document.querySelector('svg#tree');
const colors = ['red', 'yellow', 'blue'];
let counter = 0;

const partyTime = function () {
    // for (const ball of decorations) {
    //     ball.classList.remove(colors[counter])
    //     ball.classList.add(colors[(counter + 1) % colors.length])
    // }
    tree.classList.remove(colors[counter]);
    tree.classList.add(colors[(counter + 1) % colors.length]);
    // if (counter === colors.length - 1) {
    //     counter = 0;
    // } else {
    //     counter++
    // }
    counter = counter >= colors.length ? 0 : counter + 1;
}

setInterval(partyTime, 5000)