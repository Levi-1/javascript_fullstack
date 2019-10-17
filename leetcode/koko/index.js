/**
 * @param{array} piles
 * @param{int} H
 * @return{int} low
 * @function  求最慢速度
 */

const minEatingSpeed = (piles, H) => {
    let low = 1;
    let high = 0;
    high = Math.max(...piles);// ...展开运算符
    let middle;
    while (high >= low) {
        middle = (low + high) >> 1
        console.log(low, middle, high);
        if (canFinish(middle, H, piles)) {
            high = middle - 1;
        }
        else {
            low = middle + 1;
        }
    }
  
    return middle;

}

const canFinish = (middle, H, piles) => {
    let sum = 0;
    for (pile of piles) {
        sum += Math.ceil(pile/ middle);
    }
    return sum <= H;

}

minEatingSpeed([1, 2, 5, 8, 11], 8);


// low    middle      high
// 1         6          11
// 1         3          5
// 4         4          5
// 5         5          5
// 5         5未再次运算 4   