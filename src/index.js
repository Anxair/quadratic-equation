module.exports = function solveEquation(equation) {
    let signArray = equation.split(' ');
    let a = signArray[0];
    let b = signArray[4];
    if (signArray[3] === '-') b = -b;
    let c = signArray[8];
    if (signArray[7] === '-') c = -c;
    console.log(a, b, c);
    let x1 = Math.round((-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a));
    let x2 = Math.round((-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a));
    let answer = [x1, x2];

    function compareNum(a, b) {
        if (a > b) return 1;
        if (a < b) return -1;
    }

    return answer.sort(compareNum);
}
