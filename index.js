const decorations = document.getElementsByClassName('decoration');
const colors = ['red', 'yellow', 'blue'];
let counter = 0
const partyTime = function () {
    for (const ball of decorations) {
        ball.classList.remove(colors[counter])
        ball.classList.add(colors[(counter + 1) % colors.length])
    }
    if (counter === colors.length - 1) {
        counter = 0;
    } else {
        counter++
    }
    // counter = (counter + 1) % colors.length;
    console.log('c', counter, 'v', colors.length)
}
setInterval(partyTime, 5000)