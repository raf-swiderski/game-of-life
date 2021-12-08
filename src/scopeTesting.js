class Scope{

    constructor() {
        let board = new Board;
        this.cells = board.cells
    }

    

    passTurn(cells) {
        var neighbours = [0]

        if (cells[12]["status"] === "on") {

            neighbours.push(1);
    

            
        }

        console.log("now we're outside of the if statement")
        console.log(neighbours)

        if (cells[12]["status"] === "on") {

            console.log("second function, adding another integer!")
            console.log(neighbours)
            neighbours.push(6);
            
            
            
        }
        console.log(neighbours)

        let neighbourhood = neighbours.reduce(function summarize(sum, number) {
            let updatedSum = sum + number;
            return updatedSum
        }, 0);


        console.log("after the reduce!")
        console.log(neighbourhood)

        
    }




}

//feature testing code

/*

let scope = new Scope;

scope.passTurn


*/