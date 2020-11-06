/** lunchCount: return # of carrots eaten
 *
 * params:
 * - garden: matrix of carrot counts
 *
 * returns: # of carrots
 */
function lunchCount(garden) {
    let countCarrots = 0;
    // returns # carrots
    console.log(garden);
    let start = findStart(garden);
    console.log("Start:",start);
    countCarrots+= garden[start[0]][start[1]];
    garden[start[0]][start[1]] = 0;
    // set loop
    let currPos = nextMove(start,garden);

    while(currPos[0]>-1){
        console.log("currpos",currPos);
        // console.debug('current at start of loop:', currPos);
        countCarrots+= garden[currPos[0]][currPos[1]];
        garden[currPos[0]][currPos[1]] = 0;
        currPos = nextMove(currPos, garden);
        // console.log('next move position:', currPos);
    }
    return countCarrots;
}

function findStart(garden){
    // find the hare's start location
    let x = 0; //row index
    let y = 0; //col index
    // find "middle"
    if (garden.length%2===1) {
        // console.log("x=Math.ceil(garden.length/2);",Math.floor(garden.length/2))
        x=Math.floor(garden.length/2); //there is a single middle of rows
    }
    // if multiple middle, find highest value
    // Even number of rows, find most carrots
    else {
        x=[(garden.length/2) - 1, garden.length/2 ];
    }
    if (garden[0].length%2===1){
        // console.log("y=Math.ceil(garden[0].length/2);",Math.floor(garden[0].length/2));
        y=Math.floor(garden[0].length/2);
        //there is a single middle of colums
    }
    // Even number of cols, find most carrots
    else {
        y=[(garden[0].length/2) - 1, garden[0].length/2];
    }
    // console.log("start:",x,y)
    if(x.length === 2 || y.length === 2) {
        // console.log("Find biggest:")
        if(!Array.isArray(x)) x = [x];
        if(!Array.isArray(y)) y = [y];
        return findBiggest(x,y);
    }
    return [x, y];
}
// returns an array of coordinates
function findBiggest(row, col) {
    let maxCarrots= -1;
    let coords = [-1,-1];
    for (let r = 0;r < row.length;r++) {
        // console.log('r:',row[r], 'c:',col);
        for (let c = 0;c < col.length;c++) {
            // console.log('r:',row[r], 'c:',col[c]);
            if(garden[row[r]][col[c]] > maxCarrots) {
                maxCarrots = garden[row[r]][col[c]];
                coords = [row[r],col[c]];
            }
        }
    }
    // console.log("coords",coords);
    return coords;
}

// return an array of coordinates
function nextMove(current,garden){
    // Hare looks in WNES order
    // Moves to space with most carrots
    let moves = [look("W",current),
                 look("N",current),
                 look("E",current),
                 look("S",current)];
    let tempCount = 0;
    let x = -1;
    let y = -1;
    for(let i = 0;i < moves.length;i++) {
        let move = moves[i];
        // console.debug("move",move);
        if(move['value']>0 && move['value']>tempCount){
            x = move['coords'][0];
            y = move['coords'][1];
            tempCount = move['value']
        }
    }
    // No valid next move, return -1
    if (tempCount <= 0) {
        console.warn("Returnng -1,-1");
        return [-1,-1];
    }
    return [x,y];
}

function look(direction, coords){
    // coords [x,y]
    let x = coords[0];
    let y = coords[1];
    if ((direction.toUpperCase()==="W") && y-1>=0) return {'value': garden[x][y-1], 'coords': [x,y-1]};
    if ((direction.toUpperCase()==="N") && x-1>=0) return {'value': garden[x-1][y], 'coords': [x-1,y]};
    if ((direction.toUpperCase()==="E") && y+1<garden[x].length) return {'value': garden[x][y+1], 'coords': [x,y+1]};
    if ((direction.toUpperCase()==="S") && x+1<garden.length) return {'value': garden[x+1][y], 'coords': [x+1, y]};
    else{
        console.debug("Can't look in this direction:", direction, x,y);
        return {'value': -1, 'coords': [-1,-1]};
    }
}
