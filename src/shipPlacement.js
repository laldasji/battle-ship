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

function isValid(currentShipDetails, currentCell, alignment, board) {
    if (currentCell[0] == -1) return false;

    let x = currentCell[0], y = currentCell[1];
    let length = currentShipDetails.length;

    if (alignment == 0) {
        if ((x - 1 >= 0 && y - 1 >= 0) && board[x - 1][y - 1] >= 1)
            return false;
        if ((x + 1 <= 9 && y - 1 >= 0) && board[x + 1][y - 1] >= 1)
            return false;
        if ((x - 1 >= 0 && y + length <= 9) && board[x - 1][y + length] >= 1)
            return false;
        if ((x + 1 <= 9 && y + length <= 9) && board[x + 1][y + length] >= 1)
            return false;
        if ((y - 1 >= 0 && board[x][y - 1] >= 1) || (y + length <= 9 && board[x][y + length] >= 1))
            return false;
        for (let i = 0; i < length; i++) {
            if (y + i > 9 || board[x][y + i] >= 1) return false;
            if ((x - 1 >= 0 && board[x - 1][y + i] >= 1) || (x + 1 <= 9 && board[x + 1][y + i] >= 1))
                return false;
        }
    } else {
        if ((x - 1 >= 0 && y - 1 >= 0) && board[x - 1][y - 1] >= 1)
            return false;
        if ((x - 1 >= 0 && y + 1 <= 9) && board[x - 1][y + 1] >= 1)
            return false;
        if ((x + length <= 9 && y - 1 >= 0) && board[x + length][y - 1] >= 1)
            return false;
        if ((x + length <= 9 && y + 1 <= 9) && board[x + length][y + 1] >= 1)
            return false;
        if ((x - 1 >= 0 && board[x - 1][y] >= 1) || (x + length <= 9 && board[x + length][y] >= 1))
            return false;
        for (let i = 0; i < length; i++) {
            if (x + i > 9 || board[x + i][y] >= 1) return false;
            if ((y - 1 >= 0 && board[x + i][y - 1] >= 1) || (y + 1 <= 9 && board[x + i][y + 1] >= 1))
                return false;
        }
    }
    return true;
}

export { ShipsTemplate, isValid };