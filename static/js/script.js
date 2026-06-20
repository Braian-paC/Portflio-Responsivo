document.getElementById("arrow_button_home").addEventListener("click", () => {
    scrollDown()
})

document.getElementById("nobl_button").addEventListener("click", () => {
    window.open('https://nobl.io', '_blank');
})

function scrollDown() {
    window.scroll(0, window.scrollY + 1080)
}
