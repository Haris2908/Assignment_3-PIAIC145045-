var B = ['Cake', 'Apple pie', 'Cookies', 'Chips', 'Patties']

var user = prompt("Welcome to ABC Bakery.What do you want to order sir/ma'am?")

for(var i = 0 ; i <= B.length ; i++){
    if(user === B[i]){
        document.write(`<b> ${user} </b> is available at index <b>${i}</b> in our Bakery`)

        break;
    }
}
if(user !== B[i]){
    document.write(`We are sorry <b> ${user}</b> is not avaiable in our Bakery`)
}