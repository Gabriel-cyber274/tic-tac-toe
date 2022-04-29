let gameB = document.querySelectorAll('.gameB');
let playerS = document.querySelector('.playerS P')
let computerS = document.querySelector('.player2S p')
let pScore = 0;
let cScore = 0;
let doc1;
let doc2;
let doc3;
let doc4;
let doc5;
let doc6;
let doc7;
let doc8;
let doc9;
let clicks = 0;
let docP = [];


gameB.forEach((game) => {
    game.addEventListener('click', playerChoice)

});

function playerChoice (e){
        clicks ++;
        if(e.target.id === "1" && clicks === 1) {
            gameB[0].innerHTML = 'X';
            gameB[0].disabled = true
        }
        if(e.target.id === "2" && clicks === 1) {
            gameB[1].innerHTML = 'X';
            gameB[1].disabled = true
        }
        if(e.target.id === "3" && clicks === 1) {
            gameB[2].innerHTML = 'X';
            gameB[2].disabled = true
        }
        if(e.target.id === "4" && clicks === 1) {
            gameB[3].innerHTML = 'X';
            gameB[3].disabled = true
        }
        if(e.target.id === "5" && clicks === 1) {
            gameB[4].innerHTML = 'X';
            gameB[4].disabled = true
        }   
        if(e.target.id === "6" && clicks === 1) {
            gameB[5].innerHTML = 'X';
            gameB[5].disabled = true
        }
        if(e.target.id === "7" && clicks === 1) {
            gameB[6].innerHTML = 'X';
            gameB[6].disabled = true
        }
        if(e.target.id === "8" && clicks === 1) {
            gameB[7].innerHTML = 'X';
            gameB[7].disabled = true
        }
        if(e.target.id === "9" && clicks === 1) {
            gameB[8].innerHTML = 'X';
            gameB[8].disabled = true
        } 

        /*two clicks */
        
        if(e.target.id === "1" && clicks === 2) {
            gameB[0].innerHTML = 'O';
            gameB[0].disabled = true
        }
        if(e.target.id === "2" && clicks === 2) {
            gameB[1].innerHTML = 'O';
            gameB[1].disabled = true
        }
        if(e.target.id === "3" && clicks === 2) {
            gameB[2].innerHTML = 'O';
            gameB[2].disabled = true
        }
        if(e.target.id === "4" && clicks === 2) {
            gameB[3].innerHTML = 'O';
            gameB[3].disabled = true
        }
        if(e.target.id === "5" && clicks === 2) {
            gameB[4].innerHTML = 'O';
            gameB[4].disabled = true
        }   
        if(e.target.id === "6" && clicks === 2) {
            gameB[5].innerHTML = 'O';
            gameB[5].disabled = true
        }
        if(e.target.id === "7" && clicks === 2) {
            gameB[6].innerHTML = 'O';
            gameB[6].disabled = true
        }
        if(e.target.id === "8" && clicks === 2) {
            gameB[7].innerHTML = 'O';
            gameB[7].disabled = true
        }
        if(e.target.id === "9" && clicks === 2) {
            gameB[8].innerHTML = 'O';
            gameB[8].disabled = true
        } 

        /*three clicks */
        
        if(e.target.id === "1" && clicks === 3) {
            gameB[0].innerHTML = 'X';
            gameB[0].disabled = true
        }
        if(e.target.id === "2" && clicks === 3) {
            gameB[1].innerHTML = 'X';
            gameB[1].disabled = true
        }
        if(e.target.id === "3" && clicks === 3) {
            gameB[2].innerHTML = 'X';
            gameB[2].disabled = true
        }
        if(e.target.id === "4" && clicks === 3) {
            gameB[3].innerHTML = 'X';
            gameB[3].disabled = true
        }
        if(e.target.id === "5" && clicks === 3) {
            gameB[4].innerHTML = 'X';
            gameB[4].disabled = true
        }   
        if(e.target.id === "6" && clicks === 3) {
            gameB[5].innerHTML = 'X';
            gameB[5].disabled = true
        }
        if(e.target.id === "7" && clicks === 3) {
            gameB[6].innerHTML = 'X';
            gameB[6].disabled = true
        }
        if(e.target.id === "8" && clicks === 3) {
            gameB[7].innerHTML = 'X';
            gameB[7].disabled = true
        }
        if(e.target.id === "9" && clicks === 3) {
            gameB[8].innerHTML = 'X';
            gameB[8].disabled = true
        }

        /*four clicks */
        
        if(e.target.id === "1" && clicks === 4) {
            gameB[0].innerHTML = 'O';
            gameB[0].disabled = true
        }
        if(e.target.id === "2" && clicks === 4) {
            gameB[1].innerHTML = 'O';
            gameB[1].disabled = true
        }
        if(e.target.id === "3" && clicks === 4) {
            gameB[2].innerHTML = 'O';
            gameB[2].disabled = true
        }
        if(e.target.id === "4" && clicks === 4) {
            gameB[3].innerHTML = 'O';
            gameB[3].disabled = true
        }
        if(e.target.id === "5" && clicks === 4) {
            gameB[4].innerHTML = 'O';
            gameB[4].disabled = true
        }   
        if(e.target.id === "6" && clicks === 4) {
            gameB[5].innerHTML = 'O';
            gameB[5].disabled = true
        }
        if(e.target.id === "7" && clicks === 4) {
            gameB[6].innerHTML = 'O';
            gameB[6].disabled = true
        }
        if(e.target.id === "8" && clicks === 4) {
            gameB[7].innerHTML = 'O';
            gameB[7].disabled = true
        }
        if(e.target.id === "9" && clicks === 4) {
            gameB[8].innerHTML = 'O';
            gameB[8].disabled = true
        } 

        /*five clicks */
        
        if(e.target.id === "1" && clicks === 5) {
            gameB[0].innerHTML = 'X';
            gameB[0].disabled = true
        }
        if(e.target.id === "2" && clicks === 5) {
            gameB[1].innerHTML = 'X';
            gameB[1].disabled = true
        }
        if(e.target.id === "3" && clicks === 5) {
            gameB[2].innerHTML = 'X';
            gameB[2].disabled = true
        }
        if(e.target.id === "4" && clicks === 5) {
            gameB[3].innerHTML = 'X';
            gameB[3].disabled = true
        }
        if(e.target.id === "5" && clicks === 5) {
            gameB[4].innerHTML = 'X';
            gameB[4].disabled = true
        }   
        if(e.target.id === "6" && clicks === 5) {
            gameB[5].innerHTML = 'X';
            gameB[5].disabled = true
        }
        if(e.target.id === "7" && clicks === 5) {
            gameB[6].innerHTML = 'X';
            gameB[6].disabled = true
        }
        if(e.target.id === "8" && clicks === 5) {
            gameB[7].innerHTML = 'X';
            gameB[7].disabled = true
        }
        if(e.target.id === "9" && clicks === 5) {
            gameB[8].innerHTML = 'X';
            gameB[8].disabled = true
        }

        /*six clicks */
        
        if(e.target.id === "1" && clicks === 6) {
            gameB[0].innerHTML = 'O';
            gameB[0].disabled = true
        }
        if(e.target.id === "2" && clicks === 6) {
            gameB[1].innerHTML = 'O';
            gameB[1].disabled = true
        }
        if(e.target.id === "3" && clicks === 6) {
            gameB[2].innerHTML = 'O';
            gameB[2].disabled = true
        }
        if(e.target.id === "4" && clicks === 6) {
            gameB[3].innerHTML = 'O';
            gameB[3].disabled = true
        }
        if(e.target.id === "5" && clicks === 6) {
            gameB[4].innerHTML = 'O';
            gameB[4].disabled = true
        }   
        if(e.target.id === "6" && clicks === 6) {
            gameB[5].innerHTML = 'O';
            gameB[5].disabled = true
        }
        if(e.target.id === "7" && clicks === 6) {
            gameB[6].innerHTML = 'O';
            gameB[6].disabled = true
        }
        if(e.target.id === "8" && clicks === 6) {
            gameB[7].innerHTML = 'O';
            gameB[7].disabled = true
        }
        if(e.target.id === "9" && clicks === 6) {
            gameB[8].innerHTML = 'O';
            gameB[8].disabled = true
        } 

        /*seven clicks */
        
        if(e.target.id === "1" && clicks === 7) {
            gameB[0].innerHTML = 'X';
            gameB[0].disabled = true
        }
        if(e.target.id === "2" && clicks === 7) {
            gameB[1].innerHTML = 'X';
            gameB[1].disabled = true
        }
        if(e.target.id === "3" && clicks === 7) {
            gameB[2].innerHTML = 'X';
            gameB[2].disabled = true
        }
        if(e.target.id === "4" && clicks === 7) {
            gameB[3].innerHTML = 'X';
            gameB[3].disabled = true
        }
        if(e.target.id === "5" && clicks === 7) {
            gameB[4].innerHTML = 'X';
            gameB[4].disabled = true
        }   
        if(e.target.id === "6" && clicks === 7) {
            gameB[5].innerHTML = 'X';
            gameB[5].disabled = true
        }
        if(e.target.id === "7" && clicks === 7) {
            gameB[6].innerHTML = 'X';
            gameB[6].disabled = true
        }
        if(e.target.id === "8" && clicks === 7) {
            gameB[7].innerHTML = 'X';
            gameB[7].disabled = true
        }
        if(e.target.id === "9" && clicks === 7) {
            gameB[8].innerHTML = 'X';
            gameB[8].disabled = true
        }

        /*eight clicks */
        
        if(e.target.id === "1" && clicks === 8) {
            gameB[0].innerHTML = 'O';
            gameB[0].disabled = true
        }
        if(e.target.id === "2" && clicks === 8) {
            gameB[1].innerHTML = 'O';
            gameB[1].disabled = true
        }
        if(e.target.id === "3" && clicks === 8) {
            gameB[2].innerHTML = 'O';
            gameB[2].disabled = true
        }
        if(e.target.id === "4" && clicks === 8) {
            gameB[3].innerHTML = 'O';
            gameB[3].disabled = true
        }
        if(e.target.id === "5" && clicks === 8) {
            gameB[4].innerHTML = 'O';
            gameB[4].disabled = true
        }   
        if(e.target.id === "6" && clicks === 8) {
            gameB[5].innerHTML = 'O';
            gameB[5].disabled = true
        }
        if(e.target.id === "7" && clicks === 8) {
            gameB[6].innerHTML = 'O';
            gameB[6].disabled = true
        }
        if(e.target.id === "8" && clicks === 8) {
            gameB[7].innerHTML = 'O';
            gameB[7].disabled = true
        }
        if(e.target.id === "9" && clicks === 8) {
            gameB[8].innerHTML = 'O';
            gameB[8].disabled = true
        } 

        /*nine clicks */
        
        if(e.target.id === "1" && clicks === 9) {
            gameB[0].innerHTML = 'X';
            gameB[0].disabled = true
        }
        if(e.target.id === "2" && clicks === 9) {
            gameB[1].innerHTML = 'X';
            gameB[1].disabled = true
        }
        if(e.target.id === "3" && clicks === 9) {
            gameB[2].innerHTML = 'X';
            gameB[2].disabled = true
        }
        if(e.target.id === "4" && clicks === 9) {
            gameB[3].innerHTML = 'X';
            gameB[3].disabled = true
        }
        if(e.target.id === "5" && clicks === 9) {
            gameB[4].innerHTML = 'X';
            gameB[4].disabled = true
        }   
        if(e.target.id === "6" && clicks === 9) {
            gameB[5].innerHTML = 'X';
            gameB[5].disabled = true
        }
        if(e.target.id === "7" && clicks === 9) {
            gameB[6].innerHTML = 'X';
            gameB[6].disabled = true
        }
        if(e.target.id === "8" && clicks === 9) {
            gameB[7].innerHTML = 'X';
            gameB[7].disabled = true
        }
        if(e.target.id === "9" && clicks === 9) {
            gameB[8].innerHTML = 'X';
            gameB[8].disabled = true
        }

        if (clicks === 9) { 
            gameB.forEach((game) => {
            setTimeout(() => {
                game.innerHTML = "";   
                clicks = 0;
                game.disabled = false
            }, 100);
            })
        }

        calc()
}


