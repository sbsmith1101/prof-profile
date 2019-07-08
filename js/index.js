// Tabs shower/ hider

// light and dark mode function

var lightbulb = document.querySelector('input[name=light-switch]');

lightbulb.addEventListener('change', function () {
    if (this.checked) {
        switchmode()
        document.documentElement.setAttribute('data-theme', 'darkside')
    } else {
        switchmode()
        document.documentElement.setAttribute('data-theme', 'lightside')
    }
})

let switchmode = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition');
    }, 1200)
}
