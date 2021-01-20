var one = [10, 20, 4, 40, 60, 70]

var two = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

var three = two.concat(one)
var four = three.filter((item, pos) => three.indexOf(item) === pos)

document.write(four)