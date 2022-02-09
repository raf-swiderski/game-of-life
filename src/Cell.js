class Cell {
    constructor(id) {
        this.id = id
        this.live = false
        this.neighbours = [0]
        // console.log(this.id)
    }

    calculateNeighbourhood(cells) {

        // console.log("the cells before the method:") 
        // console.log(cells) 

        
        let newCells = checkThreeNeighbours(this.id, cells);
        

        // console.log("printing all the new cells")        
        // console.log(newCells)        
        
        let newCell = newCells[this.id]
        

        return newCell //returning the new object

    }

}



