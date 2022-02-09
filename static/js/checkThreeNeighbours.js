function threeNeighbourLogic(cells, cell, One, Two, Three) {

  var neighbours = [0];
  var cells = cells;

  if (cells[cell]["status"] === "on") {
    
    if (cells[One]["status"] === "on") {
      neighbours.push(1);
    }
    if (cells[Two]["status"] === "on") {
      neighbours.push(1);
    }
    if (cells[Three]["status"] === "on") {
      neighbours.push(1);
    }

    let neighbourhood = customReducer(neighbours);

    if (neighbourhood === 0) {
      cells[cell]["status"] = "off";
    } 

    return cells
  }  
}

function checkThreeNeighbours(id, cells) {
    

  if (id === 0) {
    cells = threeNeighbourLogic(cells, id, 1, 10, 11);
  } else if (id === 9) {
    cells = threeNeighbourLogic(cells, id, 8, 18, 19);
  } else if (id === 90) {
    cells = threeNeighbourLogic(cells, id, 80, 81, 91);
  } else if (id === 99) {
    cells = threeNeighbourLogic(cells, id, 98, 88, 89);
  } else {
    return cells
  }

  return cells

}