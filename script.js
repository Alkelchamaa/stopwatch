let startBtn=document.getElementById('start')
let stopBtn=document.getElementById('stop')
let resetBtn=document.getElementById('reset')
let hours_span=document.getElementById('hours')
let min_span=document.getElementById('min')
let seconds_span=document.getElementById('seconds')
let tens_span=document.getElementById('tens')
let hours=0
let min=0
let seconds=0
let tens=0
let interval;
startBtn.addEventListener('click',()=>{
interval = setInterval(myStopWatch,10)
startBtn.disabled = true;
})
stopBtn.addEventListener('click',()=>{
    clearInterval(interval)
    startBtn.disabled = false;

})
resetBtn.addEventListener('click',()=>{
    seconds=0
    tens=0
    min=0
    hours=0
    clearInterval(interval)
    seconds_span.innerHTML='00'
    tens_span.innerHTML='00'
    min_span.innerHTML='00'
    hours_span.innerHTML='00'
    startBtn.disabled = false;

})
function myStopWatch(){
    tens++
    if (tens<=9){
        tens_span.innerHTML='0'+tens
    }
    if (tens>9){
        tens_span.innerHTML=tens
    }
    if (tens>99){
        seconds+=1
        tens=0
        tens_span.innerHTML='00'
    }
    if (seconds<=9){
        seconds_span.innerHTML='0'+seconds
    }
    if (seconds>9){
        seconds_span.innerHTML=seconds
    }
    if (seconds===60){
        min+=1
        seconds=0
        seconds_span.innerHTML='00'
        tens=0
        tens_span.innerHTML='00'
    }
    if (min<=9){
        min_span.innerHTML='0'+min
    }
    if (min>9){
        min_span.innerHTML=min
    }
    if (min===60){
        hours=+1
        min=0
        min_span.innerHTML='00'
        seconds=0
        seconds_span.innerHTML='00'
        tens=0
        tens_span.innerHTML='00'
    }
    if (hours<=9){
        hours_span.innerHTML='0'+hours
    }
    if (hours>9){
        hours_span.innerHTML=hours
    }
}
