var groceryList= ["Bananas" , "Milk" , "Eggs" , "Bacon"];
var message="Please pick up the following from the store: ";
for(var i = 0; i < groceryList.length; i++){
    message = message + groceryList[i];
    if (i<3){
        message = message + ", ";
    }
 }
console.log (message)