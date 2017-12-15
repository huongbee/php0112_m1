function calculator(){
    var so_a = document.getElementById('txtSoa')
    var so_b = document.getElementById('txtSob')
    var pt = document.getElementById('txtPheptinh').value
    var txtKQ = document.getElementById('txtKetqua')

    var soa = so_a.value;
    var sob = so_b.value;
    var kq = '';
    if(isNaN(soa)){
        alert('Vui lòng nhập a số');
        so_a.focus();
        return false;
    }
    if(isNaN(sob)){
        alert('Vui lòng nhập b số');
        so_b.focus();
        return false;
    }
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
            so_b.focus();
            return 
        }
        kq = soa/sob;
    }
    txtKQ.value = kq
}