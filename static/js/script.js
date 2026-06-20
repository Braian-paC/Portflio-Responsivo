document.getElementById("arrow_button_home_down").addEventListener("click", () => {
    scrollDown()
})
document.getElementById("arrow_button_home_up").addEventListener("click", () => {
    scrollUp()
})

function scrollDown() {
    window.scrollTo(0, 730)
}
function scrollUp() {
    window.scrollTo(0, 0)
}