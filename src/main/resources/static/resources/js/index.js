var app =  {
    $wrapper : $wrapper = document.getElementById('wrapper'),
    init : init
};

var customer = {
    login_form : login_form,
    join_form : join_form,
    login_success : login_success,
    login : login,
    join : join,
    count : count,
    update : update,
    remove : remove,
    modify_form : modify_form
};

var employee = {
    login : login,
    customer_list : customer_list,
    admin_login : admin_login,
    customer_list_form : customer_list_form
}

var session = {
    set_value : set_value,
    get_value : get_value
};

function customer_list_form() {
    return 	'<h2>고객 목록</h2>'
    + '<table>'
      + '<tr>'
        + '<th>아이디</th>'
        + '<th>고객명</th>'
        + '<th>주민번호</th>'
       + '<th>전화번호</th>'
       + '<th>도시</th>'
      + '</tr>'
        + '<tbody id="tbody">'
        + '</tbody>'
    + '</table>';
};


function init() {
    $wrapper.innerHTML = customer.login_form();
    
    document.getElementById('join').addEventListener('click', () => {
        customer.join_form();
    });

    document.getElementById('login-btn').addEventListener('click', () => {
        customer.login({
            userid : 'id',
            domain : 'customers'
        })
    });

    document.getElementById('admin').addEventListener('click', () => {
        employee.admin_login();
    })
};

function set_value(x) {
    sessionStorage.setItem(x.name, x.value);
}

function get_value(x) {
    return sessionStorage.getItem(x);
}


function login(x) {
    id = document.getElementById(x.userid).value;
    pass = document.getElementById('pass').value;

    if (id != "" && pass != ""){

        let xhr = new XMLHttpRequest();

        xhr.onload = () => {
            if(xhr.readyState == 4 && xhr.status == 200){
                if (xhr.responseText){
                let result = JSON.parse(xhr.responseText);
                $wrapper.innerHTML = customer.login_success(result);
                customer.modify_form(result);

                session.set_value({
                    name : 'userid',
                    value : result.customer_Id
                });
                session.set_value({
                    name : 'username',
                    value : result.customer_Name
                });

                // alert('세션 테스트 ID : ' + session.get_value('userid'));
                // alert('세션 테스트 NAME : ' + session.get_value('username'));
                } else {
                    alert('비밀번호가 틀렸거나 존재하지 않는 아이디입니다.');
            }
            };
        };
        xhr.open('GET', x.domain + '/' + id + '/' + pass, true);
        xhr.send();
    } else {
        alert('아이디와 비밀번호를 입력하세요.');
    };
};


function join() {
    let data = {
        customer_Id : document.getElementById('create_id').value,
        password : document.getElementById('create_pass').value,
        customer_Name : document.getElementById('create_name').value,
        ssn : document.getElementById('create_ssn').value,
        phone : document.getElementById('create_phone').value,
        city : document.getElementById('create_city').value,
        address : document.getElementById('create_address').value,
        postalcode : document.getElementById('create_postalcode').value
    }
    let xhr = new XMLHttpRequest();
    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200){
                let d = JSON.parse(xhr.responseText);
                
            if (d.result === 'SUCCESS'){
                alert('회원가입 축하드립니다!' + d.result);
            } else {
                alert('회원가입 실패 ㅋㅋ');
            }
        } else {
            alert('AJAX 실패');
        }
    }
    xhr.open('POST','customers/join');
    xhr.setRequestHeader('Content-type','application/json;charset=UTF-8');
    xhr.send(JSON.stringify(data))
};

function count() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'customers/count');
    xhr.onload = () => {
        if(xhr.readyState ==4 && xhr.status == 200){
            $wrapper.innerHTML = '<h1>' + '총 고객수 : ' + xhr.responseText + '</h1>'
        }
    }
    xhr.send();
};

function login_form() {
    return 'ID : <input type="text" id="id"><br>'
            + 'PASS : <input type="password" id="pass"><br>'
            + '<input type="button" value="로그인" name="login" id="login-btn">'
            + '<input type="button" value="가입" name="join" id="join">'
            + '<input type="button" value="관리자" name="join" id="admin">';
}

function login_success(result) {
    return '<h1>마이 페이지</h1>' +
            'ID : ' + result.customer_Id + '<br>' +
            'NAME : ' + result.customer_Name + '<br>' +
            'SSN : ' + result.ssn + '<br>' +
            'PHONE : ' + result.phone + '<br>' +
            'CITY : ' + result.city + '<br>' +
            'ADDRESS : ' + result.address + '<br>' +
            '<input type="button" value="수정" id="update" style="margin:20px 0 0 20px">' + 
            '<input type="button" value="탈퇴" id="remove" style="margin:20px 0 0 20px">';
};

function join_form() {
    $wrapper.innerHTML =
    'ID : <input type="text" id="create_id"><br>'
    + 'PASS : <input type="password" id="create_pass"><br>'
    + 'NAME : <input type="test" id="create_name"><br>'
    + 'SSN : <input type="test" id="create_ssn"><br>'
    + 'PHONE : <input type="text" id="create_phone"><br>'
    + 'CITY : <input type="test" id="create_city"><br>'
    + 'ADDRESS : <input type="test" id="create_address"><br>'
    + 'POSTALCODE : <input type="test" id="create_postalcode"><br>'
    + '<input type="button" value="등록" id="join_ok" style="margin:20px 20px 0 20px">'
    + '<input type="button" value="취소" id="join_cancel">'
    + '<input type="button" value="회원수 조회" id="count_btn" style="margin:0 0 0 20px">';

    let count_btn = document.getElementById('count_btn');
    count_btn.addEventListener('click', () => {
        customer.count();
    })

    let join_cancel = document.getElementById('join_cancel');
    join_cancel.addEventListener('click', () => {
        app.init();
    });

    let join_ok = document.getElementById('join_ok');
    join_ok.addEventListener('click', () => {
        customer.join();
        customer.init();
    })
};

