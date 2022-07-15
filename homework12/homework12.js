const button = document.querySelectorAll(".button");
const container = document.querySelector(".allButton");

function music(id) {
    let searchAudio = document.getElementById(id);
    let audios = document.getElementsByTagName('audio');
    for (let i = 0; i < audios.length; i++) {
        audios[i] = searchAudio.target ? audios[i].load() : 0;
    }
    searchAudio.currentTime = 0;
    searchAudio.play();
}

container.addEventListener("click", function (event) {
    let div = event.target.closest(".button");
    changeSoundAndStyle(div); 
});

function clear() {
    button.forEach((el) => {
        el.classList.remove("playKey");
    })
}


function changeSoundAndStyle(params){
    clear();
    if(!params) return;
    numId = parseInt(params.id) + 1;
    params.classList.add("playKey");
    music(numId);

}

document.addEventListener("keydown", function (event) {
    let getCodeButton = event.code;


switch (getCodeButton) {
    case "KeyU":
        let getIdDivU = document.getElementById("10") 
        changeSoundAndStyle(getIdDivU);
        break;
    case "KeyK":
        let getIdDivK = document.getElementById("20") 
        changeSoundAndStyle(getIdDivK);
        break;
    case "KeyR":
        let getIdDivR = document.getElementById("30") 
        changeSoundAndStyle(getIdDivR);
        break;
    case "KeyA":
        let getIdDivA = document.getElementById("40") 
        changeSoundAndStyle(getIdDivA);
        break;
    case "KeyI":
        let getIdDivI = document.getElementById("50") 
        changeSoundAndStyle(getIdDivI);
        break;
    case "KeyN":
        let getIdDivN = document.getElementById("60") 
        changeSoundAndStyle(getIdDivN);
        break;
    case "KeyE":
        let getIdDivE = document.getElementById("70") 
        changeSoundAndStyle(getIdDivE);
        break;
            
    
}
});