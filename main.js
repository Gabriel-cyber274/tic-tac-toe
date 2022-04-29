let gameB = document.querySelectorAll('.gameB');
let playerS = document.querySelector('.playerS P')
let computerS = document.querySelector('.computerS p')
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
        if(e.target.id === "1") {
            gameB[0].innerHTML = 'X';
            gameB[0].disabled = true
        }
        if(e.target.id === "2") {
            gameB[1].innerHTML = 'X';
            gameB[1].disabled = true
        }
        if(e.target.id === "3") {
            gameB[2].innerHTML = 'X';
            gameB[2].disabled = true
        }
        if(e.target.id === "4") {
            gameB[3].innerHTML = 'X';
            gameB[3].disabled = true
        }
        if(e.target.id === "5") {
            gameB[4].innerHTML = 'X';
            gameB[4].disabled = true
        }   
        if(e.target.id === "6") {
            gameB[5].innerHTML = 'X';
            gameB[5].disabled = true
        }
        if(e.target.id === "7") {
            gameB[6].innerHTML = 'X';
            gameB[6].disabled = true
        }
        if(e.target.id === "8") {
            gameB[7].innerHTML = 'X';
            gameB[7].disabled = true
        }
        if(e.target.id === "9") {
            gameB[8].innerHTML = 'X';
            gameB[8].disabled = true
        } 


        if(gameB[0].innerHTML !== 'X' && gameB[0].innerHTML !== 'O') {
            doc1 = "0";
            docP.push(doc1)
        } 
        if(gameB[1].innerHTML !== 'X' && gameB[1].innerHTML !== 'O') {
            doc2 = "1";
            docP.push(doc2)
        } 
        if(gameB[2].innerHTML !== 'X' && gameB[2].innerHTML !== 'O') {
            doc3 = "2";
            docP.push(doc3)
        } 
        if(gameB[3].innerHTML !== 'X' && gameB[3].innerHTML !== 'O') {
            doc4 = "3";
            docP.push(doc4)
        } 
        if(gameB[4].innerHTML !== 'X' && gameB[4].innerHTML !== 'O') {
            doc5 = "4";
            docP.push(doc5)
        } 
        if(gameB[5].innerHTML !== 'X' && gameB[5].innerHTML !== 'O') {
            doc6 = "5";
            docP.push(doc6)
        } 
        if(gameB[6].innerHTML !== 'X' && gameB[6].innerHTML !== 'O') {
            doc7 = "6";
            docP.push(doc7)
        } 
        if(gameB[7].innerHTML !== 'X' && gameB[7].innerHTML !== 'O') {
            doc8 = "7";
            docP.push(doc8)
        } 
        if(gameB[8].innerHTML !== 'X' && gameB[8].innerHTML !== 'O') {
            doc9 = "8";
            docP.push(doc9)
        }

        clicks ++;

        setTimeout(() => {
            generateComputerChoice()  
        }, 100);

}

function generateComputerChoice () {
    if(clicks === 1) {
        let random = Math.floor(Math.random()*7)
        gameB[docP[random]].innerHTML = 'O';
        gameB[docP[random]].disabled = true;
    }
    if(clicks === 2) {
        let postD  = [docP[8],docP[9],docP[10],docP[11],docP[12],docP[13]]
        let random = Math.floor(Math.random()*5)
        gameB[postD[random]].innerHTML = 'O';
        gameB[postD[random]].disabled = true;
    }
    if(clicks === 3) {
        let postD  = [docP[14],docP[15],docP[16],docP[17]]
        let random = Math.floor(Math.random()*3)
        gameB[postD[random]].innerHTML = 'O';
        gameB[postD[random]].disabled = true;
    }
    if(clicks === 4) {
        let postD  = [docP[18],docP[19]]
        let random = Math.floor(Math.random()*1)
        gameB[postD[random]].innerHTML = 'O';
        gameB[postD[random]].disabled = true;
    }
    if(clicks === 5) {
        gameB.forEach((game) => {
            setTimeout(() => {
                game.innerHTML = "";   
                clicks = 0;
                docP = []
                game.disabled = false
            }, 100);
        })
    }

    calc ()
}


function conclude () {
    gameB.forEach((game) => {
        game.disabled = true;
        setTimeout(() => {
            game.innerHTML = "";   
            game.disabled = false
            clicks =  0
            docP = []
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
