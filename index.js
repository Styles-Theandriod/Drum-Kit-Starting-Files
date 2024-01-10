let drumItems = document.querySelectorAll('.drum')

let sounds = [
     './sounds/tom-1.mp3',  
     './sounds/tom-2.mp3',  
     './sounds/tom-3.mp3',  
     './sounds/tom-4.mp3',  
     './sounds/snare.mp3',  
     './sounds/crash.mp3',  
     './sounds/kick-bass.mp3',  
]


// console.log(drumItems)

// function playSounds(){
// //    let wsound = new Audio()
// //    wsound.play(sounds[0].sound1)

//    sounds.forEach(element => {
//     let wsound = new Audio(element)
//     wsound.src = element
//     wsound.play(element)
//    });
// }
let letters =["w",'a', "s",'d','j','k', 'l']

for (let i = 0; i < drumItems.length; i++) {
   drumItems[i].addEventListener('click', (e)=>{
       let wsoound = new Audio(sounds[i])
       wsoound.play();
   }) 
}


   document.addEventListener('keypress', (e)=>{
        let keypressed = e.key.toLowerCase()


        if(keypressed === "w"){
            playSound(0)
        }else if(keypressed === "a"){
            playSound(1)
        }else if(keypressed === "s"){
            playSound(2)
        }else if(keypressed === "d"){
            playSound(3)
        }else if(keypressed === "j"){
            playSound(4)
        }else if(keypressed === "k"){
            playSound(5)
        }else if(keypressed === "l"){
            playSound(5)
        }
    
    })
function playSound(i){
    let wsoound = new Audio(sounds[i])
    wsoound.play();
}



















