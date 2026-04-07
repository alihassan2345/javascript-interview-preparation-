let obj1 = {
  name: "Ali",
  address: { city: "Karachi" }
};

let obj2 = JSON.parse(JSON.stringify(obj1))

obj2.address.city = "lahore"

console.log(obj1.address.city) // karachi  ||| value was not change


let obj3 = structuredClone(obj1)

obj3.address.city = "islamabad"

console.log(obj1.address.city)  // karachi  ||| value was not change