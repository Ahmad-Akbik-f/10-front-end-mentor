let BillInput = document.querySelector("main .stats .b input")
let peopleInput = document.querySelector("main .stats .p input")
let tips = document.querySelectorAll(".tips .tip");
let resetBtn = document.querySelector(".reset");
let res = document.querySelector("main .res .rev > p.r")
let resT = document.querySelector("main .res .rev > p.t")
let customTip = document.querySelector(".tips .tip.custom")
let Bill;
let peopleNum;
customTip.oninput=()=>{
    if(resetBtn.classList.contains("active")){
        customTip.dataset.tip = customTip.value;
    }
    tip()
}
customTip.onclick = ()=>{
    customTip.oninput=()=>{
        if(resetBtn.classList.contains("active")){
            customTip.dataset.tip = customTip.value;
        }
        tip()
    }
    tip()
}
tips.forEach(el => {
    el.onclick = ()=>{
        if(resetBtn.classList.contains("active")){
            if(el.classList.contains("custom")){
                let newEle = document.createElement("input")
                newEle.classList.add("tip","active")
                newEle.style.display = "inline-block"
                newEle.type = "text"
                newEle.dataset.tip = "0"
                el.replaceWith(newEle)
                newEle.focus()
                newEle.oninput=()=>{
                    if(resetBtn.classList.contains("active")){
                        newEle.dataset.tip = newEle.value;
                    }
                    tip()
                }
                tip()
            }
            tips.forEach(ele=>{
                console.log(ele)
                ele.classList.remove("active")
                customTip.classList.remove("active")
            })
            el.classList.add("active")
        }
        tip()
    }
});
resetBtn.onclick = ()=>{
    if(resetBtn.classList.contains("active")){
        window.location.reload();
    }
}
BillInput.oninput = ()=>{
    checker()
    tip()
}
peopleInput.oninput = ()=>{
    tip()
    checker()
}
// Functions
function tip(){
    let activeTip = document.querySelector(".tips .tip.active")
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
function checker() {
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
        resetBtn.classList.add("active")
    }else{
        resetBtn.classList.remove("active")
    }
}
//