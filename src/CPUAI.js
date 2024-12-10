let previousMoves = [];
let previousHit = false;
let previousSink = false;
let currentShipHitCounter = 0;
let currentShipHitList = [];
let direction = 1;

let cpuHitList = Array.from({ length: 10 }, () => Array(10).fill(false));

function setPreviousSink(val) {
    previousSink = val;
}

function setPreviousHit(val) {
    previousHit = val;
}

function getRandomCell() {
    let x, y;
    do {
        x = Math.floor(Math.random() * 10);
        y = Math.floor(Math.random() * 10);
    } while (cpuHitList[x][y]);
    return [x, y];
}

function blockCells(cellArray) {
    for (let i = 0; i < cellArray.length; i++) {
        let [x, y] = cellArray[i];
        if (x - 1 >= 0) {
            if (y - 1 >= 0) {
                cpuHitList[x - 1][y - 1] = true;
                cpuHitList[x][y - 1] = true;
            }
            cpuHitList[x - 1][y] = true;
            if (y + 1 < 10) {
                cpuHitList[x - 1][y + 1] = true;
                cpuHitList[x][y + 1] = true;
            }
        }
        if (x + 1 >= 0) {
            if (y - 1 >= 0) cpuHitList[x + 1][y - 1] = true;
            cpuHitList[x + 1][y] = true;
            if (y + 1 < 10) cpuHitList[x + 1][y + 1] = true;
        }
    }
}

function bestMove() {
    if (previousHit) {
        currentShipHitCounter++;
        currentShipHitList.push(previousMoves);
    } else if (currentShipHitCounter > 1) { // at least two succesful hits, but then a miss
        direction = 0; // means that the direction needs to be changed, i.e., direction will be set to -1
    }

    if (previousSink) {
        blockCells(currentShipHitList);
        
        currentShipHitCounter = 0;
        currentShipHitList = [];

        previousHit = false;
        previousSink = false;
        direction = 1;
    }

    if (currentShipHitCounter === 1) {
        let [lastX, lastY] = currentShipHitList[0];

        const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

        for (let [dx, dy] of directions) {
            let x = lastX + dx, y = lastY + dy;

            if ((x >= 0 && x < 10) && (y >= 0 && y < 10) && (!cpuHitList[x][y])) {
                cpuHitList[x][y] = true;
                previousMoves = [x, y];
                return previousMoves;
            }
        }
    } else if (currentShipHitCounter > 1) {
        let [firstX, firstY] = currentShipHitList[0];
        let [secondX, secondY] = currentShipHitList[1];

        let gradient = [secondX - firstX, secondY - firstY];

        if (direction != 0) {
            let [x, y] = [
                currentShipHitList[currentShipHitList.length - 1][0] + direction * gradient[0],
                currentShipHitList[currentShipHitList.length - 1][1] + direction * gradient[1]
            ];
            if ((x >= 0 && x < 10) && (y >= 0 && y < 10) && !cpuHitList[x][y]) {
                cpuHitList[x][y] = true;
                previousMoves = [x, y];
                return [x, y];
            }
        }
        
        direction = -1;
        let [x, y] = [
            currentShipHitList[0][0] + direction * gradient[0],
            currentShipHitList[0][1] + direction * gradient[1]
        ];
        if ((x >= 0 && x < 10) && (y >= 0 && y < 10) && !cpuHitList[x][y]) {
            cpuHitList[x][y] = true;
            previousMoves = [x, y];
            return [x, y];
        }
    }

    let [x, y] = getRandomCell();
    previousMoves = [x, y];
    cpuHitList[x][y] = true;
    return [x, y];
}

export { setPreviousHit, setPreviousSink, bestMove };