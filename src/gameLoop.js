const body = document.querySelector('body');

import hit from './hit.png'
import cross from './cross.svg'
import crosshair from './crosshair.svg'
import { ShipsTemplate, isValid } from './shipPlacement'
import hitTargetSound from './gunshot.mp3';
import missTargetSound from './miss.mp3';

import initialiseMap from '.';
import { setPreviousHit, setPreviousSink, bestMove } from './CPUAI';

const hitTarget = new Audio(hitTargetSound);
const missTarget = new Audio(missTargetSound);

function getRandomInt(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

async function generateCPUMap() {
    // let Ships = ShipsTemplate;
    let Ships = JSON.parse(JSON.stringify(ShipsTemplate));

    let CPUGameBoard = Array.from({ length: 10 }, () => Array(10).fill(-1));
    let CPUShipsPlaced = [];
    let idx = 1;

    for (let ship in Ships) {
        const alignment = getRandomInt(0, 1);
        const upperLimit = 9 - Ships[ship].length + 1;
        let cell = [-1, -1];

        let randomChecks = 0;
        let iterativeX = 0;
        let iterativeY = 0;
        while (true) {
            let tempCell = [-1, -1];
            if (randomChecks < 25) {
                if (alignment == 0) {
                    tempCell = [getRandomInt(0, 9), getRandomInt(0, upperLimit)];
                } else {
                    tempCell = [getRandomInt(0, upperLimit), getRandomInt(0, 9)];
                }
                randomChecks++;
            } else {
                if (alignment == 0) {
                    iterativeY++;
                    if (iterativeY > 9 - Ships[ship].length + 1) {
                        iterativeX++;
                        iterativeY = 0;
                    }
                } else {
                    iterativeX++;
                    if (iterativeX > 9 - Ships[ship].length + 1) {
                        iterativeY++;
                        iterativeX = 0;
                    }
                }
                tempCell = [iterativeX, iterativeY];
            }
            if (isValid(ship, tempCell, alignment, CPUGameBoard)) {
                // fill up CPUGameBoard
                if (alignment == 0) {
                    for (let i = 0; i < Ships[ship].length; i++) {
                        CPUGameBoard[tempCell[0]][tempCell[1] + i] = idx;
                    }
                } else {
                    for (let i = 0; i < Ships[ship].length; i++) {
                        CPUGameBoard[tempCell[0] + i][tempCell[1]] = idx;
                    }
                }
                // add to CPUShipsPlaced
                Ships[ship].alignment = alignment;
                Ships[ship].cell = tempCell;
                CPUShipsPlaced.push(Ships[ship]);

                idx++;
                break;
            }
        }
    }
    return { CPUShipsPlaced, CPUGameBoard };
}

function updateShipsRemaining(isPlayer, shipsRemaining) {
    const newVal = document.createElement('h5');
    let elementToUpdate;
    if (isPlayer) {
        elementToUpdate = document.querySelector('#playerShipsRemaining');
        newVal.innerHTML = `Player Ships <br> Remaining: ${shipsRemaining}`;
    } else {
        elementToUpdate = document.querySelector('#CPUShipsRemaining');
        newVal.innerHTML = `CPU Ships <br> Remaining: ${shipsRemaining}`;
    }
    elementToUpdate.innerHTML = '';
    elementToUpdate.appendChild(newVal);
}

async function startGame(shipsPlaced, initialisationHTML) {
    body.innerHTML = `
    <div class="loadingScreen easeIn">
        <div>
            <h1>Loading...</h1>
            <div class="lds-dual-ring"></div>
        </div>
    </div>
    <div id="alert" style="display: none;"></div>
    <h2 id="gameTitle">-BATTLESHIP!-</h2>
    <div id="versusArea">
        <div class="mapArea" id="playerBattleGround">
            <div class="playerCell" id="p0"></div>
            <div class="playerCell" id="p1"></div>
            <div class="playerCell" id="p2"></div>
            <div class="playerCell" id="p3"></div>
            <div class="playerCell" id="p4"></div>
            <div class="playerCell" id="p5"></div>
            <div class="playerCell" id="p6"></div>
            <div class="playerCell" id="p7"></div>
            <div class="playerCell" id="p8"></div>
            <div class="playerCell" id="p9"></div>
            <div class="playerCell" id="p10"></div>
            <div class="playerCell" id="p11"></div>
            <div class="playerCell" id="p12"></div>
            <div class="playerCell" id="p13"></div>
            <div class="playerCell" id="p14"></div>
            <div class="playerCell" id="p15"></div>
            <div class="playerCell" id="p16"></div>
            <div class="playerCell" id="p17"></div>
            <div class="playerCell" id="p18"></div>
            <div class="playerCell" id="p19"></div>
            <div class="playerCell" id="p20"></div>
            <div class="playerCell" id="p21"></div>
            <div class="playerCell" id="p22"></div>
            <div class="playerCell" id="p23"></div>
            <div class="playerCell" id="p24"></div>
            <div class="playerCell" id="p25"></div>
            <div class="playerCell" id="p26"></div>
            <div class="playerCell" id="p27"></div>
            <div class="playerCell" id="p28"></div>
            <div class="playerCell" id="p29"></div>
            <div class="playerCell" id="p30"></div>
            <div class="playerCell" id="p31"></div>
            <div class="playerCell" id="p32"></div>
            <div class="playerCell" id="p33"></div>
            <div class="playerCell" id="p34"></div>
            <div class="playerCell" id="p35"></div>
            <div class="playerCell" id="p36"></div>
            <div class="playerCell" id="p37"></div>
            <div class="playerCell" id="p38"></div>
            <div class="playerCell" id="p39"></div>
            <div class="playerCell" id="p40"></div>
            <div class="playerCell" id="p41"></div>
            <div class="playerCell" id="p42"></div>
            <div class="playerCell" id="p43"></div>
            <div class="playerCell" id="p44"></div>
            <div class="playerCell" id="p45"></div>
            <div class="playerCell" id="p46"></div>
            <div class="playerCell" id="p47"></div>
            <div class="playerCell" id="p48"></div>
            <div class="playerCell" id="p49"></div>
            <div class="playerCell" id="p50"></div>
            <div class="playerCell" id="p51"></div>
            <div class="playerCell" id="p52"></div>
            <div class="playerCell" id="p53"></div>
            <div class="playerCell" id="p54"></div>
            <div class="playerCell" id="p55"></div>
            <div class="playerCell" id="p56"></div>
            <div class="playerCell" id="p57"></div>
            <div class="playerCell" id="p58"></div>
            <div class="playerCell" id="p59"></div>
            <div class="playerCell" id="p60"></div>
            <div class="playerCell" id="p61"></div>
            <div class="playerCell" id="p62"></div>
            <div class="playerCell" id="p63"></div>
            <div class="playerCell" id="p64"></div>
            <div class="playerCell" id="p65"></div>
            <div class="playerCell" id="p66"></div>
            <div class="playerCell" id="p67"></div>
            <div class="playerCell" id="p68"></div>
            <div class="playerCell" id="p69"></div>
            <div class="playerCell" id="p70"></div>
            <div class="playerCell" id="p71"></div>
            <div class="playerCell" id="p72"></div>
            <div class="playerCell" id="p73"></div>
            <div class="playerCell" id="p74"></div>
            <div class="playerCell" id="p75"></div>
            <div class="playerCell" id="p76"></div>
            <div class="playerCell" id="p77"></div>
            <div class="playerCell" id="p78"></div>
            <div class="playerCell" id="p79"></div>
            <div class="playerCell" id="p80"></div>
            <div class="playerCell" id="p81"></div>
            <div class="playerCell" id="p82"></div>
            <div class="playerCell" id="p83"></div>
            <div class="playerCell" id="p84"></div>
            <div class="playerCell" id="p85"></div>
            <div class="playerCell" id="p86"></div>
            <div class="playerCell" id="p87"></div>
            <div class="playerCell" id="p88"></div>
            <div class="playerCell" id="p89"></div>
            <div class="playerCell" id="p90"></div>
            <div class="playerCell" id="p91"></div>
            <div class="playerCell" id="p92"></div>
            <div class="playerCell" id="p93"></div>
            <div class="playerCell" id="p94"></div>
            <div class="playerCell" id="p95"></div>
            <div class="playerCell" id="p96"></div>
            <div class="playerCell" id="p97"></div>
            <div class="playerCell" id="p98"></div>
            <div class="playerCell" id="p99"></div>
        </div>
        <div class="mapArea" id="CPUBattleGround">
            <div class="CPUCell" id="0"></div>
            <div class="CPUCell" id="1"></div>
            <div class="CPUCell" id="2"></div>
            <div class="CPUCell" id="3"></div>
            <div class="CPUCell" id="4"></div>
            <div class="CPUCell" id="5"></div>
            <div class="CPUCell" id="6"></div>
            <div class="CPUCell" id="7"></div>
            <div class="CPUCell" id="8"></div>
            <div class="CPUCell" id="9"></div>
            <div class="CPUCell" id="10"></div>
            <div class="CPUCell" id="11"></div>
            <div class="CPUCell" id="12"></div>
            <div class="CPUCell" id="13"></div>
            <div class="CPUCell" id="14"></div>
            <div class="CPUCell" id="15"></div>
            <div class="CPUCell" id="16"></div>
            <div class="CPUCell" id="17"></div>
            <div class="CPUCell" id="18"></div>
            <div class="CPUCell" id="19"></div>
            <div class="CPUCell" id="20"></div>
            <div class="CPUCell" id="21"></div>
            <div class="CPUCell" id="22"></div>
            <div class="CPUCell" id="23"></div>
            <div class="CPUCell" id="24"></div>
            <div class="CPUCell" id="25"></div>
            <div class="CPUCell" id="26"></div>
            <div class="CPUCell" id="27"></div>
            <div class="CPUCell" id="28"></div>
            <div class="CPUCell" id="29"></div>
            <div class="CPUCell" id="30"></div>
            <div class="CPUCell" id="31"></div>
            <div class="CPUCell" id="32"></div>
            <div class="CPUCell" id="33"></div>
            <div class="CPUCell" id="34"></div>
            <div class="CPUCell" id="35"></div>
            <div class="CPUCell" id="36"></div>
            <div class="CPUCell" id="37"></div>
            <div class="CPUCell" id="38"></div>
            <div class="CPUCell" id="39"></div>
            <div class="CPUCell" id="40"></div>
            <div class="CPUCell" id="41"></div>
            <div class="CPUCell" id="42"></div>
            <div class="CPUCell" id="43"></div>
            <div class="CPUCell" id="44"></div>
            <div class="CPUCell" id="45"></div>
            <div class="CPUCell" id="46"></div>
            <div class="CPUCell" id="47"></div>
            <div class="CPUCell" id="48"></div>
            <div class="CPUCell" id="49"></div>
            <div class="CPUCell" id="50"></div>
            <div class="CPUCell" id="51"></div>
            <div class="CPUCell" id="52"></div>
            <div class="CPUCell" id="53"></div>
            <div class="CPUCell" id="54"></div>
            <div class="CPUCell" id="55"></div>
            <div class="CPUCell" id="56"></div>
            <div class="CPUCell" id="57"></div>
            <div class="CPUCell" id="58"></div>
            <div class="CPUCell" id="59"></div>
            <div class="CPUCell" id="60"></div>
            <div class="CPUCell" id="61"></div>
            <div class="CPUCell" id="62"></div>
            <div class="CPUCell" id="63"></div>
            <div class="CPUCell" id="64"></div>
            <div class="CPUCell" id="65"></div>
            <div class="CPUCell" id="66"></div>
            <div class="CPUCell" id="67"></div>
            <div class="CPUCell" id="68"></div>
            <div class="CPUCell" id="69"></div>
            <div class="CPUCell" id="70"></div>
            <div class="CPUCell" id="71"></div>
            <div class="CPUCell" id="72"></div>
            <div class="CPUCell" id="73"></div>
            <div class="CPUCell" id="74"></div>
            <div class="CPUCell" id="75"></div>
            <div class="CPUCell" id="76"></div>
            <div class="CPUCell" id="77"></div>
            <div class="CPUCell" id="78"></div>
            <div class="CPUCell" id="79"></div>
            <div class="CPUCell" id="80"></div>
            <div class="CPUCell" id="81"></div>
            <div class="CPUCell" id="82"></div>
            <div class="CPUCell" id="83"></div>
            <div class="CPUCell" id="84"></div>
            <div class="CPUCell" id="85"></div>
            <div class="CPUCell" id="86"></div>
            <div class="CPUCell" id="87"></div>
            <div class="CPUCell" id="88"></div>
            <div class="CPUCell" id="89"></div>
            <div class="CPUCell" id="90"></div>
            <div class="CPUCell" id="91"></div>
            <div class="CPUCell" id="92"></div>
            <div class="CPUCell" id="93"></div>
            <div class="CPUCell" id="94"></div>
            <div class="CPUCell" id="95"></div>
            <div class="CPUCell" id="96"></div>
            <div class="CPUCell" id="97"></div>
            <div class="CPUCell" id="98"></div>
            <div class="CPUCell" id="99"></div>
        </div>
    </div>
    <div id="scoreCard">
        <div id="playerShipsRemaining"><h5>Player Ships <br> Remaining: 5</h5></div>
        <div id="CPUShipsRemaining"><h5>CPU Ships <br> Remaining: 5</h5></div>
    </div>
    `;
    const playerMap = document.querySelectorAll('.playerCell');
    let playerGameBoard = Array.from({ length: 10 }, () => Array(10).fill(-1));

    const versusArea = document.querySelector('#versusArea');

    const invisibleElement = [
        document.querySelector('#gameTitle'),
        document.querySelector('#versusArea'),
        document.querySelector('#scoreCard')
    ];

    for (let i = 0; i < 3; i++) invisibleElement[i].style.display = 'none';

    const alert = document.querySelector('#alert');

    function giveAlert(message) {
        alert.classList.add('easeIn');
        alert.style = '';

        const alertMessage = document.createElement('h1')
        alertMessage.textContent = message;
        alert.innerHTML = '';
        alert.appendChild(alertMessage);

        setTimeout(() => {
            alert.classList.remove('easeIn');
            alert.classList.add('easeOut');
            setTimeout(() => { alert.style.display = 'none'; alert.classList.remove('easeOut') }, 1000);

        }, 2000);
    }

    function endGame(message) {
        const alertMessage = document.createElement('h1');
        alertMessage.textContent = message;
        alert.innerHTML = '';
        alert.appendChild(alertMessage);
        
        const newGame = document.createElement('button');
        newGame.classList.add('newGame');
        newGame.textContent = 'New Game';
        newGame.addEventListener('click', () => {
            body.innerHTML = initialisationHTML;
            initialiseMap();
        });
        alert.appendChild(newGame);

        alert.classList.add('easeIn');
        alert.style = '';

        setTimeout(alert.classList.remove('easeIn'), 1000);
    }

    let CPUShipsRemaining = 5;
    let playerShipsRemaining = 5;

    // place ships from previous step
    for (let i = 0; i < shipsPlaced.length; i++) {
        let currentShip = shipsPlaced[i];
        if (currentShip.alignment == 0) {
            for (let j = 0; j < currentShip.length; j++) {
                playerMap[currentShip.cell[0] * 10 + currentShip.cell[1] + j].classList.add('blocked');
                playerGameBoard[currentShip.cell[0]][currentShip.cell[1] + j] = i + 1;
            }
        } else {
            for (let j = 0; j < currentShip.length; j++) {
                playerMap[(currentShip.cell[0] + j) * 10 + currentShip.cell[1]].classList.add('blocked');
                playerGameBoard[currentShip.cell[0] + j][currentShip.cell[1]] = i + 1;
            }
        }
    }

    const CPUMap = document.querySelectorAll('.CPUCell');

    function sinkShip(currentShip, entityMap) {
        const length = ShipsTemplate[currentShip.name].length;
        const x = currentShip.cell[0];
        const y = currentShip.cell[1];
        if (currentShip.alignment == 0) {
            for (let j = 0; j < length; j++)
                entityMap[(x * 10) + y + j].classList.add('sunk');
        } else {
            for (let j = 0; j < length; j++)
                entityMap[((x + j) * 10) + y].classList.add('sunk');
        }
    }

    function playCPU() {
        if (playerShipsRemaining == 0) return;
        const img = document.createElement('img');
        let [x, y] = bestMove();
        if (playerGameBoard[x][y] >= 1) {
            setPreviousHit(true);
            img.src = hit;
            hitTarget.currentTime = 0;
            hitTarget.play();

            shipsPlaced[playerGameBoard[x][y] - 1].length--;

            if (shipsPlaced[playerGameBoard[x][y] - 1].length == 0) {
                playerShipsRemaining--;
                setPreviousSink(true);
                updateShipsRemaining(true, playerShipsRemaining);
                sinkShip(shipsPlaced[playerGameBoard[x][y] - 1], playerMap);

                if (playerShipsRemaining == 0) {
                    endGame(`You Lose...`);
                } else {
                    giveAlert(`You lost the ${shipsPlaced[playerGameBoard[x][y] - 1].name}!`);
                }
            }
            playerGameBoard[x][y] = -1;
            setTimeout(() => {
                playCPU()
            }, 1000);
        } else {
            setPreviousHit(false);
            img.src = cross;
            missTarget.currentTime = 0;
            missTarget.play();
            versusArea.style = '';
        }

        const thisCell = playerMap[x * 10 + y];
        thisCell.appendChild(img);
    }

    for (let i = 0; i < CPUMap.length; i++) {
        const cell = CPUMap[i];
        const crosshairImage = document.createElement('img');
        crosshairImage.src = crosshair;
        let x = Math.floor(Number(cell.id) / 10);
        let y = Number(cell.id)%10;

        cell.addEventListener('mouseenter', () => {
            cell.appendChild(crosshairImage);
        })
        cell.addEventListener('mouseleave', () => {
            cell.removeChild(crosshairImage);
        })
        cell.addEventListener('click', () => {
            const img = document.createElement('img')
            if (CPUGameBoard[x][y] >= 1) {
                img.src = hit;
                hitTarget.currentTime = 0;
                hitTarget.play();

                // update gameBoard and change the value of "length" in the CPUShipsPlaced object
                // console.log(CPUShipsPlaced[CPUGameBoard[x][y] - 1].name);
                CPUShipsPlaced[CPUGameBoard[x][y] - 1].length--;

                // ship sinks
                if (CPUShipsPlaced[CPUGameBoard[x][y] - 1].length == 0) {
                    CPUShipsRemaining--;
                    updateShipsRemaining(false, CPUShipsRemaining);
                    sinkShip(CPUShipsPlaced[CPUGameBoard[x][y] - 1], CPUMap);
                    
                    if (CPUShipsRemaining == 0) {
                        endGame(`You win!`);
                    } else {
                        giveAlert(`You sank the ${CPUShipsPlaced[CPUGameBoard[x][y] - 1].name}!`);
                    }
                }

                CPUGameBoard[x][y] = -1;

            } else {
                img.src = cross;
                versusArea.style.pointerEvents = 'none';                
                missTarget.currentTime = 0;
                missTarget.play();
                setTimeout(() =>  {
                    playCPU();
                }, 1000);
            }
            cell.appendChild(img);
            cell.classList.add('unclickable');
        })
    }

    // randomly generate state for CPU
    const { CPUShipsPlaced, CPUGameBoard } = await generateCPUMap();
    setTimeout(() => {
        for (let i = 0; i < 3; i++) invisibleElement[i].style = '';
        const loadingScreen = document.querySelector('.loadingScreen');
        loadingScreen.classList.add('easeOut');
        setTimeout(() => {
            body.removeChild(loadingScreen)
        }, 1010);
    }, 1500);
}

export { startGame as gameloop};