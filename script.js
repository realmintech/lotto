let lotto =  document.getElementById('lotto')
let display = document.getElementById("display")

let generated = document.getElementById('generated')
let result = document.getElementById('result')
let error = document.getElementById('error')
form1 = document.getElementById('lotto')



form1.addEventListener('submit', (e) => {
    e.preventDefault();
    guessInput =[]
    guessInput[0] = document.getElementById("text1").value
    guessInput[1] = document.getElementById("text2").value
    guessInput[2] = document.getElementById('text3').value
    display.innerHTML = guessInput;
    const randNums=[];
    for(let i=0; i<6; i++){
    let randNum= Math.floor(Math.random() *10)
        randNums[i] = randNum
        generated.style.color ="black"
        generated.style.fontSize ="20px"
        document.getElementById('generated').innerHTML = randNums ;    
    } 
        const correctscore =[];
        let sn=0
        for(let m =0; m < guessInput.length; m++){  
        if(randNums.includes(parseInt(guessInput[m]))){
          correctscore[sn] = guessInput[m];
          sn++
        }
        }
    if(guessInput == ",," || guessInput == 0){
        display.innerHTML = "Input your digit"
        display.style.color ="navy"
        display.style.fontSize ="20px"
    }
    if(guessInput.length == 3 && correctscore.length == 3){
        result.innerHTML = "Hurray! you win."
        result.style.color ="green"
        result.style.fontSize ="30px"
    }else{
    result.innerHTML = "Sorry, you loose"
    result.style.color ="red"
    result.style.fontSize ="30px"
    }
    if(guessInput.length == 2){
    if(correctscore.length != 2){
        result.innerHTML = "Sorry, you loose"
        result.style.color = "red"
        result.style.fontSize = "30px"
    }
    else{
        result.innerHTML = "Hurray! you win"
        result.style.color = "green"
        result.style.fontSize = "30px"
    }
    }
  if(document.getElementById("text3").value.length >= 3 || document.getElementById("text2").value.length >= 3 || document.getElementById("text1").value.length >=3 ){
     display.innerHTML = "Input should not be more than two digits"
     generated.style.display ="none"
     display.style.color ="navy"
     display.style.fontSize ="20px"
     result.style.display = "none"
    }else{
        error.style.display = "inline-block"
    }
    if(guessInput[0] == ""){
        error.style.display = "none"
    }else{
        error.style.display = "inline-block"
    } 
})


    
  



   

