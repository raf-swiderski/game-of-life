describe("game", function() {

    beforeEach(function(){
        game = new Game();
    });

    it("should have a default turn value of 0", function() { 
        expect(game.turn).toEqual(0);
    })

    it("should create the details of the game cells", function() { 
        expect(game.cells[0]).toEqual({ "id": "a1", "status": "off" });
    })

    it("has a function that can lets the user edit the status, before the first turn", function() {
        let myParams = game.cells;
        myParams[0] = { "id": "a1", "status": "on" }
        myParams[2] = { "id": "a1", "status": "on" }
        
        game.parameters(myParams)
        expect(game.cells[0]).toEqual({ "id": "a1", "status": "on" });
        expect(game.cells[2]).toEqual({ "id": "a1", "status": "on" });
        
    })

    //cell logic:

    //Any live cell with less than 2 live neighbours dies (underpopulation)

    it("kills a cell if it has no live neighbours", function() { 
        let myParams = game.cells;
        myParams[12] = { "id": "a1", "status": "on" }
        game.parameters(myParams)
        game.passTurn(game.cells);
        expect(game.cells[12]).toEqual({ "id": "a1", "status": "off" });
    })

    
});