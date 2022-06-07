let contEl = document.querySelector('.container')

let gridbox = () => {
    for (i = 0; i < 440; i++) {
    const box = document.createElement('div')
    box.classList.add('squares')
    contEl.appendChild(box)
}
}

const moveOverSquare = document.querySelector('div');
moveOverSquare.addEventListener('mouseover', (e) => {
    e.target.classList.replace('squares', 'draw')
})

gridbox()