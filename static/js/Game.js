function gameTest() {
  var game = new Game
  


  
  const div1 = document.getElementById("div1")
  div1.innerHTML = JSON.stringify(game.cells)

}

class Game {
  constructor() {
    let board = new Board;

    this.turn = 0;
    this.cells = board.cells
  }

  parameters(myParams) {
    console.log("myParams in the parameter function")
    console.log(myParams)
    this.cells = myParams;
  }

  passTurn(cells) {
    
    //functions that checks the neighbours then returns the amount of neighbours - because the rules are the same for each cell. 
    // var cells = cells;

    // for (let i = 0; i < cells.length; i++) {}
      
    console.log(this.cells)
    let cell = new Cell(0);
    this.cells[0] = cell.calculateNeighbourhood(cells);
    
    
    console.log("cells after the calculation of neighbours")
      
    

  }
}
