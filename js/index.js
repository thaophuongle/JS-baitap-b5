// BAI 1
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

// BAI 2
function tinhTienDien() {
    var hoTen = document.getElementById("hoTen").value;
    var soKW = +document.getElementById("soKW").value;

    var tienDien;
     if (soKW >= 0 && soKW <= 50) {
        tienDien = soKW * 500;
     }
     else if (soKW > 50 && soKW <= 100){
        tienDien = 50 * 500 + (soKW - 50) * 650;
     }
     else if (soKW > 100 && soKW <= 200){
        tienDien = 50 * 500 + 50 * 650 + (soKW - 100) * 850;
     }
     else if (soKW > 200 && soKW <= 350){
        tienDien = 50 * 500 + 50 * 650 + 100 * 850 + (soKW - 200) * 1100;
     }
     else {
        tienDien = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKW - 350) * 1300;
     }

     document.getElementById('elecHandle').innerHTML = `
        <div>
            <p>Họ tên người dùng: ${hoTen}</p>
            <p>Tổng tiền điện: ${tienDien}</p>
        </div>
        `
        ;
    console.log(tienDien);
}

//BAI 3
function tinhTienThue() {
    var hoTen2 = document.getElementById('hoTen2').value;
    var thuNhapNam = +document.getElementById('thuNhapNam').value;
    var soNguoiPhuThuoc = +document.getElementById('soNguoiPhuThuoc').value;

    var thuNhapChiuThue = thuNhapNam - 4e+6 - soNguoiPhuThuoc *16e+5;
    var tienThue;

    if (thuNhapChiuThue >= 0 && thuNhapChiuThue <= 60e+6){
        tienThue = thuNhapChiuThue * 0.05;
    }
    else if (thuNhapChiuThue > 60e+6 && thuNhapChiuThue <= 120e+6) {
        tienThue = thuNhapChiuThue * 0.1;
    }
    else if (thuNhapChiuThue > 120e+6 && thuNhapChiuThue <= 210e+6) {
        tienThue = thuNhapChiuThue * 0.15;
    }
    else if (thuNhapChiuThue > 210e+6 && thuNhapChiuThue <= 384e+6) {
        tienThue = thuNhapChiuThue * 0.2;
    }
    else if (thuNhapChiuThue > 384e+6 && thuNhapChiuThue <= 624e+6) {
        tienThue = thuNhapChiuThue * 0.25;
    }
    else if (thuNhapChiuThue > 624e+6 && thuNhapChiuThue <= 960e+6) {
        tienThue = thuNhapChiuThue * 0.3;
    }
    else {
        tienThue = thuNhapChiuThue * 0.35;
    }

    console.log(new Intl.NumberFormat().format(tienThue));
    document.getElementById('taxHandle').innerHTML = `
        <div>
            <p>Họ tên: ${hoTen2}</p>
            <p>Tiền thuế thu nhập cá nhân: ${new Intl.NumberFormat().format(tienThue)}d</p>
        </div>
        `
        ;
    
}

// BAI 4

function tinhTienCap() {
    var khachHang = document.querySelector(".chonKhachHang select option:checked").value;
    var maKhachHang = +document.getElementById("maKhachHang").value;
    var phiXuLyHoaDon;
    var phiDichVuCoBan = 20.5;
    var soKenh = +document.getElementById('soKenh').value;
    var soKetNoi = +document.getElementById('soKetNoi').value
    var tienCap;

    if (khachHang == "nhaDan"){
       
        phiXuLyHoaDon = 4.5;
       tienCap = phiXuLyHoaDon + phiDichVuCoBan + soKenh * 7.5;
    }
    else if (khachHang == "doanhNghiep"){
        phiXuLyHoaDon = 15;
        if (soKetNoi >0 && soKetNoi <= 10){
            tienCap = phiXuLyHoaDon + 50 * soKenh + 75;
        }
        else {
            tienCap = phiXuLyHoaDon + 50 * soKenh + 75 + soKetNoi * 5;
        }

    }
    else {
       alert("Hãy chọn loại khách hàng");
    }

    console.log(tienCap);
    document.getElementById('taxHandle').innerHTML = `
        <div>
            <p>Họ tên: ${maKhachHang}</p>
            <p>Tiền cáp: ${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(tienCap)}d</p>
        </div>
        `
        ;

}