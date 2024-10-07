// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";
// เริ่มเขียนโค้ดตรงนี้
function calculateTotalPrice(products, promotionCode) {
  let totolPrice = 0
  let totolPriceAfterDiscount = 0
  for (let i = 0; i < products.length; i++ ) {
      if (promotionCode === "SALE20") {
        totolPrice += products[i].price * products[i].quantity
        totolPriceAfterDiscount =  totolPrice - (totolPrice * 0.2) 
      } else if (promotionCode === "SALE50") {
        totolPrice += products[i].price * products[i].quantity
        totolPriceAfterDiscount =  totolPrice - (totolPrice * 0.5) 
      } else if (promotionCode === "") {
        totolPrice += products[i].price * products[i].quantity
        totolPriceAfterDiscount =  totolPrice}
  }
  return totolPriceAfterDiscount
}

let test1 = calculateTotalPrice(products, "SALE20")
console.log(test1)

let test2 = calculateTotalPrice(products, "SALE50")
console.log(test2)

let test3 = calculateTotalPrice(products, "")
console.log(test3)