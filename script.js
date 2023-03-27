const form = document.querySelector('form');
const input = document.querySelector('#new-todo');
const ul = document.querySelector('#todo-list');

form.addEventListener('submit', e => {
    e.preventDefault();

    if (input.value === "") {
        alert ("Please write your todo");
        return;
    }

    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    deleteButton.innerText = "X";
    deleteButton.addEventListener('click', () => {
        ul.removeChild(li);
    });

    li.innerHTML = input.value;
    li.appendChild(deleteButton);
    ul.appendChild(li);
    input.value = "";
});
