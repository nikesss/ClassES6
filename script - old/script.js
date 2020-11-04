document.getElementById('create_new_node').addEventListener('click', () => {
    addSelect();
    document.getElementById('list_device').addEventListener('change', () => {
        let variant_select = document.getElementById('list_device');
        AddPropertyForForm(variant_select);
    });
    let variant_select = document.getElementById('list_device');
    SaveNode(variant_select);

    document.getElementById('main_form').style.visibility = 'visible';
});