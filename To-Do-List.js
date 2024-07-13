const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

function showTodoList() {
    let todolistHTML = '';

    for(i = 0; i < todoList.length; i++) {
        const todoObject =  todoList[i];
        const {name, date} = todoObject;
        const html = `
        <div>${name}</div>
        <div>${date}</div>
        <button onclick="
            todoList.splice(${i}, 1);
            showTodoList();
            localStorage.setItem('todoList', JSON.stringify(todoList));
        " class="delete-buttons">Delete</button>
        `;
        todolistHTML += html;
    }

    document.querySelector('.js-todo-list').innerHTML = todolistHTML;
}

function addTodo() {
    const inputElem = document.querySelector('.js-add-button');
    const name = inputElem.value;

    const dateinput = document.querySelector('.js-date-input');
    const date = dateinput.value;


    todoList.push({
        name,
        date
    });

    localStorage.setItem('todoList', JSON.stringify(todoList));

    inputElem.value = ''

    showTodoList();
}
