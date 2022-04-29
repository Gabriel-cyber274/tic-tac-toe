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
let docH = [];

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


        /* second Validation */

        if (gameB[0].innerHTML === 'X' && gameB[0].innerHTML !== 'O') {
            doc1 = "0";
            docH.push(doc1)
        } 
        if(gameB[1].innerHTML === 'X' && gameB[1].innerHTML !== 'O') {
            doc2 = "1";
            docH.push(doc2)
        } 
        if(gameB[2].innerHTML === 'X' && gameB[2].innerHTML !== 'O') {
            doc3 = "2";
            docH.push(doc3)
        } 
        if(gameB[3].innerHTML === 'X' && gameB[3].innerHTML !== 'O') {
            doc4 = "3";
            docH.push(doc4)
        } 
        if(gameB[4].innerHTML === 'X' && gameB[4].innerHTML !== 'O') {
            doc5 = "4";
            docH.push(doc5)
        } 
        if(gameB[5].innerHTML === 'X' && gameB[5].innerHTML !== 'O') {
            doc6 = "5";
            docH.push(doc6)
        } 
        if(gameB[6].innerHTML === 'X' && gameB[6].innerHTML !== 'O') {
            doc7 = "6";
            docH.push(doc7)
        } 
        if(gameB[7].innerHTML === 'X' && gameB[7].innerHTML !== 'O') {
            doc8 = "7";
            docH.push(doc8)
        } 
        if(gameB[8].innerHTML === 'X' && gameB[8].innerHTML !== 'O') {
            doc9 = "8";
            docH.push(doc9)
        }

        clicks ++;


        setTimeout(() => {
            generateComputerChoice()  
        }, 100);
        
}

let postH1 = [docH[1],docH[2]]

function generateComputerChoice () {
    if(clicks === 1 && gameB[4].innerHTML === "X") {
        let postD  = [gameB[0],gameB[2],gameB[6],gameB[8]]
        let random = Math.floor(Math.random()*3)
        postD[random].innerHTML = "O"
        postD[random].disabled = true;
    }
    else if (clicks === 1 && gameB[4].innerHTML !== "X") {
        gameB[4].innerHTML = "O";
        gameB[4].disabled = true;
    }

    if (clicks === 2) {  
        secondClick()
    }

    if(clicks === 3)  {
        thirdClick()
    }

    if(clicks === 4) {
        fourthClick()
    }
    if(clicks === 5) {
        gameB.forEach((game) => {
            setTimeout(() => {
                game.innerHTML = "";   
                clicks = 0;
                docP = []
                postH1 = []
                docH = []
                game.disabled = false
            }, 100);
        })
    }
    calc ()
    
}



