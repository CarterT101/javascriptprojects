
// gets task from input
function get_todos() {
    //creates array of tasks that are inputted 
    var todos = new Array;
    //pulls task that was saved in web browser memory
    var todos_str = localStorage.getItem('todo');   //sets todos_str equal to 'todo' which is stored inside local memory  
    //if input is not null then JSON.parse will communicate with web browser to make the task a JS object
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

//function adds inputed task to the get_todos function array
function add() {
    //takes inputed task and creates variable of it
    var task = document.getElementById("task").value;   // GRABS TASK, sets equal to task variable

    var todos = get_todos(); 
    //adds a new task to end of the array
    todos.push(task);                                   //pushes task variable to todos variable, which pushes it to get_todos function 
    //converts task input to JSON string                //which adds it to the array
    localStorage.setItem('todo', JSON.stringify(todos)); //strings todos variable to string under 'todo' 
    document.getElementById("task").value = "";         
    show();

    return false;
}

//keeps tasks permanently displayed on screen

function show() {

    //sets task that was retrieved as a variable
    var todos = get_todos();
    //sets up each task as unordered list
    var html = '<ul>';                                           //creates variable
    //display a task to the list in order that it is inputed
    for (var i = 0; i < todos.length; i++) {                                //sets iteration (i) equal to 0, checks if it is less then todos variable
        //displays the task as a list and creates button with the 'x'       // length, and after function is done, it adds 1 to the iteration. Makes sure it prints all of the TODOs
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';    //makes HTML content to be printed in LIST form, creates X button. 
    };
    html += '</ul>'; //after all TODOs are printed, ends list.
    //displays the task as a list
    document.getElementById('todos').innerHTML = html; 

    //tells browser how to display the todo array after item has been removed
    var buttons = document.getElementsByClassName('remove');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}

//displays inputed task when the 'Add Item' button is clicked
document.getElementById('add').addEventListener('click', add);
//keep the inputs displayed on the screen
show();


//removes todo item from array
function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id,1); //splice removes, or modifies array elements
    localStorage.setItem('todo', JSON.stringify(todos));
    //how to display a removed item on the screen
    show();

    return false;
}

