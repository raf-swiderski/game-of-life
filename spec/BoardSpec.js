describe("Player", function() {

    it ("should have a default turn value of 0", function() {
        var board;
        board = new Board();
        expect(board.turn).toEqual(0);
    })

});