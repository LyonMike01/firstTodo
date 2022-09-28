
var todos = ["Wake Up From Bed", "Brush Teeth"];
var input = prompt ("What do you want to to?");

while (input !== "quit") {
        if (input === "list") {
            console.log(todos)
        } else if (input === "new") {
            var newTodo = prompt ("What do you want to to add");
            todos.push(newTodo);
        } else if (input === "delete") {
            var remove = prompt ("Input the Index Number");
            todos.splice(remove, 1);
        }

    var input = prompt ("What do you want to to?");
}
console.log("You don Quit the App nah");