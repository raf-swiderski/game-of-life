class Board {
    constructor() {
      this.turn = 0;
      this.cells = [{ id: "a1", status: "off" },
      { id: "a2", status: "off" },
      { id: "a3", status: "off" }]
    }

    parameters(cells) {
      cells.forEach((x, i) => this.cells[i] = x);
    }
}
