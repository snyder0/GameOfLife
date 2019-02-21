let vivarium = Vivarium.create(100, 100)

let canvas = document.getElementById('vivarium')
canvas.addEventListener('click', getClickPosition, false)

function getClickPosition(e) {
    
    let xPosition = e.clientX - canvas.offsetLeft
    let yPosition = e.clientY - canvas.offsetTop

    xPosition = (Math.ceil(xPosition / 10) * 10) - 10
    yPosition = (Math.ceil(yPosition / 10) * 10) - 10

    console.log(`x: ${xPosition / 10} y: ${yPosition / 10}`)

    let organism = vivarium[xPosition / 10][yPosition / 10]

    if (organism.status == 0) {
        organism.x = xPosition
        organism.y = yPosition
        Vivarium.setCell(true, organism)
    } else {
        Vivarium.setCell(false, organism)
    }
}