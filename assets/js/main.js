const input_day = document.querySelector("#day")
const input_hour = document.querySelector("#hour")
const input_min = document.querySelector("#min")
const input_sec = document.querySelector("#sec")


// Regras da Contagem

function contagem(){

    if( input_sec.value > 0){
        input_sec.value-- } 

    else if( input_min.value > 0 && input_sec.value == 0){
        input_min.value--;
        input_sec.value = 59; }

    else if( input_hour.value > 0 && input_min.value == 0){
        input_hour.value--;
        input_min.value = 60; }

    else if( input_day.value > 0 && input_hour.value == 0){
        input_day.value--;
        input_hour.value = 24; } 
    
    else if(input_sec.value == 0){

        clearInterval(interval)

        document.querySelector("#sound").play()
        document.querySelector("#pause").classList.remove("show")
        document.querySelector("#start").classList.remove("hide")
        
        input_day.value = "";
        input_hour.value = "";
        input_min.value = "";
        input_sec.value = ""; }   

    else {
        input_day.value = "";
        input_hour.value = "";
        input_min.value = "";
        input_sec.value = "";
        clearInterval(interval); }

    return;
    
}

// Contagem

function startInterval(){ 
    interval = setInterval(()=>{
    contagem()
}, 1000)}


// Botões

const start = document.querySelector("#start")
const pause = document.querySelector("#pause")
const reset = document.querySelector("#reset")

start.addEventListener("click", startCoutDown)
pause.addEventListener("click", stopCountdown)
reset.addEventListener("click", resetCountdown)

function startCoutDown(){
    startInterval() 
    document.querySelector("#pause").classList.add("show")
    document.querySelector("#start").classList.add("hide")
}

function stopCountdown(){
    clearInterval(interval)
    document.querySelector("#pause").classList.remove("show")
    document.querySelector("#start").classList.remove("hide")
}

function resetCountdown(){

    alert("Contagem Resetada")
    input_day.value = ""
    input_hour.value = ""
    input_min.value = ""
    input_sec.value = ""
    document.querySelector("#pause").classList.remove("show")
    document.querySelector("#start").classList.remove("hide")
    clearInterval(interval)

}

// Comandos do teclado

document.addEventListener("keypress", (e)=>{

    if(e.key === "i"){
        startCoutDown()
        console.log("Running Countdown Timer")
    }
})

document.addEventListener("keypress", (e)=>{
    
    if(e.key === "p"){
        stopCountdown()
        console.log("STOP")
    }
})

document.addEventListener("keypress", (e)=>{
    
    if(e.key === "r"){
        resetCountdown()
        console.log('RESET')
    }
})



