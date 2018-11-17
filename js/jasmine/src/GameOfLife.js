function gameOfLife() {
    return "Game of life!";
}

function willThisCellBeAlive(CellAlive,numNeighboursAlive){
    let state = false
    if (CellAlive) {

    } else{
       // cell is dead
       if (numNeighboursAlive==3)
       state = true;
      
    }


  return state;  
}

