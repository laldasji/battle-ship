import './normalise.css';
import './typography.css'
import './style.css';
import { gameloop } from './gameLoop';

const dockyard = document.querySelector('#dockyard');
const shipList = document.querySelectorAll('div[draggable="true"]');
const cells = document.querySelectorAll('.cell');
const battleGround = document.querySelector('#battleGround');
const undoLastPlacement = document.querySelector('#undoLastPlacement');
const startGame = document.querySelector('#startGame');

let currentCell = [-1, -1];
let gameBoard = Array.from({ length: 10 }, () => Array(10).fill(0));

let isInsideMap = false;
let shipsPlaced = [];

let isDragging = false;
let currentShipDetails = {};
let alignment = 0;

battleGround.addEventListener("dragover", (event) => {
    event.preventDefault();
    isInsideMap = true;
});


battleGround.addEventListener("dragleave", () => {
    isInsideMap = false;
});



class Ship {
    constructor(length, name) {
        this.name = name;
        this.length = length;
        this.placed = false;
        this.cell = [-1, -1];
        this.alignment = -1;
    }
}

const Ships = {
    Destroyer: new Ship(2, 'Destroyer'),
    Submarine: new Ship(3, 'Submarine'),
    Cruiser: new Ship(3, 'Cruiser'),
    Battleship: new Ship(4, 'Battleship'),
    Carrier: new Ship(5, 'Carrier')
}

function isValid(currentShipDetails, currentCell, alignment) {
    if (currentCell[0] == -1) return false;

    if (alignment == 0) {
        if ((currentCell[0] - 1 >= 0 && currentCell[1] - 1 >= 0) && gameBoard[currentCell[0] - 1][currentCell[1] - 1] == 1)
            return false;
        if ((currentCell[0] + 1 <= 9 && currentCell[1] - 1 >= 0) && gameBoard[currentCell[0] + 1][currentCell[1] - 1] == 1)
            return false;
        if ((currentCell[0] - 1 >= 0 && currentCell[1] + currentShipDetails.length <= 9) && gameBoard[currentCell[0] - 1][currentCell[1] + currentShipDetails.length] == 1)
            return false;
        if ((currentCell[0] + 1 <= 9 && currentCell[1] + currentShipDetails.length <= 9) && gameBoard[currentCell[0] + 1][currentCell[1] + currentShipDetails.length] == 1)
            return false;
        if ((currentCell[1] - 1 >= 0 && gameBoard[currentCell[0]][currentCell[1] - 1] == 1)
            || (currentCell[1] + currentShipDetails.length <= 9 && gameBoard[currentCell[0]][currentCell[1] + currentShipDetails.length] == 1))
                return false;
        for (let i = 0; i < currentShipDetails.length; i++) {
            if (currentCell[1] + i > 9 || gameBoard[currentCell[0]][currentCell[1] + i] == 1) return false;
            if ((currentCell[0] - 1 >= 0 && gameBoard[currentCell[0] - 1][currentCell[1] + i] == 1)
                || (currentCell[0] + 1 <= 9 && gameBoard[currentCell[0] + 1][currentCell[1] + i] == 1))
                    return false;
        }
    } else {
        if ((currentCell[0] - 1 >= 0 && currentCell[1] - 1 >= 0) && gameBoard[currentCell[0] - 1][currentCell[1] - 1] == 1)
            return false;
        if ((currentCell[0] - 1 >= 0 && currentCell[1] + 1 <= 9) && gameBoard[currentCell[0] - 1][currentCell[1] + 1] == 1)
            return false;
        if ((currentCell[0] + currentShipDetails.length <= 9 && currentCell[1] - 1 >= 0) && gameBoard[currentCell[0] + currentShipDetails.length][currentCell[1] - 1] == 1)
            return false;
        if ((currentCell[0] + currentShipDetails.length <= 9 && currentCell[1] + 1 <= 9) && gameBoard[currentCell[0] + currentShipDetails.length][currentCell[1] + 1] == 1)
            return false;
        if ((currentCell[0] - 1 >= 0 && gameBoard[currentCell[0] - 1][currentCell[1]] == 1)
            || (currentCell[0] + currentShipDetails.length <= 9 && gameBoard[currentCell[0] + currentShipDetails.length][currentCell[1]] == 1))
                return false;
        for (let i = 0; i < currentShipDetails.length; i++) {
            if (currentCell[0] + i > 9 || gameBoard[currentCell[0] + i][currentCell[1]] == 1) return false;
            if ((currentCell[1] - 1 >= 0 && gameBoard[currentCell[0] + i][currentCell[1] - 1] == 1)
                || (currentCell[1] + 1 <= 9 && gameBoard[currentCell[0] + i][currentCell[1] + 1] == 1))
                    return false;
        }
    }
    return true;
}

function blockCells(toBlock) {
    for (let i = 0; i < toBlock.length; i++) {
        cells[toBlock[i][0] * 10 + toBlock[i][1]].classList.toggle('blocked');
    }
}

