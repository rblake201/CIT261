var timesPressed = 0

window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio)
        return;
    audio.currentTime = 0
    audio.play()

    var div = this.document.querySelector(`div[data-key="${e.keyCode}"]`)
    div.classList.add('playing')

    this.console.log(div.style.transform)

    timesPressed++

    if (timesPressed > 10)
        timesPressed = 0

    div.style.transform = `translate(0px, ${timesPressed * 10}px)`

    audio.onended = () => {
        div.classList.remove('playing')
        div.style.transform = `translate(0px, 0px)`
    }
})