function update() {
    let data = {
        customer_Id : document.getElementById('update_id').value,
        customer_Name : document.getElementById('update_name').value,
        ssn : document.getElementById('update_ssn').value,
        password : document.getElementById('update_password').value,
        phone : document.getElementById('update_phone').value,
        city : document.getElementById('update_city').value,
        address : document.getElementById('update_address').value,
        postalcode : document.getElementById('update_postalcode').value,
    }

    let xhr = new XMLHttpRequest();

    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200){
            alert('업데이트 성공');
            let result = JSON.parse(xhr.responseText);
            $wrapper.innerHTML = customer.login_success(result);
            customer.modify_form(result);
        } else {
            alert('AJAX 실패');
        }
    }

    xhr.open('PUT', 'customers/modify');
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF8');
    xhr.send(JSON.stringify(data));
}

function modify_form (result) {
    document.getElementById('update').addEventListener('click', () => {
        $wrapper.innerHTML = '<h1>수정 페이지</h1>' +
            'ID : ' + '<input type="text" id="update_id" value="' + result.customer_Id + '" readonly>' + '<br>' +
            'NAME : ' + '<input type="text" id="update_name" value="' + result.customer_Name + '" readonly>' + '<br>' +
            'PASSWORD : ' + '<input type="password" id="update_password" value="' + result.ssn + '">' + '<br>' +
            'SSN : ' + '<input type="text" id="update_ssn" value="' + result.ssn + '" readonly>' + '<br>' +
            'PHONE : ' + '<input type="text" id="update_phone" value="' + result.phone + '">' + '<br>' +
            'CITY : ' + '<input type="text" id="update_city" value="' + result.city +'">' + '<br>' +
            'ADDRESS : ' + '<input type="text" id="update_address" value="' + result.address +'">'  + '<br>' +
            '<input type="text" id="update_postalcode" value="' + result.postalcode +'" style="display:none;">'  + '<br>' +
            '<input type="button" value="수정하기" id="update" style="margin:20px 0 0 20px">' + 
            '<input type="button" value="뒤로가기" id="back" style="margin:20px 0 0 20px">';
        

        document.getElementById('update').addEventListener('click', () => {
            customer.update();
        })

        document.getElementById('back').addEventListener('click', () => {
            alert('구현 준비중!!');
        })

    })
    document.getElementById('remove').addEventListener('click', () => {
        
        if (confirm('정말로 회원 탈퇴 하시겠습니까?')){
            customer.remove(result);
            customer.init();
        }
    })
}

function remove(result) {
    let xhr = new XMLHttpRequest();

    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200){
            if (JSON.parse(xhr.responseText).result == '탈퇴 성공'){
                alert('탈퇴 성공!\n이용해주셔서 감사합니다.');
            } else {
                alert('탈퇴 실패!');
            }
        } else {
            alert('AJAX 실패');
        }
    }

    xhr.open('DELETE', 'customers/' + result.customer_Id, true);
    xhr.send();
}

function admin_login() {
    let isAdmin = confirm('관리자 입니까?');
    if (isAdmin) {
        let pass = prompt('관리자 번호를 입력하세요');
        if (pass == 1000) {
            employee.customer_list(1);
        } else {
            alert('입력한 번호가 일치하지 않습니다.');
        }
    };
}

function create_rows(item, index) {
    document.getElementById('demo').innerHTML += index + ':' + item + '<br>';
};

function customer_list(x){
    let xhr = new XMLHttpRequest();
    
    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200){
            let data = JSON.parse(xhr.responseText);
            console.dir(data);
            $wrapper.innerHTML = employee.customer_list_form();
            let tbody = document.getElementById('tbody');
            let rows = '';

            for (let i = 0; i < data.list.length; i++){
                rows +=
                    '<tr>' +
                        '<td>' + data.list[i].customer_Id + '</td>' + 
                        '<td>' + data.list[i].customer_Name + '</td>' + 
                        '<td>' + data.list[i].ssn + '</td>' + 
                        '<td>' + data.list[i].phone + '</td>' + 
                        '<td>' + data.list[i].city + '</td>' + 
                    '</tr>';
            }
            tbody.innerHTML = rows;
            page();

            if(data.pxy.existPrev){
                let prevBlock = document.createElement('span');
                prevBlock.setAttribute('style','display:inline-block;padding-right:20px;border: 1px solid black;');
                prevBlock.textContent="<";
                blocks.prepend(prevBlock);
            }
     
            if(data.pxy.existNext){
                let nextBlock = document.createElement('span');
                nextBlock.setAttribute('style','display:inline-block;padding-right:20px;border: 1px solid black;');
                nextBlock.textContent=">";
                blocks.appendChild(nextBlock);
            }

        } else {
            alert('AJAX 실패');
        }
    }
    xhr.open('GET', 'customers/list/' + x, true);
    xhr.send();
}

function page() {
    let blocks = document.createElement('div');
    blocks.setAttribute('id', 'blocks');
    wrapper.appendChild(blocks);
    let inputs = '';

    for(let i = 1; i < 6; i++){
        inputs += '<input type="button" value="' + i + '" style="margin:10px;" onclick="customer_list(this.value)"/>';
    }

    blocks.innerHTML= inputs;
};