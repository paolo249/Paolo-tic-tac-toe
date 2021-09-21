/*----- constants -----*/
const stringLookup ={
     '0': null,
     '1':  'blue', 
    '-1': 'red'

};


/*----- app's state (variables) -----*/
let board;    
let turn;     // 1 or -1 
let winner;  // null = no winner; 1 or -1 if there's a winner; 'tie' = tie


/*----- cached element references -----*/
//creates a nodeList [0 1 2 3 4 5 6 7 8] from the board > div
const boardEls = [...document.querySelectorAll('#board > div')];
const btnEl=document.getElementById('button');
const msgEl = document.querySelector('h1');

/*----- event listeners -----*/
document.getElementById('board').addEventListener('click',handleDrop);
//btnEl.addEventListener('click',init);

/*----- functions -----*/
// call functions
init();

function init(){ 
    turn = 1; //return true 
    winner = null; 
    board =
    [
        0,0,0,   // col 0
        0,0,0,   // col 1
        0,0,0,   // col 2
    ];

   render();
     }



function render(){
   renderBoard();
   renderMsg();
     }


function handleDrop(evt){
        const idx = boardEls.indexOf(evt.target);
        //console.log(idx);
        //const arr = board[idx];
        board[idx] = turn;
        turn = turn*-1;
        winner = winConditions(idx);
        render();
    }

function renderBoard(){
        board.forEach(function(arr,idx) {
        const cellDiv = document.getElementById(`${idx}`);
        cellDiv.style.backgroundColor = stringLookup[board[idx]];
        });}

function renderMsg(){
    if(winner) msgEl.innerHTML = `<span style= "color:${stringLookup[winner]}">${stringLookup[winner].toUpperCase()} Wins!</span> `; 
    else msgEl.innerHTML = `<span style = "color:${stringLookup[turn]}">${stringLookup[turn].toUpperCase()}'s turn</span>`;
    }
//// /////////////////////////////// WIN FUNCTIONS ///////////////////////////////////////////////////////////////////

    function winConditions(idx){
      

        const cell = board[idx];
          let count = 0;
          let index = idx + 1; 
         //check right
          while(idx < 8 && board[index] === cell){
             count++;
             index++;
          }
         //check left
          index = idx - 1;
          while(idx >=0 && board[index] === cell){
            count++;
            index--;
          }
          return count >= 2 ? cell : null;
      }
    






      
/////////////////////////////// HORIZ WIN FUNCTION ///////////////////////////////////////////////////////////////////
// function checkHorWin(idx){
  
//  const cell = board[idx];
//    let count = 1;
//    for(let i =0; i <= cell.length; i++){
//        if(cell = '1' )
//         if(Math.abs(cell === 3))
//         { 
            
//         }
//     //if(idx === '1' && idx === '2' && idx === '3'){
//          // console.log('winner');
//        // return count >= 3 ?cell : null;
//      }
//      console.log(count);
   




     //check to see if player '1' is chosen
   //count number of times 1 has been chosen
   // verify with detailed ttt win conditions

 /////////////////////////////// VERT WIN FUNCTION ///////////////////////////////////////////////////////////////////
// function checkVertWin(idx){
//   const cell = board[idx];
//   let count = 0; 
//   let index = idx + 1;
//  //[0,3,6] && [1,4,7] && [2,5,8]
//  //check up
//  while()



//   //check down




// }
