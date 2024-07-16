const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

function showTodoList() {
    let todolistHTML = '';

    todoList.forEach((todoObject, index) => {
        const {name, date} = todoObject;
        const html = `
        <div>${name}</div>
        <div>${date}</div>
        <button class="delete-buttons js-delete-buttons">
            Delete</button>
        `;
        todolistHTML += html;
    });

    document.querySelector('.js-todo-list').innerHTML = todolistHTML;

    document.querySelectorAll('.js-delete-buttons')
        .forEach((deletButton, index) => {
            deletButton.addEventListener('click', () => {
                todoList.splice(index, 1);
                showTodoList();
                localStorage.setItem('todoList', JSON.stringify(todoList));
            });
        });
}

document.querySelector('.js-add-button')
    .addEventListener('click', () => {
        addTodo();
    });

function addTodo() {
    const inputElem = document.querySelector('.js-todoname');
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