function secondClick () {
    if(clicks === 2 && gameB[0].innerHTML === "X" && gameB[1].innerHTML === "X" && gameB[2].innerHTML !== "X") {
        gameB[2].innerHTML = "O"
        gameB[2].disabled = true
    }
    else if(clicks === 2 && gameB[0].innerHTML === "X" && gameB[2].innerHTML === "X" && gameB[1].innerHTML !== "X") {
        gameB[1].innerHTML = "O"
        gameB[1].disabled = true
    }
    else if(clicks === 2 && gameB[1].innerHTML === "X" && gameB[2].innerHTML === "X" && gameB[0].innerHTML !== "X") {
        gameB[0].innerHTML = "O"
        gameB[0].disabled = true
    }
    else if(clicks === 2 && gameB[0].innerHTML === "X" && gameB[3].innerHTML === "X" && gameB[6].innerHTML !== "X") {
        gameB[6].innerHTML = "O"
        gameB[6].disabled = true
    }
    else if(clicks === 2 && gameB[0].innerHTML === "X" && gameB[6].innerHTML === "X" && gameB[3].innerHTML !== "X") {
        gameB[3].innerHTML = "O"
        gameB[3].disabled = true
    }
    else if(clicks === 2 && gameB[3].innerHTML === "X" && gameB[6].innerHTML === "X" && gameB[0].innerHTML !== "X") {
        gameB[0].innerHTML = "O"
        gameB[0].disabled = true
    }
    else if(clicks === 2 && gameB[6].innerHTML === "X" && gameB[7].innerHTML === "X" && gameB[8].innerHTML !== "X") {
        gameB[8].innerHTML = "O"
        gameB[8].disabled = true
    }
    else if(clicks === 2 && gameB[6].innerHTML === "X" && gameB[8].innerHTML === "X" && gameB[7].innerHTML !== "X") {
        gameB[7].innerHTML = "O"
        gameB[7].disabled = true
    }
    else if(clicks === 2 && gameB[7].innerHTML === "X" && gameB[8].innerHTML === "X" && gameB[6].innerHTML !== "X") {
        gameB[6].innerHTML = "O"
        gameB[6].disabled = true
    }
    else if(clicks === 2 && gameB[2].innerHTML === "X" && gameB[5].innerHTML === "X" && gameB[8].innerHTML !== "X") {
        gameB[8].innerHTML = "O"
        gameB[8].disabled = true
    }
    else if(clicks === 2 && gameB[2].innerHTML === "X" && gameB[8].innerHTML === "X" && gameB[5].innerHTML !== "X") {
        gameB[5].innerHTML = "O"
        gameB[5].disabled = true
    }
    else if(clicks === 2 && gameB[5].innerHTML === "X" && gameB[8].innerHTML === "X" && gameB[2].innerHTML !== "X") {
        gameB[2].innerHTML = "O"
        gameB[2].disabled = true
    }
    else if(clicks === 2 && gameB[1].innerHTML === "X" && gameB[4].innerHTML === "X" && gameB[7].innerHTML !== "X" && gameB[7].innerHTML !== "O") {
        gameB[7].innerHTML = "O"
        gameB[7].disabled = true
    }
    else if(clicks === 2 && gameB[4].innerHTML === "X" && gameB[7].innerHTML === "X" && gameB[1].innerHTML !== "X" && gameB[1].innerHTML !== "O") {
        gameB[1].innerHTML = "O"
        gameB[1].disabled = true
    }
    else if(clicks === 2 && gameB[4].innerHTML === "X" && gameB[3].innerHTML === "X" && gameB[5].innerHTML !== "X" && gameB[5].innerHTML !== "O") {
        gameB[5].innerHTML = "O"
        gameB[5].disabled = true
    }
    else if(clicks === 2 && gameB[4].innerHTML === "X" && gameB[5].innerHTML === "X" && gameB[3].innerHTML !== "X" && gameB[3].innerHTML !== "O") {
        gameB[3].innerHTML = "O"
        gameB[3].disabled = true
    }
    else if(clicks === 2 && gameB[4].innerHTML === "X" && gameB[2].innerHTML === "X" && gameB[6].innerHTML !== "X" && gameB[6].innerHTML !== "O") {
        gameB[6].innerHTML = "O"
        gameB[6].disabled = true
    }
    else if(clicks === 2 && gameB[4].innerHTML === "X" && gameB[6].innerHTML === "X" && gameB[2].innerHTML !== "X" && gameB[2].innerHTML !== "O") {
        gameB[2].innerHTML = "O"
        gameB[2].disabled = true
    }
    else if(clicks === 2 && gameB[0].innerHTML === "X" && gameB[4].innerHTML === "X" && gameB[8].innerHTML !== "X" && gameB[0].innerHTML !== "O") {
        gameB[8].innerHTML = "O"
        gameB[8].disabled = true
    }
    else if(clicks === 2 && gameB[4].innerHTML === "X" && gameB[5].innerHTML === "X" && gameB[3].innerHTML !== "X") {
        gameB[3].innerHTML = "O"
        gameB[3].disabled = true
    }
    else if(clicks === 2 && gameB[4].innerHTML === "X" && gameB[8].innerHTML === "X" && gameB[0].innerHTML !== "X" && gameB[0].innerHTML !== "O") {
        gameB[0].innerHTML = "O"
        gameB[0].disabled = true
    }
    else if(clicks === 2 && gameB[4].innerHTML === "X" && gameB[8].innerHTML === "X" && gameB[0].innerHTML !== "X" && gameB[0].innerHTML === "O") {
        let postD  = [docP[8],docP[9],docP[10],docP[11],docP[12],docP[13]]
        let random = Math.floor(Math.random()*5)
        gameB[postD[random]].innerHTML = 'O';
        gameB[postD[random]].disabled = true;
    }
    else if(clicks === 2 && gameB[0].innerHTML === "X" && gameB[4].innerHTML === "X" && gameB[8].innerHTML !== "X" && gameB[0].innerHTML === "O") {
        let postD  = [docP[8],docP[9],docP[10],docP[11],docP[12],docP[13]]
        let random = Math.floor(Math.random()*5)
        gameB[postD[random]].innerHTML = 'O';
        gameB[postD[random]].disabled = true;
    }
    else if(clicks === 2 && gameB[4].innerHTML === "X" && gameB[2].innerHTML === "X" && gameB[6].innerHTML !== "X" && gameB[6].innerHTML === "O") {
        let postD  = [docP[8],docP[9],docP[10],docP[11],docP[12],docP[13]]
        let random = Math.floor(Math.random()*5)
        gameB[postD[random]].innerHTML = 'O';
        gameB[postD[random]].disabled = true;
    }
    else if(clicks === 2 && gameB[4].innerHTML === "X" && gameB[6].innerHTML === "X" && gameB[2].innerHTML !== "X" && gameB[2].innerHTML === "O") {
        let postD  = [docP[8],docP[9],docP[10],docP[11],docP[12],docP[13]]
        let random = Math.floor(Math.random()*5)
        gameB[postD[random]].innerHTML = 'O';
        gameB[postD[random]].disabled = true;
    }
    else if(clicks === 2 && gameB[4].innerHTML === "X" && gameB[3].innerHTML === "X" && gameB[5].innerHTML !== "X" && gameB[5].innerHTML === "O") {
        let postD  = [docP[8],docP[9],docP[10],docP[11],docP[12],docP[13]]
        let random = Math.floor(Math.random()*5)
        gameB[postD[random]].innerHTML = 'O';
        gameB[postD[random]].disabled = true;
    }
    else if(clicks === 2 && gameB[4].innerHTML === "X" && gameB[5].innerHTML === "X" && gameB[3].innerHTML !== "X" && gameB[3].innerHTML === "O") {
        let postD  = [docP[8],docP[9],docP[10],docP[11],docP[12],docP[13]]
        let random = Math.floor(Math.random()*5)
        gameB[postD[random]].innerHTML = 'O';
        gameB[postD[random]].disabled = true;
    }
    else if(clicks === 2 && gameB[1].innerHTML === "X" && gameB[4].innerHTML === "X" && gameB[7].innerHTML !== "X" && gameB[7].innerHTML === "O") {
        let postD  = [docP[8],docP[9],docP[10],docP[11],docP[12],docP[13]]
        let random = Math.floor(Math.random()*5)
        gameB[postD[random]].innerHTML = 'O';
        gameB[postD[random]].disabled = true;
    }
    else if(clicks === 2 && gameB[4].innerHTML === "X" && gameB[7].innerHTML === "X" && gameB[1].innerHTML !== "X" && gameB[1].innerHTML === "O") {
        let postD  = [docP[8],docP[9],docP[10],docP[11],docP[12],docP[13]]
        let random = Math.floor(Math.random()*5)
        gameB[postD[random]].innerHTML = 'O';
        gameB[postD[random]].disabled = true;
    }
    else{
        let postD  = [docP[8],docP[9],docP[10],docP[11],docP[12],docP[13]]
        let random = Math.floor(Math.random()*5)
        gameB[postD[random]].innerHTML = 'O';
        gameB[postD[random]].disabled = true;
    }
}


