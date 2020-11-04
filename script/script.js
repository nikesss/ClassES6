let sv_btn = document.getElementById('save_node');
let clr_btn = document.getElementById('clear_node');
let cls_btn = document.getElementById('close_node');
document.getElementById('create_new_node').addEventListener('click', (e) => {

    action = 'save';
    if (document.getElementById('all_input')) document.getElementById('all_input').remove();
    document.getElementById('default_option').selected = true;;
    document.getElementById('list_device').addEventListener('change', () => {
        let variant_select = document.getElementById('list_device');
        AddPropertyForForm(variant_select);

    });
    document.getElementById('main_form').style.visibility = 'visible';

});



clr_btn.addEventListener('click', function() {
    let form = document.forms.mainForm;
    for (let i = 1; i < 10; i++) {
        form.elements[i].value = '';

    }
});
cls_btn.addEventListener('click', function() {
    let form = document.forms.mainForm;
    for (let i = 1; i < 10; i++) {
        form.elements[i].value = '';
        form.style.visibility = 'hidden';
        sv_btn.style.visibility = 'hidden';
        clr_btn.style.visibility = 'hidden';
        cls_btn.style.visibility = 'hidden';
    }

});

sv_btn.addEventListener('click', function(e) {
    if (action == 'save') {
        let variant_select = document.getElementById('list_device');
        SaveNode(variant_select);
    } else if (action == 'edit') {
        let form = document.forms.mainForm;
        newObj.editNode(form);
        targetUl.childNodes[0].innerHTML = newObj.name;
        targetUl.childNodes[1].innerHTML = newObj.countCore;
        targetUl.childNodes[2].innerHTML = newObj.typeCpu;
        targetUl.childNodes[3].innerHTML = newObj.ram;

        form.style.visibility = 'hidden';
        sv_btn.style.visibility = 'hidden';
        clr_btn.style.visibility = 'hidden';
        cls_btn.style.visibility = 'hidden';
    }



    //e.preventDefault();
})