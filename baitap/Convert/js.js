function changeMonney() {
    let a = +document.getElementById("Amount").value;
    let FromC = document.getElementById("From").value;
    let to = document.getElementById("To").value;
    let result;

    if (FromC == "USD" && to == "VND"){
        result = "result : " + (a * 23000) + "Đ";
    } else if (FromC == "VND" && to == "USD") {
        result = "result : " + (a / 23000) + "$";
    } else if (to == "VND"){
        result = "result : " + a + "Đ";
    } else {
        result = "result : " + a + "$";
    }
document.getElementById("result").innerHTML = result;
}