let Winner = document.querySelector('.Winner')
let WinnerText = document.querySelector('.Winner h3')
let restart = document.querySelector('.Restart')
let end2 = document.querySelector('.end2')

end2.addEventListener('click', ()=> {
    localStorage.removeItem('playerScore3')
    localStorage.removeItem('computerScore3')
    localStorage.removeItem('player3')
    localStorage.removeItem('secPlayer3')
})

restart.addEventListener('click', ()=> {
    pScore = 0
    playerS.innerHTML = pScore;
    cScore = 0
    formD.style.visibility = 'hidden'
    computerS.innerHTML = cScore
    Winner.style.display = 'none';
    localStorage.setItem('playerScore3', pScore)
    localStorage.setItem('computerScore3', cScore)
})

function conclude () {
    gameB.forEach((game) => {
        game.disabled = true;
        setTimeout(() => {
            game.innerHTML = "";   
            game.disabled = false
            clicks =  0
            docP = []
            if (pScore === 10) {
                formD.style.visibility = 'visible'
                Winner.style.display = 'inline'
                WinnerText.innerHTML = `${localStorage.getItem('player3')} Wins`;
            }else if (cScore === 10) {
                formD.style.visibility = 'visible'
                Winner.style.display = 'inline';
                WinnerText.innerHTML = `${localStorage.getItem('secPlayer3')} Wins`;
            }
            localStorage.setItem('playerScore3', pScore)
            localStorage.setItem('computerScore3', cScore)
            gameB[0].style.backgroundColor = "white";
            gameB[1].style.backgroundColor = "white";
            gameB[2].style.backgroundColor = "white";
            gameB[3].style.backgroundColor = "white";
            gameB[4].style.backgroundColor = "white";
            gameB[5].style.backgroundColor = "white";
            gameB[6].style.backgroundColor = "white";
            gameB[7].style.backgroundColor = "white";
            gameB[8].style.backgroundColor = "white";
        }, 2000);
    })
}

