// Question #3
let userPassword = "";
// เริ่มเขียนโค้ดตรงนี้
function checkPasswordStrength(userPassword) {
    if (userPassword.length < 6 ){
        return "Weak"
}  else if (userPassword.length >= 6 && userPassword.length <= 10) {
         return "Medium"
} else if (userPassword.length > 10 ) {
        return "Strong"
}
}

userPassword = "ssswnalWadqQ"
console.log(checkPasswordStrength(userPassword)); // "Strong"
userPassword = "TechUp"
console.log(checkPasswordStrength(userPassword)); // "Medium"
userPassword = "abcde"
console.log(checkPasswordStrength(userPassword)); // "Weak"








userPassword = "aaaaaaaaaa"
console.log(checkPasswordStrength(userPassword)); // "Weak"
userPassword = "aaaaaa"
console.log(checkPasswordStrength(userPassword)); // "Weak"