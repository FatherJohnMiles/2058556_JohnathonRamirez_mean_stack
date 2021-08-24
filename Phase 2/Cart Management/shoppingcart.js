var itemcart = [];
function additem(productname, price) {
    itemcart.push({ productname: productname, price: price });
    savecart();
    console.log(itemcart.length);
    console.log(itemcart);
}
function savecart() {
    var shoppingCart = JSON.stringify(itemcart);
    sessionStorage.setItem("shoppingCart", shoppingCart);
}
var checkoutcart;
function newcart() {
    var mycart = sessionStorage.getItem("shoppingCart");
    checkoutcart = JSON.parse(mycart);
    console.log(checkoutcart);
}
document.onreadystatechange = function () {
    if (document.readyState === "complete") {
        newcart();
    }
};
// let itemq ={}
// for(let i = 0; i < checkoutcart.length; i++){
//     itemq[checkoutcart[i]] = 1 + (itemq[checkoutcart[i]] || 0);
// }
// let li = '';
// for (let ct in itemq) {
//     li += '<li>' + ct + 'there are ' + itemq[ct] + '</li>';
// }
// document.getElementById('list').innerHTML = li;
function displaycart() {
    var total = 0;
    var checkingout = document.getElementById("mycart");
    for (var i = 0; i < checkoutcart.lengh; i++) {
        console.log("loop" + i);
        var c_row = checkingout.insertRow(-1);
        c_row.innerHTML = "<td>" + checkoutcart[i].productname + "</td>" + "<td>" + checkoutcart[i].price + "</td>";
        checkingout.appendChild(c_row);
        total = total + Number(checkoutcart[i].price);
    }
    document.write("<div><h3>Cart Size  " + total + "<h3></div>");
}
