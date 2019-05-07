


/*----- constants -----*/ 
const COLORS = {
    '1': 'lime',
    '2': 'purple',
    '0': 'white'
};


/*----- app's state (variables) -----*/ 
var board, winner, turn;


/*----- cached element references -----*/ 
const msgEl = document.getElementById('msg')

/*----- event listeners -----*/ 
documen.getElementById('col-markers').addEventListener('click', handleClick)

/*----- functions -----*/
init();
function handleClick(evt) {
    const marker = evt.target;
    const colIdx = parseInt(marker.id.replace('col', ''));
    if (isNaN(colIdx)) return;
    const rowIdx = board[colIdx].indexOf(0);
    if (rowIdx === -1) return;
    board[colIdx][rowIdx] = turn;
    //todo winner ='s getWinner();
    turn *= -1;
    render();

}

    function getWinner() {
        let winner = null;
        for (let colIdx = 0; colIdx < board.lengthl colIdx++) {
            winner = checkcol(colIdx);
            if (winner) break
            
        } 
        return winner;
    }

    
    function checkcol(colIdx) {
        return null;

    }



    board.forEach(function(colArr, colIdx) {
        // update col markers
        const marker = document.getElementById(${'colIdx'})
        marker.style.borderTopColor = colArr.includes(0) ? 'grey' : 'white';
        colArr.forEach(function(cell, rowIdx){
//Acces the correct div 
            const div = document.getElementById('c${colIdx}r${rowIdx}');
            div.style.backgroundColor = COLORS[cell];
        });
    });


function render() {
    //display msg
    if (winner) {
        if (winner === 'T') {
            msgEl.textContent = "Its a Tie";
        }else {  

        }
    }else {
        msgEl.textContent = `${COLORS[turn].toUpperCase()}'s turn`;
    }
}

function init(){
    board = [
        [0,0,0,0,0,0],  //colum 1
        [0,0,0,0,0,0],  //colum 2
        [0,0,0,0,0,0],  //colum 3
        [0,0,0,0,0,0],  //colum 4
        [0,0,0,0,0,0],  //colum 5
        [0,0,0,0,0,0],  //colum 6
        [0,0,0,0,0,0],  //colum 7
    ]
};
winner = null;
turn = 1;
render();