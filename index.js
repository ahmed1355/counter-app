let counter=document.getElementById("counter")

let increament=document.getElementsByClassName("incr")[0]

let decreament=document.getElementsByClassName("decr")[0]
let reset=document.getElementsByClassName("res")[0]

let count=0
increament.addEventListener('click', function(){
    count++
    counter.innerHTML=count

})
decreament.addEventListener('click', function(){
    count--
    counter.innerHTML=count

})
reset.addEventListener('click', function(){
if(count<0||count>0){
    count=0
}
counter.innerHTML=count
})
