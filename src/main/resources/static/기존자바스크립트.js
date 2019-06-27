var run = {
    main : main,
    test1 : test1
};

function main() {
    document.getElementById('main').innerHTML = 
        '<select id="pageSize">' +
            '<option value="5">5</option>' +
            '<option value="10">10</option>' +
            '<option value="20">20</option>' +
        '</select>' +
        '<table>' + 
            '<thead>' +
                '<tr>' +
                    '<td>' + '아이디' + '</td>' + 
                    '<td>' + '이름' + '</td>' + 
                    '<td>' + '전화번호' + '</td>' + 
                    '<td>' + '주소' + '</td>' + 
                '</tr>' +
            '</thead>'+
            '<tbody id="customer_list">' +
            '</thody>' +
        '</table>';
    test1(1);
}

function test1(pageNum) {
    let xhr = new XMLHttpRequest();

    let pageSize = document.getElementById('pageSize').value;

    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200){
            let result = JSON.parse(xhr.responseText);
            
            let result_print = "";

            for (let i = 0; i < result.list.length; i++){
                result_print +=
                                '<tr>' +
                                    '<td>' + result.list[i].CUSTOMER_ID + '</td>' + 
                                    '<td>' + result.list[i].CUSTOMER_NAME + '</td>' + 
                                    '<td>' + result.list[i].PHONE + '</td>' + 
                                    '<td>' + result.list[i].ADDRESS + '</td>' + 
                                '</tr>' ;
            };

            document.getElementById('customer_list').innerHTML = result_print;

            let startPage = result.pageing.startPage;
            let endPage = result.pageing.endPage;
            
            document.getElementById('blocks').innerHTML = '';

            for (startPage; startPage <= endPage; startPage++){
                let blockSize = document.createElement('button');
                blockSize.textContent = startPage;
                blockSize.setAttribute('value', startPage);
                blockSize.setAttribute('onclick', 'test3(this.value)');
                blocks.appendChild(blockSize);
            }

            if(result.pageing.existPrev){
                let prevBlock = document.createElement('button');
                prevBlock.setAttribute('value', result.pageing.prevBlock);
                prevBlock.setAttribute('onclick', 'test3(this.value)');
                prevBlock.textContent="<";
                blocks.prepend(prevBlock);
            }
     
            if(result.pageing.existNext){
                let nextBlock = document.createElement('button');
                nextBlock.setAttribute('value', result.pageing.nextBlock);
                nextBlock.setAttribute('onclick', 'test3(this.value)');
                nextBlock.textContent=">";
                blocks.appendChild(nextBlock);
            }

        } else {
            alert('AJAX 실패!!');
        }
    }

    xhr.open('GET', 'customer/list/' + pageNum + '/' + pageSize, true);
    xhr.send();
}

function test3(result){
    test1(result);
}