let obj1 = {
  name: "Ali",
  address: { city: "Karachi" }
};


let obj2 = {...obj1}

obj2.address.city = "lahore"

console.log(obj1.address.city) // lahore ||| karachi value change with lahore