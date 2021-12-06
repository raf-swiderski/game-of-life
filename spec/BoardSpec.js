describe("Board", function() {

    beforeEach(function(){
        board = new Board();
    });

    it("should have a default turn value of 0", function() { 
        expect(board.turn).toEqual(0);
    })

    it("should create the details of the board cells", function() { 
        expect(board.cells).toEqual([
            { id: "a1", status: "off" },
            { id: "a2", status: "off" },
            { id: "a3", status: "off" }

        ]);
    })

    it("has a function that can lets the user edit the status, before the first turn", function() {
        board.parameters([
            { id: "a1", status: "on" },
            { id: "a2", status: "off" },
            { id: "a3", status: "on" }

        ])
        expect(board.cells).toEqual([
            { id: "a1", status: "on" },
            { id: "a2", status: "off" },
            { id: "a3", status: "on" }

        ]);
        
    })
});