function calc () {
    if(gameB[0].innerHTML === 'X' && gameB[1].innerHTML === 'X' && gameB[2].innerHTML === 'X') {
        pScore++;
        playerS.innerHTML = pScore;
        gameB[0].style.backgroundColor = "green";
        gameB[1].style.backgroundColor = "green";
        gameB[2].style.backgroundColor = "green";
        conclude()
    }
    else if (gameB[3].innerHTML === 'X' && gameB[4].innerHTML === 'X' && gameB[5].innerHTML === 'X') {
        pScore++;
        playerS.innerHTML = pScore;
        gameB[3].style.backgroundColor = "green";
        gameB[4].style.backgroundColor = "green";
        gameB[5].style.backgroundColor = "green";
        conclude()
    }
    else if (gameB[6].innerHTML === 'X' && gameB[7].innerHTML === 'X' && gameB[8].innerHTML === 'X') {
        pScore++;
        playerS.innerHTML = pScore;
        gameB[6].style.backgroundColor = "green";
        gameB[7].style.backgroundColor = "green";
        gameB[8].style.backgroundColor = "green";
        conclude()
    }
    else if (gameB[0].innerHTML === 'X' && gameB[3].innerHTML === 'X' && gameB[6].innerHTML === 'X') {
        pScore++;
        playerS.innerHTML = pScore;
        gameB[0].style.backgroundColor = "green";
        gameB[3].style.backgroundColor = "green";
        gameB[6].style.backgroundColor = "green";
        conclude()

    }
    else if (gameB[1].innerHTML === 'X' && gameB[4].innerHTML === 'X' && gameB[7].innerHTML === 'X') {
        pScore++;
        playerS.innerHTML = pScore;
        gameB[1].style.backgroundColor = "green";
        gameB[4].style.backgroundColor = "green";
        gameB[7].style.backgroundColor = "green";
        conclude()
    }
    else if (gameB[2].innerHTML === 'X' && gameB[5].innerHTML === 'X' && gameB[8].innerHTML === 'X') {
        pScore++;
        playerS.innerHTML = pScore;
        gameB[2].style.backgroundColor = "green";
        gameB[5].style.backgroundColor = "green";
        gameB[8].style.backgroundColor = "green";
        conclude()
    }
    else if (gameB[0].innerHTML === 'X' && gameB[4].innerHTML === 'X' && gameB[8].innerHTML === 'X') {
        pScore++;
        playerS.innerHTML = pScore;
        gameB[0].style.backgroundColor = "green";
        gameB[4].style.backgroundColor = "green";
        gameB[8].style.backgroundColor = "green";
        conclude()
    }
    else if (gameB[2].innerHTML === 'X' && gameB[4].innerHTML === 'X' && gameB[6].innerHTML === 'X') {
        pScore++;
        playerS.innerHTML = pScore;
        gameB[2].style.backgroundColor = "green";
        gameB[4].style.backgroundColor = "green";
        gameB[6].style.backgroundColor = "green";
        conclude()
    }


    //O verification 
     else if(gameB[0].innerHTML === 'O' && gameB[1].innerHTML === 'O' && gameB[2].innerHTML === 'O') {
        cScore++;
        computerS.innerHTML = cScore;
        gameB[0].style.backgroundColor = "green";
        gameB[1].style.backgroundColor = "green";
        gameB[2].style.backgroundColor = "green";
        conclude()
        return
    }
    else if (gameB[3].innerHTML === 'O' && gameB[4].innerHTML === 'O' && gameB[5].innerHTML === 'O') {
        cScore++;
        computerS.innerHTML = cScore;
        gameB[3].style.backgroundColor = "green";
        gameB[4].style.backgroundColor = "green";
        gameB[5].style.backgroundColor = "green";
        conclude()
        return
    }
    else if (gameB[6].innerHTML === 'O' && gameB[7].innerHTML === 'O' && gameB[8].innerHTML === 'O') {
        cScore++;
        computerS.innerHTML = cScore;
        gameB[6].style.backgroundColor = "green";
        gameB[7].style.backgroundColor = "green";
        gameB[8].style.backgroundColor = "green";
        conclude()
        return
    }
    else if (gameB[0].innerHTML === 'O' && gameB[3].innerHTML === 'O' && gameB[6].innerHTML === 'O') {
        cScore++;
        computerS.innerHTML = cScore;
        gameB[0].style.backgroundColor = "green";
        gameB[3].style.backgroundColor = "green";
        gameB[6].style.backgroundColor = "green";
        conclude()
        return
    }
    else if (gameB[1].innerHTML === 'O' && gameB[4].innerHTML === 'O' && gameB[7].innerHTML === 'O') {
        cScore++;
        computerS.innerHTML = cScore;
        gameB[1].style.backgroundColor = "green";
        gameB[4].style.backgroundColor = "green";
        gameB[7].style.backgroundColor = "green";
        conclude()
        return
    }
    else if (gameB[2].innerHTML === 'O' && gameB[5].innerHTML === 'O' && gameB[8].innerHTML === 'O') {
        cScore++;
        computerS.innerHTML = cScore;
        gameB[2].style.backgroundColor = "green";
        gameB[5].style.backgroundColor = "green";
        gameB[8].style.backgroundColor = "green";
        conclude()
        return
    }
    else if (gameB[0].innerHTML === 'O' && gameB[4].innerHTML === 'O' && gameB[8].innerHTML === 'O') {
        cScore++;
        computerS.innerHTML = cScore;
        gameB[0].style.backgroundColor = "green";
        gameB[4].style.backgroundColor = "green";
        gameB[8].style.backgroundColor = "green";
        conclude()
        return
    }
    else if (gameB[2].innerHTML === 'O' && gameB[4].innerHTML === 'O' && gameB[6].innerHTML === 'O') {
        cScore++;
        computerS.innerHTML = cScore;
        gameB[2].style.backgroundColor = "green";
        gameB[4].style.backgroundColor = "green";
        gameB[6].style.backgroundColor = "green";
        conclude()
        return
    } 
}  

