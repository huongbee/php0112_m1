function calculator(){
    var so_a = document.getElementById('txtSoa')
    var so_b = document.getElementById('txtSob')
    var pt = document.getElementById('txtPheptinh').value
    var txtKQ = document.getElementById('txtKetqua')

    var soa = so_a.value;
    var sob = so_b.value;
    var kq = '';
    if(pt=="+"){
        kq = parseInt(soa)+parseInt(sob);
    }
    else if(pt=='-'){
        kq = soa-sob;
    }
    else if(pt=='*'){
        kq = soa*sob;
    }
    else{ // chia
        if(sob == 0 ){
            alert('Vui lòng nhập số');
            return
        }
        kq = soa/sob;
    }
    txtKQ.value = kq
}