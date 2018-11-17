describe("Game of Life", function() {
    it("says game of life", function() {
        expect(gameOfLife()).toEqual("Game of life!");
    });
});


describe("Rule 4 - 3 neighbours life, regenerate to life", function(){
 it("cell dead, 3 neighbours", function(){
    let CellAlive = false;
    let numNeighboursAlive = 3;
    expect(willThisCellBeAlive(CellAlive,numNeighboursAlive)).toEqual(true)

 });
 it("cell dead, 2 neighbours", function(){
    let CellAlive = false;
    let numNeighboursAlive = 2;
    expect(willThisCellBeAlive(CellAlive,numNeighboursAlive)).toEqual(false)

 });
 it("cell dead, 4 neighbours", function(){
    let CellAlive = false;
    let numNeighboursAlive = 2;
    expect(willThisCellBeAlive(CellAlive,numNeighboursAlive)).toEqual(false)

 });
});


