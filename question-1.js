// Question #1
const myTodo = [
  { id: 1, todo: "Buy groceries" },
  { id: 2, todo: "Finish homework" },
  { id: 3, todo: "Call mom" },
  { id: 4, todo: "Wash dishes" },
];
// เริ่มเขียนโค้ดตรงนี้
// ให้เขียนโปรแกรมดังนี้
    
// เพิ่ม Object ใหม่เข้าไปใน `myTodo` ซึ่งมี `id` เป็น `5` และมี `todo` เป็น `"Walk the dog"` 
myTodo.push({ id: 5, todo: "Walk the dog" })
console.log(myTodo)
    
//2) แก้ไขชื่อ Object ที่มี `id` เป็น `4` เพื่อให้ `todo` ของ Object นั้นมีค่าเป็น `"Go to the gym"`
myTodo[3].todo = "Go to the gym"
console.log(myTodo[3])
//3) ลบ Object สุดท้ายใน Array ออก
myTodo.pop  ()
//4) นำ `myTodo` มาแสดงบนหน้าจอ Console
console.log(myTodo)   
//5) ให้นำข้อมูลใน Object สุดท้ายมาแสดงบนหน้าจอ Console ในรูปแบบ
// `"To-do id: <ค่าของ id>, <ค่าของ todo>"` (ห้าม Hard-Code ค่าเข้าไปใน String โดยตรง)
console.log(`"To-do id: ${myTodo[3].id}, ${myTodo[3].todo}`)