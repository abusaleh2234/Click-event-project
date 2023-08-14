const subhanAllahDisplay = document.getElementById('subhanAllahDisplay')
const subhanAllahIncrimentBtn = document.getElementById('subhanAllahIncriment')
const subhanAllahDecrimentBtn = document.getElementById('subhanAllahDecriment')

const alhamdulilalahDisplay = document.getElementById('alhamdulilalahDisplay')
const alhamdulilalahIncrimentBtn = document.getElementById('alhamdulilalahIncriment')
const alhamdulilalahDecrimentBtn = document.getElementById('alhamdulilalahDecriment')

const allahukberDisplay = document.getElementById('allahukberDisplay')
const allahukberIncrimentBtn = document.getElementById('allahukberIncriment')
const allahukberDecrimentBtn = document.getElementById('allahukberDecriment')

const resetBtn = document.getElementById('resetbtn')

let subhanAllahInitialvalue = 0;
let alhamdulilalahInitialvalue = 0;
let allahukberInitialvalue = 0;

subhanAllahIncrimentBtn.addEventListener('click',function(){
     
    if (subhanAllahInitialvalue === 33){
        return alert ("Subhanallah complete. please fillup another one")
    }
    subhanAllahInitialvalue += 1
    subhanAllahDisplay.innerText = subhanAllahInitialvalue
})

subhanAllahDecrimentBtn.addEventListener('click',function(){

        if (subhanAllahInitialvalue === 0){
            return alert("You can't add nagative value")
        }
    subhanAllahInitialvalue -= 1
    subhanAllahDisplay.innerText = subhanAllahInitialvalue
})

// ==============
alhamdulilalahIncrimentBtn.addEventListener('click',function(){
     
    if (alhamdulilalahInitialvalue === 33){
        return alert ("Alhamdulilalah complete. please fillup another one")
    }
    alhamdulilalahInitialvalue += 1
    alhamdulilalahDisplay.innerText = alhamdulilalahInitialvalue
})

alhamdulilalahDecrimentBtn.addEventListener('click',function(){

        if (alhamdulilalahInitialvalue === 0){
            return alert("You can't add nagative value")
        }
        alhamdulilalahInitialvalue -= 1
    alhamdulilalahDisplay.innerText = alhamdulilalahInitialvalue
})


allahukberIncrimentBtn.addEventListener('click',function(){
     
    if (allahukberInitialvalue === 34){
        return alert ("Allahukber complete. please fillup another one")
    }
    allahukberInitialvalue += 1
    allahukberDisplay.innerText = allahukberInitialvalue
})

allahukberDecrimentBtn.addEventListener('click',function(){

        if (allahukberInitialvalue === 0){
            return alert("You can't add nagative value")
        }
    allahukberInitialvalue -= 1
    allahukberDisplay.innerText = allahukberInitialvalue
})


// ==========reset

resetBtn.addEventListener('click',function(){
    subhanAllahDisplay.innerText = 0;
    alhamdulilalahDisplay.innerText = 0;
    allahukberDisplay.innerText = 0;

    subhanAllahInitialvalue = 0;
    alhamdulilalahInitialvalue = 0;
    allahukberInitialvalue = 0;
})



