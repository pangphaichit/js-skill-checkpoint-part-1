// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
//ให้เขียนโปรแกรมในการหาสินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้า
let minQuantity = inventory[0].quantity
let minFruit = inventory[0].name

for (let i = 0; i < inventory.length; i++) {
  if (minQuantity > inventory[i].quantity ) {
    minQuantity = inventory[i].quantity
    minFruit = inventory[i].name
  }
}

console.log(`สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${minFruit} ซึ่งมี ${minQuantity} ชิ้น`)

