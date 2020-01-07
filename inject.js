function choose_status(status = 1) {
    let res = document.getElementsByClassName("common-card-layout booklist-book-item");
    let ele_list = Array();
    let type;
    if (status == 1) {
        type = '完结'
    } else if (status == 0) {
        type = '连载'
    } else if (status == 2) {
        type = '太监'
    }

    for (let i = 0; i < res.length; i++) {
        if (res[i].firstChild.children[1].children[1].children[3].textContent != type) {
            ele_list.push(i);
        }
    }
    return ele_list


}

function choose_num(num_status = 2) {

    let res = document.getElementsByClassName("common-card-layout booklist-book-item");
    let ele_list = Array();
    let num_limit;

    if (num_status == 2) {
        num_limit = 100
    } else if (num_status == 1) {
        num_limit = 50
    } else if (num_status == 3) {
        num_limit = 200
    }

    for (let i = 0; i < res.length; i++) {
        let number_string = res[i].firstChild.children[1].children[1].children[1].textContent;
        let num = Number(number_string.match(/\d+(\.)?(\d+)?/g)[0]);

        if (num < num_limit) {
            ele_list.push(i);
        }
    }

    return ele_list;

}

function filter() {
    let res = document.getElementsByClassName("common-card-layout booklist-book-item");
    // 隐藏 书籍状态筛选结果
    let ms_1 = document.getElementById('select_book_status');
    let index_1 = ms_1.selectedIndex;
    let book_status = ms_1.options[index_1].value;
    let ele_list_1 = choose_status(book_status);
    for (let i = 0; i < ele_list_1.length; i++) {
        res[ele_list_1[i]].setAttribute('style', 'display:none;')
    }

    // 隐藏 数字筛选结果
    let ms_2 = document.getElementById('select_num_status');
    let index_2 = ms_2.selectedIndex;
    let num_status = ms_2.options[index_2].value;
    let ele_list_2 = choose_num(num_status);
    for (let i = 0; i < ele_list_2.length; i++) {
        res[ele_list_2[i]].setAttribute('style', 'display:none;')
    }

}

function reload() {
    let res = document.getElementsByClassName("common-card-layout booklist-book-item");
    for (let i = 0; i < res.length; i++) {
        res[i].setAttribute('style', 'display:block;')
    }
}


function create_display() {


    let div = document.createElement('div');
    div.setAttribute('id', 'inject_div');

    let relative_div = document.getElementsByClassName('BooklistCollectArea');
    relative_div[0].style.position = 'relative';
    relative_div[0].appendChild(div);


    let select_book_status = document.createElement('select');
    select_book_status.setAttribute('id', 'select_book_status');
    select_book_status.setAttribute('class', 'select_filter');
    let select_status_value = [{k: '完结', v: 1}, {k: '连载', v: 0}, {k: '太监', v: 2}];
    for (let i in select_status_value) {
        let option = new Option(select_status_value[i].k, select_status_value[i].v);
        if (select_status_value[i].v === 1) {
            option.setAttribute('Seleted', 'true')
        }
        select_book_status.add(option)
    }
    let select_book_num = document.createElement('select');
    select_book_num.setAttribute('id', 'select_num_status');
    select_book_num.setAttribute('class', 'select_filter');
    let select_num_value = [{k: '50w', v: 1}, {k: '100w', v: 2}, {k: '200w', v: 3}];
    for (let i in select_num_value) {
        let option = new Option(select_num_value[i].k, select_num_value[i].v);
        if (select_num_value[i].v === 2) {
            option.setAttribute('Selected', 'ture')
        }
        select_book_num.add(option)
    }

    // filter 按钮
    let button_filter = document.createElement('a');
    button_filter.setAttribute('class', 'button_filter');
    button_filter.setAttribute('href', '#');
    button_filter.setAttribute('onclick', 'filter();return false;');
    button_filter.innerHTML = "FILTER";


    // reload 按钮
    let button_reload = document.createElement('a');
    button_reload.setAttribute('class', 'button_filter');
    button_reload.setAttribute('href', '#');
    button_reload.setAttribute('onclick', 'reload();return false;');
    button_reload.innerHTML = "RELOAD";

    // 添加创建的元素
    div.appendChild(select_book_status);
    div.appendChild(select_book_num);
    div.appendChild(button_filter);
    div.appendChild(button_reload);

}


create_display();

