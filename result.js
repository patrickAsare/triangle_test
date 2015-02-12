function routes (x) {
    var t = x.length, tforbinaries = t - 1, pow = Math.pow(t, 2), i, max, b, i2, max2, nbSplit, nb, sums, sumHolder = [], curPos, sumResult, sumResultHolder = [], rightAnswer, lowestIndex = 0;
    for (i = 0, max = pow; i < max; i += 1) {
        b = i.toString(2);
        if (b.length < tforbinaries) {
            nb = Array((tforbinaries - b.length) + 1).join("0") + b;
        } else if (b.length === tforbinaries) {
            nb = b;
        } else if (b.length > tforbinaries) {
            nb = b.slice(Math.abs(tforbinaries) * -1);
        }
        nbSplit = nb.split(''); curPos = 0; sums = []; sums.push(x[0][0]); sumResult = x[0][0]; //push root val
        for (i2 = 0, max2 = nbSplit.length; i2 < max2; i2 += 1) {
            if (nbSplit[i2] === '0') { //turn left, //no new curPos
            } else if (nbSplit[i2] === '1') { //turn right
                curPos += 1; //increment curPos
            }
            sums.push(x[i2+1][curPos]); sumResult += x[i2+1][curPos];
        }
        sumHolder.push(sums); sumResultHolder.push(sumResult);
        if (sumResult < sumResultHolder[lowestIndex]) { lowestIndex = i; }
    }
    return [sumHolder[lowestIndex], sumResultHolder[lowestIndex]];
}
var triangle = [ [2], [3,4], [6,5,7], [4,1,8,3] ];
var triangle1 = [ [1], [4,3], [8,2,6], [2,3,9,7] ];
var triangle2 = [ [3], [6,4], [3,4,7], [3,8,3,6] ];
var triangle3 = [ [2], [9,6], [4,5,8], [1,2,3,6] ];
var triangle5 = [[2], [3,4], [6,5,7], [4,1,2,3], [4,2,8,1,2],[5,4,8,7,3,2]];
var triangle6 = [[2], [3, 4], [6, 5, 7], [4, 1, 2, 3], [4, 2, 2, 1, 2], [5, 4, 8, 4, 3, 2], [6, 5, 9, 1, 4, 3, 2]];
console.log(routes(triangle));
console.log(routes(triangle1));
console.log(routes(triangle2));
console.log(routes(triangle3));
console.log(routes(triangle5));
console.log(routes(triangle6));
/*
JS notes
JS breaks when you try to read an array prop that doesn't exist. Not gracefully either.
No graceful string formatting for binaries
Strange ways to return min array val and no func to help you out?
limitations forces you to think however php/ruby 10 times better
*/
