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


function addSelect() {
    // Add select for variant add
    let form = document.getElementById('main_form');
    let select = document.createElement('select');
    select.id = 'list_device';
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
    form.insertAdjacentElement('afterbegin', select);



}

function AddPropertyForForm(variant_select) {

    // Add inputs for new Node
    if (document.getElementById('body_form')) document.getElementById('body_form').remove();
    let form = document.getElementById('main_form');
    let div_container = document.createElement('div');
    div_container.id = 'body_form';

    if (variant_select.value == 'ultra') {
        for (let i = 0; i < objMethodUltra.length; i++) {
            let newNode = document.createElement('div');
            let p = document.createElement('p');
            p.innerHTML = objMethodUltra[i];
            let input = document.createElement('input');
            newNode.append(p);
            newNode.append(input);
            div_container.append(newNode);
        }

    }
    if (variant_select.value == 'server') {
        for (let i = 0; i < objMethodServer.length; i++) {
            let newNode = document.createElement('div');
            let p = document.createElement('p');
            p.innerHTML = objMethodServer[i];
            let input = document.createElement('input');
            newNode.append(p);
            newNode.append(input);
            div_container.append(newNode);
        }
    }


    // Add buton for save, exit, clear
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
    div_container.insertAdjacentElement('beforeend', submit_save);
    div_container.insertAdjacentElement('beforeend', button_clear);
    div_container.insertAdjacentElement('beforeend', button_exit);

    form.insertAdjacentElement('beforeend', div_container);
}

function SaveNode(variant_select) {
    let form = document.forms.mainForm;
    form.addEventListener('submit', function(e) {
        if (variant_select.value == 'ultra') {
            let ultrabook = new Ultrabook(form.elements[1].value, form.elements[2].value, form.elements[3].value, form.elements[4].value, form.elements[5].value, form.elements[6].value, form.elements[7].value, form.elements[8].value, form.elements[9].value);
            let max = 0;
            console.log(ultrabook);
            for (let i = 0; i < localStorage.length; i++) {
                console.log(localStorage.key(i));
                if (max <= localStorage.key(i)) {
                    max = (+localStorage.key(i)) + 1;
                }
            }
            localStorage.setItem(max, JSON.stringify(ultrabook));
        }
        e.preventDefault();
    });

}

function LoadStorage() {

}