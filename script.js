
const refs = {
    checkbox: document.querySelector("input[name='confirm']"),
    addBtn: document.querySelector("button[type='submit']"),
    input: document.querySelector("input[name='todoInput']"),
    form: document.querySelector('form'),
    list: document.querySelector('ol'),
};

const onButtonClick = (e) => {
    e.preventDefault();
    if (refs.input.value.trim() !== '') {
        const todo = refs.input.value;
        const list_item = document.createElement('li');
        list_item.style.fontSize = '35px'
        list_item.textContent = todo
        refs.list.appendChild(list_item) 
        refs.input.value = ''
    }
}

const onCheckBoxChange = (e) => {
    if (refs.checkbox.checked == true) {
        refs.addBtn.disabled = false
    } else refs.addBtn.disabled = true
};

refs.checkbox.addEventListener('change', onCheckBoxChange)
refs.addBtn.addEventListener('click', onButtonClick)
