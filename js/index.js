function tinhDiemKhuVuc(khuVuc) {
    if (khuVuc == "A") {
        return 2;
    }
    else if (khuVuc == "B") {
        return 1;
    }
    else if (khuVuc == "C"){
        return 0.5;
    }
    else {
        return 0;
    }
}

function tinhDiemDoiTuong(doiTuong) {
    if (doiTuong == "doiTuong1") {
        return 2.5;
    }
    else if (doiTuong == "doiTuong2") {
        return 1.5;
    }
    else if (doiTuong == "doiTuong3") {
        return 1;
    }
    else {
        return 0;
    }
}

function tinhKetQua() {
    var khuVuc = document.querySelector(".chonKhuVuc select option:checked").value;
    var doiTuong = document.querySelector(".chonDoiTuong select option:checked").value;
    var diemChuan = +document.getElementById('diemChuan').value;
    var diem1 = +document.getElementById('diem1').value;
    var diem2 = +document.getElementById('diem2').value;
    var diem3 = +document.getElementById('diem3').value;

    var tongDiem;
    var diemKhuVuc = tinhDiemKhuVuc(khuVuc);
    var diemDoiTuong = tinhDiemDoiTuong(doiTuong);
    if ( diem1 !== 0 && diem2 !== 0 && diem3 !== 0){
        tongDiem = diem1 + diem2 + diem3 + diemKhuVuc + diemDoiTuong;
        if (tongDiem >= diemChuan)
        {
            console.log("Bạn đã đậu. Tổng điểm là " + tongDiem);
            document.getElementById('resultHandle').innerHTML = `
        <div>
            <p>Bạn đã đậu. Tổng điểm là ${tongDiem}</p>
        </div>
        `
        ;
        }
        else {
            console.log("Bạn đã rot. Tổng điểm là " + tongDiem);
            document.getElementById('resultHandle').innerHTML = `
        <div>
            <p>Bạn đã rớt. Tổng điểm là ${tongDiem}</p>
        </div>
        `
        ;
        }
    }
    else {
        console.log("ban da rot");
        document.getElementById('resultHandle').innerHTML = `
        <div>
            <p>Bạn đã rớt.</p>
        </div>
        `
        ;
    }
}