function placeShip(currentShipDetails, currentCell, alignment) {
    if (currentCell[0] == -1) return;
    let toBlock = [];

    // update object status in Ships object
    Ships[currentShipDetails.id].cell = currentCell;
    Ships[currentShipDetails.id].placed = true;
    Ships[currentShipDetails.id].alignment = alignment;
    shipsPlaced.push(Ships[currentShipDetails.id]);
    if (shipsPlaced.length == 5) {
        startGame.classList.toggle('unclickable');
    }

    // block ship in dockyard
    const toCover = Array.from(shipList).find(ship => ship.id == currentShipDetails.id);
    toCover.classList.toggle('placed');
    toCover.draggable = false;

    // block ship from placement in gameboard
    if (alignment == 0) {
        for (let i = 0; i < currentShipDetails.length; i++) {
            gameBoard[currentCell[0]][currentCell[1] + i] = 1;
            cells[currentCell[0] * 10 + currentCell[1] + i].classList.remove('highlight');
            toBlock.push([currentCell[0], currentCell[1] + i]);
        }
    } else {
        for (let i = 0; i < currentShipDetails.length; i++) {
            gameBoard[currentCell[0] + i][currentCell[1]] = 1;
            cells[(currentCell[0] + i) * 10 + currentCell[1]].classList.remove('highlight');
            toBlock.push([currentCell[0] + i, currentCell[1]]);
        }
    }

    // remove highlight from map
    blockCells(toBlock);
}

for (let i = 0; i < shipList.length; i++) {
    const ship = shipList[i];
    ship.addEventListener("dragstart", () => {
        console.log(ship.id);
        isDragging = true;
        currentShipDetails = {
            id: ship.id,
            length: Ships[ship.id].length
        };
    });
    ship.addEventListener("dragend", () => {
        if (isInsideMap && isValid(currentShipDetails, currentCell, alignment) && !Ships[currentShipDetails.id].placed) {
            placeShip(currentShipDetails, currentCell, alignment);
        }
        isDragging = false;
        currentShipDetails = {};
        currentCell = [-1, -1];
    })
}

function highlightCells(currentShipDetails, cellId) {
    if (alignment == 0) {
        if (Math.floor((cellId + (currentShipDetails.length) - 1) / 10) != Math.floor(cellId / 10)) {
            currentCell = [-1, -1];
            return;
        }
        currentCell = [Math.floor(cellId / 10), cellId % 10];
        for (let i = 0; i < currentShipDetails.length; i++) {
            cells[i + cellId].classList.add('highlight');
        }
    } else {
        if (Math.floor(cellId / 10) + currentShipDetails.length > 10) {
            currentCell = [-1, -1];
            return;
        }
        currentCell = [Math.floor(cellId / 10), cellId % 10];
        for (let i = 0; i < currentShipDetails.length; i++) {
            cells[i*10 + cellId].classList.add('highlight');
        }
    }
}

function removeHighlight(currentShipDetails, cellId) {
    if (alignment == 0) {
        if (Math.floor((cellId + (currentShipDetails.length) - 1) / 10) != Math.floor(cellId / 10)) {
            return;
        }
        for (let i = 0; i < currentShipDetails.length; i++) {
            cells[i + cellId].classList.remove('highlight');   
        }
    } else {
        if (Math.floor(cellId / 10) + currentShipDetails.length > 10)
            return;
        for (let i = 0; i < currentShipDetails.length; i++) {
            cells[i*10 + cellId].classList.remove('highlight');   
        }
    }
}

for (let i = 0; i < cells.length; i++) {
    const cell = cells[i];
    cell.addEventListener('dragover', () => { if (isDragging) highlightCells(currentShipDetails, Number(cell.id)) });
    cell.addEventListener('dragleave', () => { if (isDragging) removeHighlight(currentShipDetails, Number(cell.id)) });
}

document.addEventListener('keydown', (event) => {
    if (event.key == 'r' || event.key == 'R') {
        dockyard.classList.toggle('horizontal');
        dockyard.classList.toggle('vertical');
        for (let i = 0; i < shipList.length; i++) {
            let ship = shipList[i];
            ship.classList.toggle('ship');
            ship.classList.toggle('shipVertical');
        }
        alignment = alignment == 0 ? 1 : 0;
    }
})

undoLastPlacement.addEventListener('click', () => {
    if (shipsPlaced.length == 0) return;
    if (shipsPlaced.length == 5) {
        startGame.classList.toggle('unclickable');
    }
    let toBlock = [];
    // remove from the shipsPlaced array
    const shipToRemove = shipsPlaced.pop();

    const cellToRemove = shipToRemove.cell;
    
    // remove blocking from gameBoard array
    if (shipToRemove.alignment == 0) {
        for (let i = 0; i < shipToRemove.length; i++) {
            gameBoard[cellToRemove[0]][cellToRemove[1] + i] = 0;
            toBlock.push([cellToRemove[0], cellToRemove[1] + i]);
        }
    } else {
        for (let i = 0; i < shipToRemove.length; i++) {
            gameBoard[cellToRemove[0] + i][cellToRemove[1]] = 0;
            toBlock.push([cellToRemove[0] + i, cellToRemove[1]]);
        }
    }
    // remove highlight from the map
    blockCells(toBlock);
    
    // re-activate the ship from dockyard
    const toCover = Array.from(shipList).find(ship => ship.id == shipToRemove.name);
    toCover.classList.toggle('placed');
    toCover.draggable = true;
    
    // update object status in Ships object
    Ships[shipToRemove.name].cell = [-1, -1];
    Ships[shipToRemove.name].placed = false;
    Ships[shipToRemove.name].alignment = -1;
})

startGame.addEventListener('click', () => {
    if (shipsPlaced.length == 5) {
        gameloop();
    }
})