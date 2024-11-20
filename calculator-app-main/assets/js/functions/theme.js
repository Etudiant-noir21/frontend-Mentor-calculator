//    export theme

let themes = document.querySelectorAll('.theme input')
console.log(themes)
themes = Array.from(themes)
const light = themes[1]
const dark = themes[0]
const white = themes[2]
export const theme = () => {
// changement de theme
    dark.addEventListener('change', () => {
        document.body.classList.remove('theme_blanc')
        document.body.classList.remove('theme_sombre')
})
    light.addEventListener('change', () => {
        document.body.classList.add('theme_blanc')
        document.body.classList.remove('theme_sombre')
    })
    white.addEventListener('change', () => {
        document.body.classList.remove('theme_blanc')
        document.body.classList.add('theme_sombre')
    })
    
}

// alert('hello')