function thirdClick () {
    if(clicks === 3 && gameB[0].innerHTML === 'O' && gameB[1].innerHTML === 'O' && gameB[2].innerHTML !== 'X' && gameB[2].innerHTML !== 'O') {
        gameB[2].innerHTML = 'O'
        gameB[2].disabled = true
    }
    else if(clicks === 3 && gameB[0].innerHTML === 'O' && gameB[2].innerHTML === 'O' && gameB[1].innerHTML !== 'X' && gameB[1].innerHTML !== 'O') {
        gameB[1].innerHTML = 'O'
        gameB[1].disabled = true
    }
    else if(clicks === 3 && gameB[1].innerHTML === 'O' && gameB[2].innerHTML === 'O' && gameB[0].innerHTML !== 'X' && gameB[0].innerHTML !== 'O') {
        gameB[0].innerHTML = 'O'
        gameB[0].disabled = true
    }
    else if(clicks === 3 && gameB[0].innerHTML === 'O' && gameB[6].innerHTML === 'O' && gameB[3].innerHTML !== 'X'  && gameB[3].innerHTML !== 'O') {
        gameB[3].innerHTML = 'O'
        gameB[3].disabled = true
    }
    else if(clicks === 3 && gameB[3].innerHTML === 'O' && gameB[6].innerHTML === 'O' && gameB[0].innerHTML !== 'X'  && gameB[0].innerHTML !== 'O') {
        gameB[0].innerHTML = 'O'
        gameB[0].disabled = true
    }
    else if(clicks === 3 && gameB[0].innerHTML === 'O' && gameB[3].innerHTML === 'O' && gameB[6].innerHTML !== 'X' && gameB[6].innerHTML !== 'O') {
        gameB[6].innerHTML = 'O'
        gameB[6].disabled = true
    }
    else if(clicks === 3 && gameB[6].innerHTML === 'O' && gameB[7].innerHTML === 'O' && gameB[8].innerHTML !== 'X' && gameB[8].innerHTML !== 'O') {
        gameB[8].innerHTML = 'O'
        gameB[8].disabled = true
    }
    else if(clicks === 3 && gameB[6].innerHTML === 'O' && gameB[8].innerHTML === 'O' && gameB[7].innerHTML !== 'X' && gameB[7].innerHTML !== 'O') {
        gameB[7].innerHTML = 'O'
        gameB[7].disabled = true
    }
    else if(clicks === 3 && gameB[8].innerHTML === 'O' && gameB[7].innerHTML === 'O' && gameB[6].innerHTML !== 'X' && gameB[6].innerHTML !== 'O') {
        gameB[6].innerHTML = 'O'
        gameB[6].disabled = true
    }
    else if(clicks === 3 && gameB[2].innerHTML === 'O' && gameB[8].innerHTML === 'O' && gameB[5].innerHTML !== 'X' && gameB[5].innerHTML !== 'O') {
        gameB[5].innerHTML = 'O'
        gameB[5].disabled = true
    }
    else if(clicks === 3 && gameB[2].innerHTML === 'O' && gameB[5].innerHTML === 'O' && gameB[8].innerHTML !== 'X' && gameB[8].innerHTML !== 'O') {
        gameB[8].innerHTML = 'O'
        gameB[8].disabled = true
    }
    else if(clicks === 3 && gameB[8].innerHTML === 'O' && gameB[5].innerHTML === 'O' && gameB[2].innerHTML !== 'X' && gameB[2].innerHTML !== 'O') {
        gameB[2].innerHTML = 'O'
        gameB[2].disabled = true
    }
    else if(clicks === 3 && gameB[0].innerHTML === 'O' && gameB[8].innerHTML === 'O' && gameB[4].innerHTML !== 'X' && gameB[4].innerHTML !== 'O') {
        gameB[4].innerHTML = 'O'
        gameB[4].disabled = true
    }
    else if(clicks === 3 && gameB[0].innerHTML === 'O' && gameB[4].innerHTML === 'O' && gameB[8].innerHTML !== 'X' && gameB[8].innerHTML !== 'O') {
        gameB[8].innerHTML = 'O'
        gameB[8].disabled = true
    }
    else if(clicks === 3 && gameB[4].innerHTML === 'O' && gameB[8].innerHTML === 'O' && gameB[0].innerHTML !== 'X' && gameB[0].innerHTML !== 'O') {
        gameB[0].innerHTML = 'O'
        gameB[0].disabled = true
    }
    else if(clicks === 3 && gameB[2].innerHTML === 'O' && gameB[4].innerHTML === 'O' && gameB[6].innerHTML !== 'X' && gameB[6].innerHTML !== 'O') {
        gameB[6].innerHTML = 'O'
        gameB[6].disabled = true
    }
    else if(clicks === 3 && gameB[2].innerHTML === 'O' && gameB[6].innerHTML === 'O' && gameB[4].innerHTML !== 'X' && gameB[4].innerHTML !== 'O') {
        gameB[4].innerHTML = 'O'
        gameB[4].disabled = true
    }
    else if(clicks === 3 && gameB[6].innerHTML === 'O' && gameB[4].innerHTML === 'O' && gameB[2].innerHTML !== 'X' && gameB[2].innerHTML !== 'O') {
        gameB[2].innerHTML = 'O'
        gameB[2].disabled = true
    }
    else if(clicks === 3 && gameB[6].innerHTML === 'O' && gameB[4].innerHTML === 'O' && gameB[2].innerHTML !== 'X' && gameB[2].innerHTML !== 'O') {
        gameB[2].innerHTML = 'O'
        gameB[2].disabled = true
    }
    else if(clicks === 3 && gameB[3].innerHTML === 'O' && gameB[4].innerHTML === 'O' && gameB[5].innerHTML !== 'X' && gameB[5].innerHTML !== 'O') {
        gameB[5].innerHTML = 'O'
        gameB[5].disabled = true
    }
    else if(clicks === 3 && gameB[4].innerHTML === 'O' && gameB[5].innerHTML === 'O' && gameB[3].innerHTML !== 'X' && gameB[3].innerHTML !== 'O') {
        gameB[3].innerHTML = 'O'
        gameB[3].disabled = true
    }
    else if(clicks === 3 && gameB[3].innerHTML === 'O' && gameB[5].innerHTML === 'O' && gameB[4].innerHTML !== 'X' && gameB[4].innerHTML !== 'O') {
        gameB[4].innerHTML = 'O'
        gameB[4].disabled = true
    }
    else if(clicks === 3 && gameB[1].innerHTML === 'O' && gameB[4].innerHTML === 'O' && gameB[7].innerHTML !== 'X' && gameB[7].innerHTML !== 'O') {
        gameB[7].innerHTML = 'O'
        gameB[7].disabled = true
    }
    else if(clicks === 3 && gameB[2].innerHTML === 'O' && gameB[7].innerHTML === 'O' && gameB[4].innerHTML !== 'X' && gameB[4].innerHTML !== 'O') {
        gameB[4].innerHTML = 'O'
        gameB[4].disabled = true
    }
    else if(clicks === 3 && gameB[7].innerHTML === 'O' && gameB[4].innerHTML === 'O' && gameB[2].innerHTML !== 'X' && gameB[2].innerHTML !== 'O') {
        gameB[2].innerHTML = 'O'
        gameB[2].disabled = true
    }

    /* blocking */
    else if(clicks === 3 && gameB[0].innerHTML === "X" && gameB[1].innerHTML === "X" && gameB[2].innerHTML !== "X" && gameB[2].innerHTML !== "O") {
        gameB[2].innerHTML = "O"
        gameB[2].disabled = true
    }
    else if(clicks === 3 && gameB[0].innerHTML === "X" && gameB[2].innerHTML === "X" && gameB[1].innerHTML !== "X" && gameB[1].innerHTML !== "O") {
        gameB[1].innerHTML = "O"
        gameB[1].disabled = true
    }
    else if(clicks === 3 && gameB[1].innerHTML === "X" && gameB[2].innerHTML === "X" && gameB[0].innerHTML !== "X" && gameB[0].innerHTML !== "O") {
        gameB[0].innerHTML = "O"
        gameB[0].disabled = true
    }
    else if(clicks === 3 && gameB[0].innerHTML === "X" && gameB[3].innerHTML === "X" && gameB[6].innerHTML !== "X" && gameB[6].innerHTML !== "O") {
        gameB[6].innerHTML = "O"
        gameB[6].disabled = true
    }
    else if(clicks === 3 && gameB[0].innerHTML === "X" && gameB[6].innerHTML === "X" && gameB[3].innerHTML !== "X" && gameB[3].innerHTML !== "O") {
        gameB[3].innerHTML = "O"
        gameB[3].disabled = true
    }
    else if(clicks === 3 && gameB[3].innerHTML === "X" && gameB[6].innerHTML === "X" && gameB[0].innerHTML !== "X" && gameB[0].innerHTML !== "O") {
        gameB[0].innerHTML = "O"
        gameB[0].disabled = true
    }
    else if(clicks === 3 && gameB[6].innerHTML === "X" && gameB[7].innerHTML === "X" && gameB[8].innerHTML !== "X" && gameB[8].innerHTML !== "O") {
        gameB[8].innerHTML = "O"
        gameB[8].disabled = true
    }
    else if(clicks === 3 && gameB[6].innerHTML === "X" && gameB[8].innerHTML === "X" && gameB[7].innerHTML !== "X" && gameB[7].innerHTML !== "O") {
        gameB[7].innerHTML = "O"
        gameB[7].disabled = true
    }
    else if(clicks === 3 && gameB[7].innerHTML === "X" && gameB[8].innerHTML === "X" && gameB[6].innerHTML !== "X" && gameB[6].innerHTML !== "O") {
        gameB[6].innerHTML = "O"
        gameB[6].disabled = true
    }
    else if(clicks === 3 && gameB[2].innerHTML === "X" && gameB[5].innerHTML === "X" && gameB[8].innerHTML !== "X" && gameB[8].innerHTML !== "O") {
        gameB[8].innerHTML = "O"
        gameB[8].disabled = true
    }
    else if(clicks === 3 && gameB[2].innerHTML === "X" && gameB[8].innerHTML === "X" && gameB[5].innerHTML !== "X" && gameB[5].innerHTML !== "O") {
        gameB[5].innerHTML = "O"
        gameB[5].disabled = true
    }
    else if(clicks === 3 && gameB[5].innerHTML === "X" && gameB[8].innerHTML === "X" && gameB[2].innerHTML !== "X" && gameB[2].innerHTML !== "O") {
        gameB[2].innerHTML = "O"
        gameB[2].disabled = true
    }
    else if(clicks === 3 && gameB[0].innerHTML === "X" && gameB[4].innerHTML === "X" && gameB[8].innerHTML !== "X" && gameB[8].innerHTML !== "O") {
        gameB[8].innerHTML = "O"
        gameB[8].disabled = true
    }
    else if(clicks === 3 && gameB[0].innerHTML === "X" && gameB[8].innerHTML === "X" && gameB[4].innerHTML !== "X" && gameB[4].innerHTML !== "O") {
        gameB[4].innerHTML = "O"
        gameB[4].disabled = true
    }
    else if(clicks === 3 && gameB[4].innerHTML === "X" && gameB[8].innerHTML === "X" && gameB[0].innerHTML !== "X" && gameB[0].innerHTML !== "O") {
        gameB[0].innerHTML = "O"
        gameB[0].disabled = true
    }
    else if(clicks === 3 && gameB[2].innerHTML === "X" && gameB[4].innerHTML === "X" && gameB[6].innerHTML !== "X" && gameB[6].innerHTML !== "O") {
        gameB[6].innerHTML = "O"
        gameB[6].disabled = true
    }
    else if(clicks === 3 && gameB[2].innerHTML === "X" && gameB[6].innerHTML === "X" && gameB[4].innerHTML !== "X" && gameB[4].innerHTML !== "O") {
        gameB[4].innerHTML = "O"
        gameB[4].disabled = true
    }
    else if(clicks === 3 && gameB[4].innerHTML === "X" && gameB[6].innerHTML === "X" && gameB[2].innerHTML !== "X" && gameB[2].innerHTML !== "O") {
        gameB[2].innerHTML = "O"
        gameB[2].disabled = true
    }
    else if(clicks === 3 && gameB[3].innerHTML === "X" && gameB[4].innerHTML === "X" && gameB[5].innerHTML !== "X" && gameB[5].innerHTML !== "O") {
        gameB[5].innerHTML = "O"
        gameB[5].disabled = true
    }
    else if(clicks === 3 && gameB[3].innerHTML === "X" && gameB[5].innerHTML === "X" && gameB[4].innerHTML !== "X" && gameB[4].innerHTML !== "O") {
        gameB[4].innerHTML = "O"
        gameB[4].disabled = true
    }
    else if(clicks === 3 && gameB[4].innerHTML === "X" && gameB[5].innerHTML === "X" && gameB[3].innerHTML !== "X" && gameB[3].innerHTML !== "O") {
        gameB[3].innerHTML = "O"
        gameB[3].disabled = true
    }
    else if(clicks === 3 && gameB[1].innerHTML === "X" && gameB[4].innerHTML === "X" && gameB[7].innerHTML !== "X" && gameB[7].innerHTML !== "O") {
        gameB[7].innerHTML = "O"
        gameB[7].disabled = true
    }
    else if(clicks === 3 && gameB[1].innerHTML === "X" && gameB[7].innerHTML === "X" && gameB[4].innerHTML !== "X" && gameB[4].innerHTML !== "O") {
        gameB[4].innerHTML = "O"
        gameB[4].disabled = true
    }
    else if(clicks === 3 && gameB[4].innerHTML === "X" && gameB[7].innerHTML === "X" && gameB[1].innerHTML !== "X" && gameB[1].innerHTML !== "O") {
        gameB[1].innerHTML = "O"
        gameB[1].disabled = true
    }
    else{
        let postD  = [docP[14],docP[15],docP[16],docP[17]]
        let random = Math.floor(Math.random()*3)
        gameB[postD[random]].innerHTML = 'O';
        gameB[postD[random]].disabled = true;
    }

}


