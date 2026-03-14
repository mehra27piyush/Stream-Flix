if(localStorage.getItem("login")!=="true"){
window.location="login.html"
}

function logout(){
localStorage.removeItem("login")
window.location="login.html"
}

const movies=[


{title:"Interstellar",poster:"https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",trailer:"https://www.youtube.com/embed/zSWdZVtXT7E",cat:"trending"},
{title:"Avatar",poster:"https://image.tmdb.org/t/p/w500/6EiRUJpuoeQPghrs3YNktfnqOVh.jpg",trailer:"https://www.youtube.com/embed/5PSNL1qE6VY",cat:"trending"},
{title:"Dune",poster:"https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",trailer:"https://www.youtube.com/embed/n9xhJrPXop4",cat:"trending"},
{title:"Tenet",poster:"https://image.tmdb.org/t/p/w500/k68nPLbIST6NP96JmTxmZijEvCA.jpg",trailer:"https://www.youtube.com/embed/L3pk_TBkihU",cat:"trending"},

{title:"Joker",poster:"https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",trailer:"https://www.youtube.com/embed/zAGVQLHvwOY",cat:"popular"},
{title:"Titanic",poster:"https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",trailer:"https://www.youtube.com/embed/kVrqfYjkTdQ",cat:"popular"},
{title:"Avengers",poster:"https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",trailer:"https://www.youtube.com/embed/TcMBFSGVi1c",cat:"popular"},
{title:"Spider-Man",poster:"https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",trailer:"https://www.youtube.com/embed/JfVOs4VSpmA",cat:"popular"},
{title:"Black Panther",poster:"https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",trailer:"https://www.youtube.com/embed/xjDjIWPwcPU",cat:"popular"}

]

const trending=document.getElementById("trending")
const popular=document.getElementById("popular")

function createCard(movie){

const card=document.createElement("div")
card.className="card"

card.innerHTML=`<img src="${movie.poster}"><p>${movie.title}</p>`

card.onclick=()=>openTrailer(movie.trailer)

return card
}

movies.forEach(m=>{

if(m.cat==="trending") trending.appendChild(createCard(m))
if(m.cat==="popular") popular.appendChild(createCard(m))

})

function scrollRow(id,amount){
document.getElementById(id).scrollLeft+=amount
}

const modal=document.getElementById("trailerModal")
const frame=document.getElementById("trailerFrame")

function openTrailer(link){

modal.style.display="flex"
frame.src=link

}

function closeTrailer(){

modal.style.display="none"
frame.src=""

}

const search=document.getElementById("search")

search.addEventListener("keyup",()=>{

let value=search.value.toLowerCase()

document.querySelectorAll(".card").forEach(card=>{

let title=card.innerText.toLowerCase()

card.style.display=title.includes(value)?"block":"none"

})

})