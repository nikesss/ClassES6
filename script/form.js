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

let action = 0;
let newObj;
let targetUl;

function AddPropertyForForm(variant_select) {

    // Add inputs for new Node
    let form = document.forms.mainForm;
    if (document.getElementById('all_input')) document.getElementById('all_input').remove();
    let div_container = document.createElement('div');
    div_container.id = 'all_input';
    let body_form = document.getElementById('form_body');

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


    body_form.insertAdjacentElement('afterbegin', div_container);
    let sv_btn = document.getElementById('save_node');
    sv_btn.style.visibility = 'visible';
    let clr_btn = document.getElementById('clear_node');
    clr_btn.style.visibility = 'visible';
    let cls_btn = document.getElementById('close_node');
    cls_btn.style.visibility = 'visible';




}

function SaveNode(variant_select) {

    if (variant_select.value == 'ultra') {
        let form = document.forms.mainForm;
        let ultrabook = new Ultrabook(form.elements[1].value, form.elements[2].value, form.elements[3].value, form.elements[4].value, form.elements[5].value, form.elements[6].value, form.elements[7].value, form.elements[8].value, form.elements[9].value);
        let validate = 0;
        for (let key in ultrabook) {
            if (ultrabook[key] == '') validate++;

        }

        if (validate == 0) {
            document.getElementById('main_form').style.visibility = 'hidden';
            sv_btn.style.visibility = 'hidden';
            clr_btn.style.visibility = 'hidden';
            cls_btn.style.visibility = 'hidden';
            CreateNodeAfterSave(ultrabook);
            alert('Данные добавлены');
            for (let i = 1; i < 10; i++) {
                form.elements[i].value = '';
            }
        } else {
            alert('Заполните все поля');
        }

    }
    if (variant_select.value == 'server') {
        let form = document.forms.mainForm;
        let server = new ComputingServer(form.elements[1].value, form.elements[2].value, form.elements[3].value, form.elements[4].value, form.elements[5].value, form.elements[6].value, form.elements[7].value, form.elements[8].value, form.elements[9].value);
        let validate = 0;
        for (let key in server) {
            if (server[key] == '') validate++;

        }
        if (validate == 0) {
            document.getElementById('main_form').style.visibility = 'hidden';
            sv_btn.style.visibility = 'hidden';
            clr_btn.style.visibility = 'hidden';
            cls_btn.style.visibility = 'hidden';
            CreateNodeAfterSave(server);
            alert('Данные добавлены');
            for (let i = 1; i < 10; i++) {
                form.elements[i].value = '';
            }
        } else {
            alert('Заполните все поля');
        }

    }
}


function CreateNodeAfterSave(obj) {
    let list = document.getElementById('list');
    let count = 0;
    let addUl = document.createElement('ul');

    for (let key in obj) {
        if (count < 4) {
            let newLi = document.createElement('li');
            newLi.innerHTML = obj[key];
            addUl.appendChild(newLi);
            count++;
        }

    }
    let li_action = document.createElement('li');
    let edit_button = document.createElement('button');
    edit_button.innerHTML = 'Редактировать';
    edit_button.id = 'edit_node';


    let delte_button = document.createElement('button');
    delte_button.innerHTML = 'Удалить';
    delte_button.id = 'delete_node';


    let info_button = document.createElement('button');
    info_button.innerHTML = 'Инфо';
    info_button.id = 'info_node';
    info_button.addEventListener('click', () => {
        let form = document.forms.mainForm;
        let count = 1;
        form.style.visibility = 'visible';
        for (let key in obj) {
            form.elements[count].value = obj[key];
            count++;
        }
        cls_btn.style.visibility = 'visible';
    })

    li_action.append(edit_button);
    li_action.append(delte_button);
    li_action.append(info_button);
    addUl.append(li_action);
    count = 0;
    list.insertAdjacentElement('beforeend', addUl);


    edit_button.addEventListener('click', (e) => {
        edit(obj);
        targetUl = e.path[2];

    });


}

function edit(obj) {
    action = 'edit';
    let form = document.forms.mainForm;
    let count = 1;
    form.style.visibility = 'visible';
    for (let key in obj) {
        form.elements[count].value = obj[key];
        count++;
    }
    sv_btn.style.visibility = 'visible';
    clr_btn.style.visibility = 'visible';
    cls_btn.style.visibility = 'visible';
    newObj = obj;

}