function fourthClick () {
    if(clicks === 4 && gameB[0].innerHTML === 'O' && gameB[1].innerHTML === 'O' && gameB[2].innerHTML !== 'X' && gameB[2].innerHTML !== 'O') {
        gameB[2].innerHTML = 'O'
        gameB[2].disabled = true
    }
    else if(clicks === 4 && gameB[0].innerHTML === 'O' && gameB[2].innerHTML === 'O' && gameB[1].innerHTML !== 'X' && gameB[1].innerHTML !== 'O') {
        gameB[1].innerHTML = 'O'
        gameB[1].disabled = true
    }
    else if(clicks === 4 && gameB[1].innerHTML === 'O' && gameB[2].innerHTML === 'O' && gameB[0].innerHTML !== 'X' && gameB[0].innerHTML !== 'O') {
        gameB[0].innerHTML = 'O'
        gameB[0].disabled = true
    }
    else if(clicks === 4 && gameB[0].innerHTML === 'O' && gameB[6].innerHTML === 'O' && gameB[3].innerHTML !== 'X'  && gameB[3].innerHTML !== 'O') {
        gameB[3].innerHTML = 'O'
        gameB[3].disabled = true
    }
    else if(clicks === 4 && gameB[3].innerHTML === 'O' && gameB[6].innerHTML === 'O' && gameB[0].innerHTML !== 'X'  && gameB[0].innerHTML !== 'O') {
        gameB[0].innerHTML = 'O'
        gameB[0].disabled = true
    }
    else if(clicks === 4 && gameB[0].innerHTML === 'O' && gameB[3].innerHTML === 'O' && gameB[6].innerHTML !== 'X' && gameB[6].innerHTML !== 'O') {
        gameB[6].innerHTML = 'O'
        gameB[6].disabled = true
    }
    else if(clicks === 4 && gameB[6].innerHTML === 'O' && gameB[7].innerHTML === 'O' && gameB[8].innerHTML !== 'X' && gameB[8].innerHTML !== 'O') {
        gameB[8].innerHTML = 'O'
        gameB[8].disabled = true
    }
    else if(clicks === 4 && gameB[6].innerHTML === 'O' && gameB[8].innerHTML === 'O' && gameB[7].innerHTML !== 'X' && gameB[7].innerHTML !== 'O') {
        gameB[7].innerHTML = 'O'
        gameB[7].disabled = true
    }
    else if(clicks === 4 && gameB[8].innerHTML === 'O' && gameB[7].innerHTML === 'O' && gameB[6].innerHTML !== 'X' && gameB[6].innerHTML !== 'O') {
        gameB[6].innerHTML = 'O'
        gameB[6].disabled = true
    }
    else if(clicks === 4 && gameB[2].innerHTML === 'O' && gameB[8].innerHTML === 'O' && gameB[5].innerHTML !== 'X' && gameB[5].innerHTML !== 'O') {
        gameB[5].innerHTML = 'O'
        gameB[5].disabled = true
    }
    else if(clicks === 4 && gameB[2].innerHTML === 'O' && gameB[5].innerHTML === 'O' && gameB[8].innerHTML !== 'X' && gameB[8].innerHTML !== 'O') {
        gameB[8].innerHTML = 'O'
        gameB[8].disabled = true
    }
    else if(clicks === 4 && gameB[8].innerHTML === 'O' && gameB[5].innerHTML === 'O' && gameB[2].innerHTML !== 'X' && gameB[2].innerHTML !== 'O') {
        gameB[2].innerHTML = 'O'
        gameB[2].disabled = true
    }
    else if(clicks === 4 && gameB[0].innerHTML === 'O' && gameB[8].innerHTML === 'O' && gameB[4].innerHTML !== 'X' && gameB[4].innerHTML !== 'O') {
        gameB[4].innerHTML = 'O'
        gameB[4].disabled = true
    }
    else if(clicks === 4 && gameB[0].innerHTML === 'O' && gameB[4].innerHTML === 'O' && gameB[8].innerHTML !== 'X' && gameB[8].innerHTML !== 'O') {
        gameB[8].innerHTML = 'O'
        gameB[8].disabled = true
    }
    else if(clicks === 4 && gameB[4].innerHTML === 'O' && gameB[8].innerHTML === 'O' && gameB[0].innerHTML !== 'X' && gameB[0].innerHTML !== 'O') {
        gameB[0].innerHTML = 'O'
        gameB[0].disabled = true
    }
    else if(clicks === 4 && gameB[2].innerHTML === 'O' && gameB[4].innerHTML === 'O' && gameB[6].innerHTML !== 'X' && gameB[6].innerHTML !== 'O') {
        gameB[6].innerHTML = 'O'
        gameB[6].disabled = true
    }
    else if(clicks === 4 && gameB[2].innerHTML === 'O' && gameB[6].innerHTML === 'O' && gameB[4].innerHTML !== 'X' && gameB[4].innerHTML !== 'O') {
        gameB[4].innerHTML = 'O'
        gameB[4].disabled = true
    }
    else if(clicks === 4 && gameB[6].innerHTML === 'O' && gameB[4].innerHTML === 'O' && gameB[2].innerHTML !== 'X' && gameB[2].innerHTML !== 'O') {
        gameB[2].innerHTML = 'O'
        gameB[2].disabled = true
    }
    else if(clicks === 4 && gameB[6].innerHTML === 'O' && gameB[4].innerHTML === 'O' && gameB[2].innerHTML !== 'X' && gameB[2].innerHTML !== 'O') {
        gameB[2].innerHTML = 'O'
        gameB[2].disabled = true
    }
    else if(clicks === 4 && gameB[3].innerHTML === 'O' && gameB[4].innerHTML === 'O' && gameB[5].innerHTML !== 'X' && gameB[5].innerHTML !== 'O') {
        gameB[5].innerHTML = 'O'
        gameB[5].disabled = true
    }
    else if(clicks === 4 && gameB[4].innerHTML === 'O' && gameB[5].innerHTML === 'O' && gameB[3].innerHTML !== 'X' && gameB[3].innerHTML !== 'O') {
        gameB[3].innerHTML = 'O'
        gameB[3].disabled = true
    }
    else if(clicks === 4 && gameB[3].innerHTML === 'O' && gameB[5].innerHTML === 'O' && gameB[4].innerHTML !== 'X' && gameB[4].innerHTML !== 'O') {
        gameB[4].innerHTML = 'O'
        gameB[4].disabled = true
    }
    else if(clicks === 4 && gameB[1].innerHTML === 'O' && gameB[4].innerHTML === 'O' && gameB[7].innerHTML !== 'X' && gameB[7].innerHTML !== 'O') {
        gameB[7].innerHTML = 'O'
        gameB[7].disabled = true
    }
    else if(clicks === 4 && gameB[2].innerHTML === 'O' && gameB[7].innerHTML === 'O' && gameB[4].innerHTML !== 'X' && gameB[4].innerHTML !== 'O') {
        gameB[4].innerHTML = 'O'
        gameB[4].disabled = true
    }
    else if(clicks === 4 && gameB[7].innerHTML === 'O' && gameB[4].innerHTML === 'O' && gameB[2].innerHTML !== 'X' && gameB[2].innerHTML !== 'O') {
        gameB[2].innerHTML = 'O'
        gameB[2].disabled = true
    }

    /* blocking */
    else if(clicks === 4 && gameB[0].innerHTML === "X" && gameB[1].innerHTML === "X" && gameB[2].innerHTML !== "X" && gameB[2].innerHTML !== "O") {
        gameB[2].innerHTML = "O"
        gameB[2].disabled = true
    }
    else if(clicks === 4 && gameB[0].innerHTML === "X" && gameB[2].innerHTML === "X" && gameB[1].innerHTML !== "X" && gameB[1].innerHTML !== "O") {
        gameB[1].innerHTML = "O"
        gameB[1].disabled = true
    }
    else if(clicks === 4 && gameB[1].innerHTML === "X" && gameB[2].innerHTML === "X" && gameB[0].innerHTML !== "X" && gameB[0].innerHTML !== "O") {
        gameB[0].innerHTML = "O"
        gameB[0].disabled = true
    }
    else if(clicks === 4 && gameB[0].innerHTML === "X" && gameB[3].innerHTML === "X" && gameB[6].innerHTML !== "X" && gameB[6].innerHTML !== "O") {
        gameB[6].innerHTML = "O"
        gameB[6].disabled = true
    }
    else if(clicks === 4 && gameB[0].innerHTML === "X" && gameB[6].innerHTML === "X" && gameB[3].innerHTML !== "X" && gameB[3].innerHTML !== "O") {
        gameB[3].innerHTML = "O"
        gameB[3].disabled = true
    }
    else if(clicks === 4 && gameB[3].innerHTML === "X" && gameB[6].innerHTML === "X" && gameB[0].innerHTML !== "X" && gameB[0].innerHTML !== "O") {
        gameB[0].innerHTML = "O"
        gameB[0].disabled = true
    }
    else if(clicks === 4 && gameB[6].innerHTML === "X" && gameB[7].innerHTML === "X" && gameB[8].innerHTML !== "X" && gameB[8].innerHTML !== "O") {
        gameB[8].innerHTML = "O"
        gameB[8].disabled = true
    }
    else if(clicks === 4 && gameB[6].innerHTML === "X" && gameB[8].innerHTML === "X" && gameB[7].innerHTML !== "X" && gameB[7].innerHTML !== "O") {
        gameB[7].innerHTML = "O"
        gameB[7].disabled = true
    }
    else if(clicks === 4 && gameB[7].innerHTML === "X" && gameB[8].innerHTML === "X" && gameB[6].innerHTML !== "X" && gameB[6].innerHTML !== "O") {
        gameB[6].innerHTML = "O"
        gameB[6].disabled = true
    }
    else if(clicks === 4 && gameB[2].innerHTML === "X" && gameB[5].innerHTML === "X" && gameB[8].innerHTML !== "X" && gameB[8].innerHTML !== "O") {
        gameB[8].innerHTML = "O"
        gameB[8].disabled = true
    }
    else if(clicks === 4 && gameB[2].innerHTML === "X" && gameB[8].innerHTML === "X" && gameB[5].innerHTML !== "X" && gameB[5].innerHTML !== "O") {
        gameB[5].innerHTML = "O"
        gameB[5].disabled = true
    }
    else if(clicks === 4 && gameB[5].innerHTML === "X" && gameB[8].innerHTML === "X" && gameB[2].innerHTML !== "X" && gameB[2].innerHTML !== "O") {
        gameB[2].innerHTML = "O"
        gameB[2].disabled = true
    }
    else if(clicks === 4 && gameB[0].innerHTML === "X" && gameB[4].innerHTML === "X" && gameB[8].innerHTML !== "X" && gameB[8].innerHTML !== "O") {
        gameB[8].innerHTML = "O"
        gameB[8].disabled = true
    }
    else if(clicks === 4 && gameB[0].innerHTML === "X" && gameB[8].innerHTML === "X" && gameB[4].innerHTML !== "X" && gameB[4].innerHTML !== "O") {
        gameB[4].innerHTML = "O"
        gameB[4].disabled = true
    }
    else if(clicks === 4 && gameB[4].innerHTML === "X" && gameB[8].innerHTML === "X" && gameB[0].innerHTML !== "X" && gameB[0].innerHTML !== "O") {
        gameB[0].innerHTML = "O"
        gameB[0].disabled = true
    }
    else if(clicks === 4 && gameB[2].innerHTML === "X" && gameB[4].innerHTML === "X" && gameB[6].innerHTML !== "X" && gameB[6].innerHTML !== "O") {
        gameB[6].innerHTML = "O"
        gameB[6].disabled = true
    }
    else if(clicks === 4 && gameB[2].innerHTML === "X" && gameB[6].innerHTML === "X" && gameB[4].innerHTML !== "X" && gameB[4].innerHTML !== "O") {
        gameB[4].innerHTML = "O"
        gameB[4].disabled = true
    }
    else if(clicks === 4 && gameB[4].innerHTML === "X" && gameB[6].innerHTML === "X" && gameB[2].innerHTML !== "X" && gameB[2].innerHTML !== "O") {
        gameB[2].innerHTML = "O"
        gameB[2].disabled = true
    }
    else if(clicks === 4 && gameB[3].innerHTML === "X" && gameB[4].innerHTML === "X" && gameB[5].innerHTML !== "X" && gameB[5].innerHTML !== "O") {
        gameB[5].innerHTML = "O"
        gameB[5].disabled = true
    }
    else if(clicks === 4 && gameB[3].innerHTML === "X" && gameB[5].innerHTML === "X" && gameB[4].innerHTML !== "X" && gameB[4].innerHTML !== "O") {
        gameB[4].innerHTML = "O"
        gameB[4].disabled = true
    }
    else if(clicks === 4 && gameB[4].innerHTML === "X" && gameB[5].innerHTML === "X" && gameB[3].innerHTML !== "X" && gameB[3].innerHTML !== "O") {
        gameB[3].innerHTML = "O"
        gameB[3].disabled = true
    }
    else if(clicks === 4 && gameB[1].innerHTML === "X" && gameB[4].innerHTML === "X" && gameB[7].innerHTML !== "X" && gameB[7].innerHTML !== "O") {
        gameB[7].innerHTML = "O"
        gameB[7].disabled = true
    }
    else if(clicks === 4 && gameB[1].innerHTML === "X" && gameB[7].innerHTML === "X" && gameB[4].innerHTML !== "X" && gameB[4].innerHTML !== "O") {
        gameB[4].innerHTML = "O"
        gameB[4].disabled = true
    }
    else if(clicks === 4 && gameB[4].innerHTML === "X" && gameB[7].innerHTML === "X" && gameB[1].innerHTML !== "X" && gameB[1].innerHTML !== "O") {
        gameB[1].innerHTML = "O"
        gameB[1].disabled = true
    }
    else{
        let postD  = [docP[18],docP[19]]
        let random = Math.floor(Math.random()*1)
        gameB[postD[random]].innerHTML = 'O';
        gameB[postD[random]].disabled = true;
    }

}
let Winner = document.querySelector('.Winner')
let WinnerText = document.querySelector('.Winner h3')
let restart = document.querySelector('.Restart')
let end2 = document.querySelector('.end2')

