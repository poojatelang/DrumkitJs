const drums = document.querySelectorAll(".drum");

drums.forEach(element => {
    element.addEventListener("click", (e) => {
        let buttoninnerHtml = e.currentTarget.innerHTML;
        makeSound(buttoninnerHtml);
        buttonAnimation(buttoninnerHtml)
    })

});

document.addEventListener("keypress", (event) => {
    makeSound(event.key);
    buttonAnimation(event.key);

});


function makeSound(key) {
    switch (key) {
        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        default: console.log(key);
    }
}


const buttonAnimation=(key)=>{
   let activekey=document.querySelector("."+key);
   activekey.classList.add("pressed");
   setTimeout(()=>{
    activekey.classList.remove("pressed");
   },100)
}