let cell1 = {
  alive: true,
  neighbor: 3,
};
let cell2 = {
  alive: true,
  neighbor: 1,
};
let cell3 = {
  alive: true,
  neighbor: 4,
};
let cell4 = {
  alive: true,
  neighbor: 2,
};
let cell5 = {
  alive: false,
  neighbor: 3,
};
let cell6 = {
  alive: false,
  neighbor: 2,
};

function simulateLife(cell) {
  if (cell.alive == false) {
    if (cell.neighbor != 3) {
      return false;
    }
    return true;
  }
  if (cell.neighbor < 2 || cell.neighbor > 3) {
    return false;
  } else {
    return true;
  }
}

describe("simulateLife", () => {
  test("cell1 should be alive because has 3 neighbours", () => {
    const result = simulateLife(cell1);
    expect(result).toBe(true);
  });

  test("cell2 should be dead because has 1 neighbours", () => {
    const result = simulateLife(cell2);
    expect(result).toBe(false);
  });

  test("cell3 should be dead because has 4 neighbours", () => {
    const result = simulateLife(cell3);
    expect(result).toBe(false);
  });

  test("cell4 should be alive because has 2 neighbours", () => {
    const result = simulateLife(cell4);
    expect(result).toBe(true);
  });
  test("cell5 should be alive because has 3 neighbours", () => {
    const result = simulateLife(cell5);
    expect(result).toBe(true);
  });
  test("cell6 should be alive because has 2 neighbours", () => {
    const result = simulateLife(cell6);
    expect(result).toBe(false);
  });
});
