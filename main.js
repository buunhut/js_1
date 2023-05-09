// bài 1
function timSo() {
  var number = Number(document.getElementById("number").value);
  var ketQua = 0;
  var n = 0;
  while (ketQua <= number) {
    n++;
    ketQua += n;
  }
  document.getElementById("timSo").innerHTML =
    "Số cần tìm là: " + n.toLocaleString();
}
// bải 2
function tinhTong() {
  var x = Number(document.getElementById("x").value);
  var n = Number(document.getElementById("n").value);
  var tong = 0;
  if (n <= 0) {
    alert("Vui lòng nhập vào giá trị lớn hơn 0");
  } else {
    for (var i = 1; i <= n; i++) {
      tong += Math.pow(x, i);
    }
    document.getElementById("tinhTong").innerHTML =
      "Tổng các số là: " + tong.toLocaleString();
  }
}
// bài 3
function giaiThua() {
  var n = Number(document.getElementById("soN").value);
  var giaiThua = 1;
  for (var i = 1; i <= n; i++) {
    giaiThua *= i;
  }
  document.getElementById("giaiThua").innerHTML =
    "Giai thừa là: " + giaiThua.toLocaleString();
}
// bài 4
function inThediv() {
  var theDiv = "";
  for (var i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
      theDiv +=
        "<div style='background-color:red; color:white; margin: 10px 0; padding: 10px;'>Thẻ div chẵn " + i +"</div>";
    } else {
      theDiv +=
        "<div style='background-color:blue; color:white; margin: 10px 0; padding: 10px;'>Thẻ div lẻ " + i +"</div>";
    }
  }
  document.getElementById("theDiv").innerHTML = theDiv;
}
//bài 5
function timSonguyento() {
  var z = Number(document.getElementById("soNhapvao").value);
  var soTimdc = "";
  var n = 1;
  if (z >= 2) {
    //check xem có phải snt ko?
    function check(z) {
      for (var i = 2; i < z; i++) {
        if (z % i == 0) {
          var check = "ko";
          //console.log(z + " không phải snt");
          break;
        }
      }
      if (check != "ko") {
        soTimdc += "Số: " + z.toLocaleString() + "<br>";
        var soLuong = n++;
        document.getElementById("soLuong").innerHTML = "Tìm được " + soLuong.toLocaleString() + " số nguyên tố trong dãy số là:";
      }
    }
    for (var x = 2; x <= z; x++) {
      check(x);
      document.getElementById("soNguyento").innerHTML = soTimdc;
    }
  } else {
    alert("Bạn phải nhập vào số > 1");
  }
}
