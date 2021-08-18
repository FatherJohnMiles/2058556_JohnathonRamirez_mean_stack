interface myitems {

    price: number;
    productname: any;

        //constructor(public productname:any, public price: number){

            //this.productname = productname;
            //this.price = price;

            //}

            // dis(): void {
            //     console.log(" Name of product is " +this.productname);
            //     console.log(" Price of product is " +this.price);
            // }
}

let socks: myitems = {productname:"Green Socks", price: 2.00};
let sticker: myitems = {productname:"Green Sticker", price: 1.00};
let pillow: myitems = {productname:"Green Pillow", price: 54.00};
let brush: myitems = {productname:"Green Brush", price: 9.00};
        

        // let sticker = new myitems("Green Sticker", 1.00);
        // let pillow = new myitems("Green Pillow", 54.00);
        // let brush = new myitems("Green Brush", 9.00);

        // socks.dis();
        // sticker.dis();
        // pillow.dis();
        // brush.dis();


//document.write("<div><h3>Cart Size  "  +total+ "<h3></div>")