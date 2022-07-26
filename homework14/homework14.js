const btnGetInfo = document.getElementById("btnGetInfo")
const btnGetPlanet = document.getElementById("btnGetPlanet")
const btnPrevious = document.getElementById("btnPrevious")
const btnNext = document.getElementById("btnNext")
const mainDivInfo = document.querySelector(".mainDivInfo")
const getPartFilm = document.getElementById('getPart')
const loader = document.getElementById('loader')
let baseURL = 'https://swapi.dev/api/planets/?page=1'
const baseUrlFilm = 'https://swapi.dev/api/films/'
const peopleURL = 'https://swapi.dev/api/people/'

async function getPerson(url) {
    const rej = await fetch(url)
    const res = await rej.json()
   // const arrCharacter = [res.name, res.birth_year, res.gender]
    return res;
}

function addloader () {
    loader.classList.remove("dis")
    loader.classList.add("loader");
}

function removeLoader() {
    loader.classList.remove("loader");
    loader.classList.add("dis")
}

async function partFilm () {
    mainDivInfo.innerHTML = ''
    const part = getPartFilm.value;
    if ((part<1) || (part>6)) return alert('Please enter 1 to 6'); removeLoader()  
    addloader()
    const rej = await fetch(`${baseUrlFilm}${part}/`)
    const res = await rej.json()
    let arrPeople = res.characters;
    let personInfo = ''
    let arr = [];
    arrPeople.forEach((el) => {
       getPerson(el).then((el) =>
       { arr = [el.name, el.birth_year, el.gender];
       personInfo += `<div class="divWithPerson"> <p class='infoPlanet'> Name: <br> <span class = 'namePlanet'> ${arr[0]} </span></p> 
       <p class='infoPlanet'> Birth year: <br> <span class = 'namePlanet'> ${arr[1]} </span></p> 
       <p class='infoPlanet'> Gender: <br> <span class = 'namePlanet'> ${arr[2]} </span></p> </div>`
      
    mainDivInfo.innerHTML = personInfo; 
    getPartFilm.value = ''
    removeLoader()
} )})}

async function nextPlanet() {
    const rej = await fetch(baseURL);  
    const res = await rej.json();
    if (!res.next) return
    baseURL =  res.next
    getPlanet()
}


async function previousPlanet() {
    const rej = await fetch(baseURL);  
    const res = await rej.json();
    if (!res.previous) return 
    baseURL =  res.previous
    getPlanet()
} 

async function getPlanet() {
    addloader()
    mainDivInfo.innerHTML = ''
    let planetInfo = ''
    const rej = await fetch(baseURL);  
    const res = await rej.json();
    let planetsArr = res.results;
    planetsArr.forEach((namePlanet) => {
        planetInfo += `<div class="divWithPlanet"> <p class='infoPlanet'> Planet: <br> <span class = 'namePlanet'> ${namePlanet.name} </span></p> </div>`
    });
    mainDivInfo.innerHTML = planetInfo;
    removeLoader()
}

async function getFirstPlanet() {
    baseURL = 'https://swapi.dev/api/planets/?page=1';
    getPlanet()
}


btnGetPlanet.addEventListener('click', getFirstPlanet)
btnNext.addEventListener('click', nextPlanet)
btnPrevious.addEventListener('click', previousPlanet)
btnGetInfo.addEventListener('click', partFilm)