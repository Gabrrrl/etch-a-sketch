const contEl = document.querySelector('.container')
const reset = document.querySelector('.reset')
const size = document.querySelector('.slider')

let gridbox = () => {
    contEl.innerHTML = ""
    for (i = 0; i < 256; i++) {
        let box = document.createElement('div')
        contEl.style.gridTemplateColumns = `repeat(${size.value}, 1fr)`
        contEl.style.gridTemplateRows = `repeat(${size.value}, 1fr)`
        box.style.backgroundColor = 'white'
        box.addEventListener('mouseover', (e) => {
            box.setAttribute('style', 'background-color: gray')
        })
        contEl.appendChild(box)
    }
}

let updateGridbox = () => {
    contEl.innerHTML = ""
    for (i = 0; i < size.value * size.value; i++) {
        let box = document.createElement('div')
        contEl.style.gridTemplateColumns = `repeat(${size.value}, 1fr)`
        contEl.style.gridTemplateRows = `repeat(${size.value}, 1fr)`
        box.style.backgroundColor = 'white'
        box.addEventListener('mouseover', (e) => {
            box.setAttribute('style', 'background-color: gray')
        })
        contEl.appendChild(box)
    }
}

reset.addEventListener('click', (e) => {
    if (size.value == 16) {
        gridbox()
    } else {
        updateGridbox()
    }
})

size.addEventListener('change', () => {
    contEl.innerHTML = "";
    updateGridbox()
})

gridbox()