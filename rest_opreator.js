function normalresparam(...allval){
 return allval.reduce((before,after)=>{
   return before+after
},0)
}

console.log(normalresparam(1,3,41,134,5,1,42,5,8)) 



function restparam(a,b,...c){
return c.reduce((i,o)=>{
   return i+o
},0)+a+b
}

console.log(restparam(3,2,9,2)) 