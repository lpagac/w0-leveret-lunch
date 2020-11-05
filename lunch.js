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
    // set loop
    while(nextMove()>=[-1,-1]){
        moveBun(nextMove())
    }
    // nextMove

    return countCarrots;
}

function findStart(garden){
    // find the hare's start location
    let x = 0; //row index
    let y = 0; //col index
    // find "middle"
    if (garden.length%2===1) x=Math.ceil(garden.length/2); //there is a single middle of rows
    // if multiple middle, find highest value
    else // Even number of rows, find most carrots
    if (garden[0].length%2===1) y=Math.ceil(garden[0].length/2); //there is a single middle of colums
    else // Even number of cols, find most carrots

    return garden[x][y];
}
function nextMove(current,garden){
    // Hare looks in WNES order

    // Moves to space with most carrots
    let largest = { "W":look("W",current, garden),
                    "N":look("N",current, garden),
                    "E":look("E",current, garden),
                    "S":look("S",current, garden)
                }


    return indexOf(largest);
    // No valid next move, return -1
    else{
        return [-1,-1];
    }
}

function look(direction, coords, garden){
    // coords [x,y]
    let x = coords[0];
    let y = coords[1];
    if (direction.toUpperCase()==="W") return garden[x][y-1];
    if (direction.toUpperCase()==="N") return garden[x-1][y];
    if (direction.toUpperCase()==="E") return garden[x][y+1];
    if (direction.toUpperCase()==="S") return garden[x+1][y];
    else console.warn("Look function was not given a valid direction.");
}

function mostCarrots(spaces){
    // given a number of spaces,
}
