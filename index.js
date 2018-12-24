const decorations = document.getElementsByClassName('decoration');
const colors = ['red', 'yellow', 'blue'];
const partyTime = function () {
    for (const ball of decorations) {
        const currentColor = ball.style.fill;
        if (!currentColor) {
            ball.style.fill = colors[0];
            return
        }
        const currentSelectedColor = colors.indexOf(currentColor)

    }
}
partyTime()
setInterval()