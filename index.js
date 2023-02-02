console.log("Welcome to Tic Tac Toe")

let gameoverAudio = new Audio("sounds/gameover.mp3")
let backgroundAudio = new Audio("sounds/music.mp3")
let turnchangeAudio = new Audio("sounds/ting.mp3")
let isGameOver = false;

// Function to change the turn 
let turn = "X"
const changeTurn = ()=>{
    return turn === "X"? "O": "X"
}

// Function to check a win
const checkWin = ()=>{
    let boxText = document.getElementsByClassName("boxText");
    let wins = [
        [0,1,2,0,5,0],
        [3,4,5,0,15,0],
        [6,7,8,0,25.3,0],
        [0,3,6,-10,15,90],
        [1,4,7,0,15,90],
        [2,5,8,10,15,90],
        [0,4,8,0,15,45],
        [6,4,2,0,15,135],
    ];

    wins.forEach( e=>{
        if((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText === boxText[e[1]].innerText) && boxText[e[0]].innerText !== ''){
            document.querySelector(".playerInfo").innerText = boxText[e[0]].innerText + " Won";
            isGameOver = true
            document.querySelector(".gifBox").getElementsByTagName('img')[0].style.width = "12vw";
            document.querySelector("#line").style.width = "24vw"
            document.querySelector("#line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
        }
    })
}


// Game Logic
backgroundAudio.play();

let box = document.getElementsByClassName('box')
Array.from(box).forEach(element =>{
    let boxText = element.querySelector('.boxText');
    element.addEventListener('click', ()=>{
        if(boxText.innerText === ''){
            boxText.innerText = turn;
            turn = changeTurn();
            turnchangeAudio.play();
            checkWin();
            if(!isGameOver){
                document.getElementsByClassName('playerInfo')[0].innerText = 'Turn for ' + turn;            
            }
        }
    })
})

// Adding onclick to reset
let resetButton = document.querySelector("#resetButton")
resetButton.addEventListener('click', ()=>{
    let boxText = document.querySelectorAll('.boxText');
    Array.from(boxText).forEach(element =>{
        element.innerText = ""
    })
    turn = "X"
    isGameOver = false
    document.querySelector("#line").style.width = "0vw"
    document.getElementsByClassName('playerInfo')[0].innerText = 'Turn for ' + turn; 
    document.querySelector(".gifBox").getElementsByTagName('img')[0].style.width = "0";
})