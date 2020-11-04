let objMethodUltra = [
    'Название',
    'Кол-во ядер',
    'Тип процессора',
    'Мощность процессора',
    'Кол-во ОЗУ',
    'Производитель',
    'Видеокарта',
    'Цвет корпуса',
    'Материал корпуса',
]
let objMethodServer = [
    'Название',
    'Кол-во ядер',
    'Тип процессора',
    'Мощность процессора',
    'Кол-во ОЗУ',
    'Производитель',
    'Видеокарта',
    'Тип ОЗУ',
    'Название чипсета',
]

let name_for_add_in_loacl = '';

let form = document.createElement('form');
form.id = 'addNode';
form.name = 'mainForm';


let option_start = document.createElement('option');
let option_one = document.createElement('option');
let option_two = document.createElement('option');
option_start.setAttribute('disabled', true);
option_start.setAttribute('selected', true);
option_one.value = 'ultra';
option_two.value = 'server';
option_start.innerHTML = 'Выбирите устрйство';
option_one.innerHTML = 'Ультрабук';
option_two.innerHTML = 'Сервер';
select.append(option_start);
select.append(option_one);
select.append(option_two);
form.append(select);
document.querySelector('.container').appendChild(form);
document.getElementById('list_device').addEventListener('change', () => {
    let select = document.getElementById('list_device');
    let form = document.getElementById('list_all');
    if (select.value == 'ultra') {
        if (form) form.remove();
        showInpu(objMethodUltra);
        name_for_add_in_loacl = 'ultra';
    }
    if (select.value == 'server') {
        if (form) form.remove();
        showInpu(objMethodServer);
        name_for_add_in_loacl = 'server';
    }

});




function showInpu(obj) {
    let div_container = document.createElement('div');
    div_container.id = 'list_all';
    for (let i = 0; i < 9; i++) {
        let input = document.createElement('input');
        input.id = i;
        let lable = document.createElement('lable');
        lable.setAttribute('for', i);
        lable.innerHTML = obj[i];
        let div = document.createElement('div');
        div.append(lable);
        div.append(input);

        div_container.append(div);



    }
    let submit_save = document.createElement('input');
    let button_clear = document.createElement('input');
    let button_exit = document.createElement('input');

    submit_save.setAttribute('type', 'submit');
    submit_save.id = 'save_node';
    submit_save.value = 'Сохранить';
    button_clear.setAttribute('type', 'button');
    button_clear.id = 'clear_node';
    button_clear.value = 'Отчистить;'
    button_exit.setAttribute('type', 'button');
    button_exit.id = 'exit_node';
    button_exit.value = 'Закрыть;'

    div_container.append(submit_save);
    div_container.append(button_clear);
    div_container.append(button_exit);
    form.append(div_container);
    document.querySelector('#clear_node').addEventListener('click', function() {
        let form = document.forms.mainForm;
        for (let i = 1; i < 10; i++) {
            form.elements[i].value = '';
        }
    });
    document.querySelector('#exit_node').addEventListener('click', function() {
        form.style.visibility = 'hidden';
    });


}

form.style.visibility = 'hidden';

document.getElementById('create_new_node').addEventListener('click', () => {
    document.getElementById('addNode').style.visibility = 'visible';
});