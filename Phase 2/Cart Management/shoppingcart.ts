

let itemcart = [];


function additem(productname:string, price:number) {


    
        itemcart.push({productname,price});
            savecart();
            console.log(itemcart.length)
            console.log(itemcart)
            
    }



    function savecart(){
        let shoppingCart = JSON.stringify(itemcart)
        sessionStorage.setItem("shoppingCart", shoppingCart)


    }

    let checkoutcart: any

    function newcart() {

        let mycart = sessionStorage.getItem("shoppingCart")

        checkoutcart = JSON.parse(mycart)
        console.log(checkoutcart)
        
    }

        document.onreadystatechange = function () {
            if(document.readyState === "complete"){
            newcart();
            }
        }

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

    let total:any = 0;
    let checkingout = document.getElementById("mycart") as HTMLTableElement
    for (let i = 0; i < checkoutcart.lengh; i++){
        console.log("loop" +i);
        let c_row = checkingout.insertRow(-1);
        c_row.innerHTML =  "<td>"+ checkoutcart[i].productname +"</td>" + "<td>"+checkoutcart[i].price+"</td>";
                    
        
            checkingout.appendChild(c_row);

        total = total + Number(checkoutcart[i].price)

    }
    document.write("<div><h3>Cart Size  "  +total+ "<h3></div>")
  }
