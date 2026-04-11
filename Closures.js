// example # 1
function outer() {
  let count = 0;

 function inner() {
    count++;
    console.log(count);
  };
 inner()
 inner()
 inner()
}

outer()
// example # 2
function outer1() {
  let count = 0;

 return function inner1() {
    count++;
    console.log(count);
  };

}

let counter = outer1()

counter()
counter()
counter()
counter()
