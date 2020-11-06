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
    countCarrots+= garden[start[0]][start[1]];
    garden[start[0]][start[1]] = 0;
    // set loop
    let currPos = nextMove(start,garden);

    while(currPos>=[-1,-1]){
        countCarrots+= garden[currPos[0]][currPos[1]];
        console.log('current at start of loop:', currPos);
        garden[currPos[0]][currPos[1]] = 0;
        currPos = nextMove(start, garden);
        console.log('next move position:', currPos);
        
        
    }
    

    return countCarrots;
}

function findStart(garden){
    // find the hare's start location
    let x = 0; //row index
    let y = 0; //col index
    // find "middle"
    if (garden.length%2===1) x=Math.ceil(garden.length/2); //there is a single middle of rows
    // if multiple middle, find highest value
    // Even number of rows, find most carrots 
    else {
        x=[garden.length/2, (garden.length/2) - 1];
    }
    if (garden[0].length%2===1) y=Math.ceil(garden[0].length/2); //there is a single middle of colums
    // Even number of cols, find most carrots
    else {
        y=[garden[0].length/2, (garden[0].length/2) - 1];
    }
    if(x.length === 2 || y.length === 2) {
        return findBiggest(x,y);
    }


    return garden[x][y];
}
// returns an array of coordinates
function findBiggest(row, col) {
    let maxCarrots= 0;
    let coords = [];
    for (let r = 0;r < row.length;r++) {
        for (let c = 0;c < col.length;c++) {
            console.log('r:',row[r], 'c:',col[c]);
            if(garden[row[r]][col[c]] > maxCarrots) {
                maxCarrots = garden[row[r]][col[c]];
                coords = [row[r],col[c]];
                
            }
        }
    }
    return coords;
}

// return an array of coordinates
function nextMove(current,garden){
    // Hare looks in WNES order

    // Moves to space with most carrots
    let moves = [look("W",current),
                    look("N",current),
                    look("E",current),
                    look("S",current)
                    ];
    let tempCount = 0;

    for(let i = 0;i < moves.length;i++) {
        let x = moves[i][coords[0]];
        let y = moves[i][coords[1]];
        if(moves[i]['value'] > tempCount) {
             tempCount = moves[i]['value'];
        }
    }

    // No valid next move, return -1
    if (tempCount === 0) {
        return [-1,-1];
    }

    return moves.filter(function(val) {
        val['value'] = tempCount;
    })[0]['coords'];


    
    

}

function look(direction, coords){
    // coords [x,y]
    let x = coords[0];
    let y = coords[1];
    if (direction.toUpperCase()==="W") return {'value': garden[x][y-1], 'coords': coords};
    if (direction.toUpperCase()==="N") return {'value': garden[x-1][y], 'coords': coords};
    if (direction.toUpperCase()==="E") return {'value': garden[x][y+1], 'coords': coords};
    if (direction.toUpperCase()==="S") return {'value': garden[x+1][y], 'coords': coords};
    else console.warn("Look function was not given a valid direction.");
}

function mostCarrots(spaces){
    // given a number of spaces,
}
