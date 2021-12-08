class Game {
    constructor() {
      let board = new Board;

      this.turn = 0;
      this.cells = board.cells
    }

    parameters(cells) {
      this.cells = cells;
    }



    passTurn(cells) {
      for (let i = 0; i < cells.length; i++) {
        
        //checking the neighbours

        if (cells[i]["status"] === "on") {
          //testing #12
          var neighbours = [];

 
          //#1
          if (cells[i - 11]["status"] === "on") {
            console.log('this is test 1')
            neighbours.push(1);
          }

          if (cells[i - 10]["status"] === "on") {
            neighbours.push(1);
          }
          if (cells[i - 9]["status"] === "on") {
            neighbours.push(1);
          }
          if (cells[i - 1]["status"] === "on") {
            neighbours.push(1);
          }
          if (cells[i + 1]["status"] === "on") {
            neighbours.push(1);
          }
          if (cells[i + 9]["status"] === "on") {
            neighbours.push(1);
          }
          if (cells[i + 10]["status"] === "on") {
            neighbours.push(1);
          }
          if (cells[i + 11]["status"] === "on") {
            neighbours.push(1);
          }

          console.log(neighbours)
          
          let neighbourhood = neighbours.reduce(function summarize(sum, number) {
            let updatedSum = sum + number;
            return updatedSum
          }, 0);
          
          console.log("here's the neighbourhood:")
          console.log(neighbourhood)


          if (neighbourhood === 0) {
            cells[i]["status"] = "off";
          }
        }
      }


        /*
      cells.forEach((cell, index) => 
      
      console.log(cell['status'])
    
      // if (cell["status"] === "on") {
    
      //   cell['status'] = "off"
      // } 


      );
      */
    }

}