end2.addEventListener('click', ()=> {
    localStorage.removeItem('player2')
    localStorage.removeItem('playerScore2')
    localStorage.removeItem('computerScore2')
})

restart.addEventListener('click', ()=> {
    pScore = 0
    playerS.innerHTML = pScore;
    cScore = 0
    computerS.innerHTML = cScore
    formD.style.visibility = 'hidden'
    Winner.style.display = 'none';
    localStorage.setItem('playerScore2', pScore)
    localStorage.setItem('computerScore2', cScore)
})


function conclude () {
    gameB.forEach((game) => {
        game.disabled = true;
        setTimeout(() => {
            game.innerHTML = "";   
            game.disabled = false
            clicks =  0
            docP = []   
            postH1 = []  
            docH = []
            if (pScore === 10) {
                formD.style.visibility = 'visible'
                Winner.style.display = 'inline'
                WinnerText.innerHTML = `${localStorage.getItem('player2')} Wins`;
            }else if (cScore === 10) {
                formD.style.visibility = 'visible'
                Winner.style.display = 'inline';
                WinnerText.innerHTML = 'Computer Wins';
            }
            localStorage.setItem('playerScore2', pScore)
            localStorage.setItem('computerScore2', cScore)
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
let form = document.querySelector('form')
let formD = document.querySelector('.form')
let playerName = document.querySelector('.playerS h3')
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
    localStorage.removeItem('player2')
    localStorage.removeItem('playerScore2')
    localStorage.removeItem('computerScore2')
})

form.addEventListener('submit', (e)=> {
    e.preventDefault()
    localStorage.setItem('player2', `${formInput.value.charAt(0).toUpperCase()}` + formInput.value.substring(1))
    mainBody.style.visibility = 'visible';
    form.style.display = 'none';
    formD.style.visibility = 'hidden'
    playerName.innerHTML = localStorage.getItem('player2')
})

window.addEventListener('load', ()=> {
    if(localStorage.getItem('playerScore2') === null && localStorage.getItem('computerScore2') === null) {
        playerS.innerHTML = "0"
        computerS.innerHTML = '0'
    }
    else {
        computerS.innerHTML = localStorage.getItem('computerScore2');
        playerS.innerHTML = localStorage.getItem('playerScore2');
        pScore = localStorage.getItem('playerScore2')
        cScore = localStorage.getItem('computerScore2')
    }

    if(localStorage.getItem('player2') !== null) {
        mainBody.style.visibility = 'visible';
        form.style.display = 'none';
        formD.style.visibility = 'hidden'
        playerName.innerHTML = localStorage.getItem('player2')
    }
    else {
        formD.style.visibility = 'visible'
    }

    calc()
})