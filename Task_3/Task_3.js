var color = ['Red', 'Yellow', 'Blue','Green']
document.write(color + '<br>')

var color1 = prompt('Enter color you want add to the beginning')
color.unshift(color1)
document.write(color + '<br>')


var color1 = prompt('Enter color you want add to the end')
color.push(color1)
document.write(color + '<br>')


var color1 = prompt('Enter your two more color you want add to the beginning')
var color2 = prompt('Enter your two more color you want add to the beginning')
color.unshift(color1,color2)
document.write(color + '<br>')

color.shift(color)
document.write(color + '<br>')

color.pop(color)
document.write(color + '<br>')

var color1 = prompt('Enter your index where you want to add')
var Yourcolor2 = prompt('Enter your color to add')

color.splice(color1,0,Yourcolor2)

document.write(color + '<br>')


var color1 = prompt('Enter your index which you want to delete')
var Yourcolor2 = prompt('How many colors you want to delete')

color.splice(color1,Yourcolor2)

document.write(color)