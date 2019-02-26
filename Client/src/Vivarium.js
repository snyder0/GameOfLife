let Vivarium = {}
let vivarium = []

// Creates vivarium of requested size
Vivarium.create = (columns, rows) => {
    // Fill 2D array with organisms
    vivarium = Array(columns).fill().map(() => 
        Array(rows).fill().map(() => Array(columns).fill(0))
    )
}

Vivarium.initiate = () => {
    // Initiate matrix of vivarium
    for (let row in vivarium) {
        vivarium[row].map((organism, column) => {
            organism = Organsim.create(parseInt(row), column)
            if (organism.isAlive) {
                Vivarium.renderOrganism(true, organism)
            }
        })
    }
}

Vivarium.renderOrganism = (isAlive, organism) => {
    let canvas = document.getElementById('vivarium')
    let cell = canvas.getContext('2d')
    
    if (isAlive) {
        organism.status = 1
        cell.fillStyle = organism.color
        cell.fillRect(organism.x, organism.y, 10, 10)
        cell.strokeRect(organism.x, organism.y, 10, 10)
    } else {
        organism.status = 0
        cell.fillStyle = '#565655'
        cell.fillRect(organism.x, organism.y, 10, 10)
        cell.strokeRect(organism.x, organism.y, 10, 10)
    }
}

Vivarium.activate = (vivarium) => {
    let typeSum = 0

    for (let row in vivarium) {
        for (let column in vivarium[row]) {
            let organism = vivarium[row][column]
            // Kill organisms on edges for now
            if (row == 0 || row == vivarium[row].length - 1 || column == 0 || column == vivarium[row].length - 1) {
                Vivarium.setCell(false, organism)
            } else {
                typeSum = Vivarium.scoutNeighbors(vivarium, row, column)
                // Under/Overpopulated
                if (organism.status == 1 && (typeSum <= 1 || typeSum >= 4)) {
                    Vivarium.setCell(false, organism)
                // Survive
                } else if (organism.status == 1 && (typeSum == 2 || typeSum == 3)) {
                    organism.age++
                    // Die from old age
                    if (organism.age > organism.lifeSpan) {
                        Vivarium.setCell(false, organism)
                    }
                // Reproduce
                } else if (organism.status == 0 && typeSum == 3) {
                    Vivarium.setCell(true, organism)
                }
            }
        }
    }
}

Vivarium.scoutNeighbors = (vivarium, row, column) => {
    let typeSum = 0
    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
            let neighborOrganism = vivarium[i + parseInt(row)][j + parseInt(column)]
            let self = vivarium[row][column]

            if (neighborOrganism.type == self.type) {
                typeSum += neighborOrganism.status
            }
        }
    }
    typeSum -= self.status


    return typeSum
}

Vivarium.run = (vivarium) => {
    for (let i = 0; i < 1000; i++) {
        setTimeout(() => {
            Vivarium.activate(vivarium)
        }, 300)
    }
}
