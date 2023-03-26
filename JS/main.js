let BillInput = document.querySelector("main .stats .b input")
let peopleInput = document.querySelector("main .stats .p input")
let tips = document.querySelectorAll(".tips .tip");
let resetBtn = document.querySelector(".reset");
let res = document.querySelector("main .res .rev > p.r")
let resT = document.querySelector("main .res .rev > p.t")
let customTip = document.querySelector(".custom")
let Bill;
let peopleNum;
//
customTip.onclick = ()=>{
    if(resetBtn.classList.contains("active")){
        customTip.removeAttribute("readonly")
        tips.forEach(el =>{
            el.classList.remove("active")
        });
        if(!(Number.isNaN(Number(customTip.value))) && customTip.value !== "") {
            customTip.dataset.tip = customTip.value
            customTip.classList.add("active")
            tip()
        }else{
            customTip.classList.remove("active")
        }
    }else{
        customTip.setAttribute("readonly")
    }
}
customTip.oninput = ()=>{
    if(resetBtn.classList.contains("active")){
        if(!(Number.isNaN(Number(customTip.value))) && customTip.value !== "") {
            customTip.dataset.tip = customTip.value
            customTip.classList.add("active")
            tip()
        }else{
            customTip.classList.remove("active")
        }
    }
}
//
tips.forEach(el => {
    el.onclick = ()=>{
        if(resetBtn.classList.contains("active")){
            tips.forEach(ele=>{
                ele.classList.remove("active")
            })
            el.classList.add("active")
            tip()
            customTip.classList.remove("active")
        }
    }
});
//
resetBtn.onclick = ()=>{
    if(resetBtn.classList.contains("active")){
        window.location.reload();
    }
}
BillInput.oninput = ()=>{
    checker()
    tips.forEach(el => {
        if(el.classList.contains("active")){
            tip()
        }
    });
}
peopleInput.oninput = ()=>{
    checker()
    tips.forEach(el => {
        if(el.classList.contains("active")){
            tip()
        }
    });
}
//
// Functions
function tip(){
    let activeTip = document.querySelector(".tips .active")
    if(resetBtn.classList.contains("active")){
        res.textContent = `$${Number(((activeTip.dataset.tip * BillInput.value) / 100)/peopleInput.value).toFixed(2)}`
        resT.textContent = `$${((activeTip.dataset.tip * BillInput.value) / 100).toFixed(2)}`
        if(res.textContent == "$Infinity"){
            res.textContent = "$0.00"
            resT.textContent = "$0.00"
            peopleInput.parentElement.classList.add("error")
        }else{
            peopleInput.parentElement.classList.remove("error")
        }
    }
}
function checker(){
    let check1;
    let check2;
    if(!(Number.isNaN(Number(BillInput.value))) && BillInput.value !== "") {
        check1 = true;
    }else {
       check1 = false;
    }
    if(!(Number.isNaN(Number(peopleInput.value))) && peopleInput.value !== "") {
        check2 = true;
    }else {
       check2 = false;
    }
    if(check1 && check2){
        resetBtn.classList.add("active");
    }else{
        resetBtn.classList.remove("active");
        res.textContent = "$0.00"
        resT.textContent = "$0.00"
    }
}
//