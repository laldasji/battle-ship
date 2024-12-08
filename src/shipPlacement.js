class Ship {
    constructor(length, name) {
        this.name = name;
        this.length = length;
        this.placed = false;
        this.cell = [-1, -1];
        this.alignment = -1;
    }
}

const ShipsTemplate = {
    Destroyer: new Ship(2, 'Destroyer'),
    Submarine: new Ship(3, 'Submarine'),
    Cruiser: new Ship(3, 'Cruiser'),
    Battleship: new Ship(4, 'Battleship'),
    Carrier: new Ship(5, 'Carrier')
}

function isValid(currentShipDetails, currentCell, alignment, gameBoard) {
    if (currentCell[0] == -1) return false;

    if (alignment == 0) {
        if ((currentCell[0] - 1 >= 0 && currentCell[1] - 1 >= 0) && gameBoard[currentCell[0] - 1][currentCell[1] - 1] >= 1)
            return false;
        if ((currentCell[0] + 1 <= 9 && currentCell[1] - 1 >= 0) && gameBoard[currentCell[0] + 1][currentCell[1] - 1] >= 1)
            return false;
        if ((currentCell[0] - 1 >= 0 && currentCell[1] + currentShipDetails.length <= 9) && gameBoard[currentCell[0] - 1][currentCell[1] + currentShipDetails.length] >= 1)
            return false;
        if ((currentCell[0] + 1 <= 9 && currentCell[1] + currentShipDetails.length <= 9) && gameBoard[currentCell[0] + 1][currentCell[1] + currentShipDetails.length] >= 1)
            return false;
        if ((currentCell[1] - 1 >= 0 && gameBoard[currentCell[0]][currentCell[1] - 1] >= 1)
            || (currentCell[1] + currentShipDetails.length <= 9 && gameBoard[currentCell[0]][currentCell[1] + currentShipDetails.length] >= 1))
                return false;
        for (let i = 0; i < currentShipDetails.length; i++) {
            if (currentCell[1] + i > 9 || gameBoard[currentCell[0]][currentCell[1] + i] >= 1) return false;
            if ((currentCell[0] - 1 >= 0 && gameBoard[currentCell[0] - 1][currentCell[1] + i] >= 1)
                || (currentCell[0] + 1 <= 9 && gameBoard[currentCell[0] + 1][currentCell[1] + i] >= 1))
                    return false;
        }
    } else {
        if ((currentCell[0] - 1 >= 0 && currentCell[1] - 1 >= 0) && gameBoard[currentCell[0] - 1][currentCell[1] - 1] >= 1)
            return false;
        if ((currentCell[0] - 1 >= 0 && currentCell[1] + 1 <= 9) && gameBoard[currentCell[0] - 1][currentCell[1] + 1] >= 1)
            return false;
        if ((currentCell[0] + currentShipDetails.length <= 9 && currentCell[1] - 1 >= 0) && gameBoard[currentCell[0] + currentShipDetails.length][currentCell[1] - 1] >= 1)
            return false;
        if ((currentCell[0] + currentShipDetails.length <= 9 && currentCell[1] + 1 <= 9) && gameBoard[currentCell[0] + currentShipDetails.length][currentCell[1] + 1] >= 1)
            return false;
        if ((currentCell[0] - 1 >= 0 && gameBoard[currentCell[0] - 1][currentCell[1]] >= 1)
            || (currentCell[0] + currentShipDetails.length <= 9 && gameBoard[currentCell[0] + currentShipDetails.length][currentCell[1]] >= 1))
                return false;
        for (let i = 0; i < currentShipDetails.length; i++) {
            if (currentCell[0] + i > 9 || gameBoard[currentCell[0] + i][currentCell[1]] >= 1) return false;
            if ((currentCell[1] - 1 >= 0 && gameBoard[currentCell[0] + i][currentCell[1] - 1] >= 1)
                || (currentCell[1] + 1 <= 9 && gameBoard[currentCell[0] + i][currentCell[1] + 1] >= 1))
                    return false;
        }
    }
    return true;
}

export { ShipsTemplate, isValid };