let mainBody = document.querySelector('.main');
let formInput = document.getElementById('name')
let formInput2 = document.getElementById('name2')
let form = document.querySelector('form')
let formD = document.querySelector('.form')
let playerName = document.querySelector('.playerS h3')
let secondPlayer = document.querySelector('.player2S h3')
let endGame = document.querySelector('.end button')
let endGameC = document.querySelector('.contain')
let No = document.querySelector('.No')
let yes = document.querySelector('.yes')


endGame.addEventListener('click', (e)=> {
    endGameC.style.display = 'inline';
    formD.style.visibility = 'visible'
})

No.addEventListener('click', (e)=> {
    endGameC.style.display = 'none';
    formD.style.visibility = 'hidden'
})

yes.addEventListener('click', (e)=> { 
    localStorage.removeItem('playerScore3')
    localStorage.removeItem('computerScore3')
    localStorage.removeItem('player3')
    localStorage.removeItem('secPlayer3')
})

form.addEventListener('submit', (e)=> {
    e.preventDefault()
    localStorage.setItem('player3', `${formInput.value.charAt(0).toUpperCase()}` + formInput.value.substring(1))
    localStorage.setItem('secPlayer3', `${formInput2.value.charAt(0).toUpperCase()}` + formInput2.value.substring(1))
    mainBody.style.visibility = 'visible';
    form.style.display = 'none';
    formD.style.visibility = 'hidden'
    playerName.innerHTML = localStorage.getItem('player3')
    secondPlayer.innerHTML = localStorage.getItem('secPlayer3')
})

window.addEventListener('load', ()=> {
    if(localStorage.getItem('playerScore3') === null && localStorage.getItem('computerScore3') === null) {
        playerS.innerHTML = "0"
        computerS.innerHTML = '0'
    }
    else {
        computerS.innerHTML = localStorage.getItem('computerScore3');
        playerS.innerHTML = localStorage.getItem('playerScore3');
        pScore = localStorage.getItem('playerScore3')
        cScore = localStorage.getItem('computerScore3')
    }

    if(localStorage.getItem('player3') !== null && localStorage.getItem('secPlayer3') !== null) {
        mainBody.style.visibility = 'visible';
        form.style.display = 'none';
        formD.style.visibility = 'hidden'
        playerName.innerHTML = localStorage.getItem('player3')
        secondPlayer.innerHTML = localStorage.getItem('secPlayer3')
    }
    else {
        formD.style.visibility = 'visible'
    }

    calc()
})