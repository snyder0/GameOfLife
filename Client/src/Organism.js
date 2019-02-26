let Organsim = {}
let canvasX = 0
let canvasY = 0

Organsim.create = (x, y) => {
    let organism = {
        type: 'default',
        size: 10,
        isAlive: false,
        canvasX: canvasX,
        canvasY: canvasY
    }

    if (x == 0 && y == 0) {
        organism.neighbors = [
            { x: x + 1, y: y + 1 },
            { x: x, y: y + 1 },
            { x: x + 1, y: y },
            { x: vivarium[0].length - 1, y: y + 1 },
            { x: vivarium[0].length - 1, y: y },
            { x: x, y: vivarium[0].length - 1 },
            { x: x + 1, y: vivarium[0].length - 1 },
            { x: vivarium[0].length - 1, y: vivarium[0].length - 1 }
        ]
    } else if (x == vivarium[0].length - 1 && y == 0) {
        organism.neighbors = [
            { x: x - 1, y: y + 1 },
            { x: x, y: y + 1 },
            { x: x - 1, y: y },
            { x: 0, y: y},
            { x: 0, y: vivarium[0].length - 1 },
            { x: x - 1, y: vivarium[0].length - 1 },
            { x: 0, y: y + 1 },
            { x: x, y: vivarium[0].length - 1 }
        ]
    } else if (x == 0 && y == vivarium[0].length - 1) {
        // Stoped here (this is wrong fix it)
        organism.neighbors = [
            { x: x - 1, y: y + 1 },
            { x: x, y: y + 1 },
            { x: x - 1, y: y },
            { x: 0, y: y},
            { x: 0, y: vivarium[0].length - 1 },
            { x: x - 1, y: vivarium[0].length - 1 },
            { x: 0, y: y + 1 },
            { x: x, y: vivarium[0].length - 1 }
        ]
    } else if(x == 0 && y != vivarium[0].length - 1) {
        organism.neighbors = [
            { x: x + 1, y: y + 1 },
            { x: x + 1, y: y - 1 },
            { x: x + 1, y: y },
            { x: x, y: y - 1 },
            { x: x, y: y + 1 }
        ]
    } else if(y == 0 && x != vivarium[0].length - 1) {
        organism.neighbors = [
            { x: x + 1, y: y + 1 },
            { x: x - 1, y: y + 1 },
            { x: x + 1, y: y },
            { x: x - 1, y: y },
            { x: x, y: y + 1 }
        ]
    } else {
        organism.neighbors = [
            { x: x - 1, y: y - 1 },
            { x: x + 1, y: y + 1 },
            { x: x + 1, y: y - 1 },
            { x: x - 1, y: y + 1 },
            { x: x, y: y - 1 },
            { x: x, y: y + 1 },
            { x: x - 1, y: y },
            { x: x + 1, y: y }
        ]
    }

    if (canvasX < (vivarium[0].length * 10) - 10) {
        canvasX += 10
    } else {
        canvasY += 10
        canvasX = 0
    }

    

    return organism
}