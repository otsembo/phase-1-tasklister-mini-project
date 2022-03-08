document.addEventListener("DOMContentLoaded", () => {
  // your code here

    const dom = document;
    //form handler
    let todoForm = dom.getElementById("create-task-form");
    todoForm.addEventListener('submit', (event)=>{
        event.preventDefault();
        //to-do task
        let toDO = dom.getElementById('new-task-description').value;
        if(toDO === ''){
            alert("You can not have a blank task");
        }else{
            let todoList = dom.getElementById('tasks');
            const liTodo = dom.createElement('li');
            liTodo.textContent = toDO;
            todoList.append(liTodo);
        }
    })


});
