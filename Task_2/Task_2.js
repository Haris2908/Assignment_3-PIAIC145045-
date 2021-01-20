var Student = ['Michael','John','Tony']
var studentMarks = [320,230,480]
var Totalmarks = 500;

var percentage1 = (studentMarks[0] / Totalmarks) * 100;
var percentage2 = (studentMarks[1] / Totalmarks) * 100;
var percentage3 = (studentMarks[2] / Totalmarks) * 100;

document.write(`Score of ${Student[0]} is ${studentMarks[0]}. Percentage: ${percentage1}% <br>`)
document.write(`Score of ${Student[1]} is ${studentMarks[1]}. Percentage: ${percentage2}% <br>`)
document.write(`Score of ${Student[2]} is ${studentMarks[2]}. Percentage: ${percentage3}%`)