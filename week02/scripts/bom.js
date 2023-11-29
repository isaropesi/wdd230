const input = document.querySelector('#favchap');
const addButton = document.querySelector('button');
const list = document.querySelector('#list');
const errorMessage = document.querySelector('.error-message');

addButton.addEventListener('click', () => {
    if (input.value != '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);

        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            input.focus();
        });

        input.value = '';
        return;
    }

    input.focus()
    input.classList.add('error')
    errorMessage.textContent = 'Please, enter a chapter!'
});


input.addEventListener('input', () => {
    input.classList.remove('error')
    errorMessage.textContent = ""
})

