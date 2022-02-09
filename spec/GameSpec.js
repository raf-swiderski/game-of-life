describe("game", function() {

    // beforeEach(function(){
        
    // });

    // it("should have a default turn value of 0", function() { 
    //     expect(game.turn).toEqual(0);
    // })

    // it("should create the details of the game cells", function() { 
    //     expect(game.cells[0]).toEqual({ "id": "0", "status": "off" });
    // })

    // it("has a function that can lets the user edit the status, before the first turn", function() {
    //     let myParams = game.cells;
    //     myParams[0] = { "id": "0", "status": "on" }
    //     myParams[2] = { "id": "2", "status": "on" }
        
    //     game.parameters(myParams)
    //     expect(game.cells[0]).toEqual({ "id": "0", "status": "on" });
    //     expect(game.cells[2]).toEqual({ "id": "2", "status": "on" });
        
    // })

    //cell logic:

    //edge cases

    // // cells with 3 neighbours instead of 9
    
    it("kills cell 0 if its 3 neighbours (1, 10, 11) are not live", function() { 

        var game = new Game();

        // console.log(myParams)


        game.cells[0]["status"] = "on"
        
        console.log(game.cells)
        game.passTurn(game.cells)

        expect(game.cells[0]).toEqual({ id: "0", status: "off" });


    })






    // it("kills cell 9 if its 3 neighbours (8, 18, 19) are not live", function() { 
    //     let myParams = game.cells;
    //     myParams[9] = { "id": "9", "status": "on" }
    //     game.parameters(myParams)
    //     game.passTurn(game.cells)
    //     expect(game.cells[9]).toEqual({ "id": "9", "status": "off" });
    // })


    // it("kills cell 90 if its 3 neighbours (80, 81, 91) are not live", function() { 
    //     let myParams = game.cells;
    //     myParams[90] = { "id": "90", "status": "on" }
    //     game.parameters(myParams)
    //     game.passTurn(game.cells)
    //     expect(game.cells[90]).toEqual({ "id": "90", "status": "off" });
    // })
    // it("kills cell 99 if its 3 neighbours (98, 88, 89) are not live", function() { 
    //     let myParams = game.cells;
    //     myParams[99] = { "id": "99", "status": "on" }
    //     game.parameters(myParams)
    //     game.passTurn(game.cells)
    //     expect(game.cells[99]).toEqual({ "id": "99", "status": "off" });
    // })


    // Any live cell with less than 2 live neighbours dies (underpopulation)


    // it("kills a cell if it has no live neighbours", function() { 
    //     let myParams = game.cells;
    //     myParams[12] = { "id": "12", "status": "on" }
    //     game.parameters(myParams)
    //     game.passTurn(game.cells)
    //     expect(game.cells[12]).toEqual({ "id": "12", "status": "off" });
    // })
    
    // it("any live cell with 2 or 3 live neighbours survives until next tick", function() { 
    //     let myParams = game.cells;
    //     myParams[22] = { "id": "22", "status": "on" }
    //     myParams[11] = { "id": "11", "status": "on" }
    //     myParams[12] = { "id": "12", "status": "on" }
    //     myParams[13] = { "id": "13", "status": "on" }
    //     game.parameters(myParams)
    //     game.passTurn(game.cells)
    //     expect(game.cells[12]).toEqual({ "id": "12", "status": "on" });
    // })



    
});