const movies=[

{title:"Interstellar",year:2014,lang:"English",genre:"Sci-Fi",imdb:8.6,poster:"images/interstellar.webp",desc:"A team travels through a wormhole.",trailer:"https://www.youtube.com/embed/zSWdZVtXT7E",ratings:[],page:1},

{title:"Inception",year:2010,lang:"English",genre:"Sci-Fi",imdb:8.8,poster:"images/inception.webp",desc:"Dream infiltration story.",trailer:"https://www.youtube.com/embed/YoHD9XEInc0",ratings:[],page:1},

{title:"The Dark Knight",year:2008,lang:"English",genre:"Action",imdb:9.0,poster:"images/darknight.webp",desc:"Batman battles Joker.",trailer:"https://www.youtube.com/embed/EXeTwQWrcwY",ratings:[],page:1},

{title:"Oppenheimer",year:2023,lang:"English",genre:"Drama",imdb:8.5,poster:"images/Oppenheimer.webp",desc:"Story of atomic bomb creator.",trailer:"https://www.youtube.com/embed/uYPbbksJxIg",ratings:[],page:1},

{title:"Spider-Man No Way Home",year:2021,lang:"English",genre:"Action",imdb:8.2,poster:"images/spyderman.webp",desc:"Multiverse chaos begins.",trailer:"https://www.youtube.com/embed/JfVOs4VSpmA",ratings:[],page:1},

{title:"Top Gun Maverick",year:2022,lang:"English",genre:"Action",imdb:8.3,poster:"images/gun.webp",desc:"Pilot returns to train recruits.",trailer:"https://www.youtube.com/embed/giXco2jaZ_4",ratings:[],page:1},

{title:"Avatar The Way of Water",year:2022,lang:"English",genre:"Sci-Fi",imdb:7.6,poster:"images/avatar.webp",desc:"Return to Pandora with new adventures.",trailer:"https://www.youtube.com/embed/d9MyW72ELq0",ratings:[],page:1},

{title:"Titanic",year:1997,lang:"English",genre:"Romance/Drama",imdb:7.9,poster:"images/titanic.webp",desc:"A romance unfolds aboard the ill-fated Titanic.",trailer:"https://www.youtube.com/embed/kVrqfYjkTdQ",ratings:[],page:1},

{title:"Doctor Strange Multiverse",year:2022,lang:"English",genre:"Action",imdb:6.9,poster:"images/doctor.webp",desc:"Doctor Strange opens the multiverse.",trailer:"https://www.youtube.com/embed/aWzlQ2N6qqg",ratings:[],page:1},

{title:"John Wick Chapter 4",year:2023,lang:"English",genre:"Action",imdb:8.2,poster:"images/John Wick Chapter 4.webp",desc:"John Wick fights global assassins.",trailer:"https://www.youtube.com/embed/qEVUtrk8_B4",ratings:[],page:1},

{title:"3 Idiots",year:2009,lang:"Hindi",genre:"Comedy",imdb:8.4,poster:"images/3 idiot.webp",desc:"College life and friendship.",trailer:"https://www.youtube.com/embed/xvszmNXdM4w",ratings:[],page:2},

{title:"Dangal",year:2016,lang:"Hindi",genre:"Sports",imdb:8.3,poster:"images/dangal.webp",desc:"Wrestling champions.",trailer:"https://www.youtube.com/embed/x_7YlGv9u1g",ratings:[],page:2},

{title:"Pathaan",year:2023,lang:"Hindi",genre:"Action",imdb:6.7,poster:"images/pathaan.webp",desc:"Spy action thriller.",trailer:"https://www.youtube.com/embed/vqu4z34wENw",ratings:[],page:2},

{title:"Jawan",year:2023,lang:"Hindi",genre:"Action",imdb:7.0,poster:"images/jawan.webp",desc:"High action vigilante film.",trailer:"https://www.youtube.com/embed/k8YiqM0Y-78",ratings:[],page:2},

{title:"RRR",year:2022,lang:"Hindi",genre:"Action",imdb:8.0,poster:"images/rrr.webp",desc:"Two revolutionaries fight against empire.",trailer:"https://www.youtube.com/embed/f_vbAtFSEc0",ratings:[],page:2},

{title:"Brahmastra",year:2022,lang:"Hindi",genre:"Fantasy",imdb:5.6,poster:"images/brahmastra.webp",desc:"A hero discovers ancient powers.",trailer:"https://www.youtube.com/embed/BgT8CwG5q8Q",ratings:[],page:2},

{title:"War",year:2019,lang:"Hindi",genre:"Action",imdb:6.5,poster:"images/war.webp",desc:"Two elite soldiers clash.",trailer:"https://www.youtube.com/embed/tQ0mzXRk-oM",ratings:[],page:2},

{title:"Sultan",year:2016,lang:"Hindi",genre:"Sports",imdb:7.0,poster:"images/sultan.webp",desc:"A wrestler's journey to redemption.",trailer:"https://www.youtube.com/embed/wPxqcq6Byq0",ratings:[],page:2},

{title:"Vikram",year:2022,lang:"Tamil",genre:"Action",imdb:8.3,poster:"images/vikram.webp",desc:"An agent uncovers a deadly crime syndicate while investigating a series of murders.",trailer:"https://www.youtube.com/embed/OKBMCL-frPU",ratings:[],page:3},

{title:"Kaithi",year:2019,lang:"Tamil",genre:"Action",imdb:8.5,poster:"images/kaithi.webp",desc:"Night mission thriller.",trailer:"https://www.youtube.com/embed/OKBMCL-frPU",ratings:[],page:3},

{title:"Bigil",year:2019,lang:"Tamil",genre:"Sports/Action",imdb:6.7,poster:"images/bigil.webp",desc:"A former football player coaches a women's team to victory.",trailer:"https://www.youtube.com/embed/G62HrubdD6o",ratings:[],page:3},


{title:"Jailer",year:2023,lang:"Tamil",genre:"Action",imdb:7.2,poster:"images/jailer.webp",desc:"Retired jailer hunts criminals.",trailer:"https://www.youtube.com/embed/Y5BeWdODPqo",ratings:[],page:3},

{title:"Ponniyin Selvan",year:2022,lang:"Tamil",genre:"Historical",imdb:7.6,poster:"images/Ponniyin Selvan.webp",desc:"Epic Chola dynasty saga.",trailer:"https://www.youtube.com/embed/D4qAQYlgZQs",ratings:[],page:3},

{title:"KGF Chapter 1",year:2018,lang:"Kannada",genre:"Action",imdb:8.2,poster:"images/kgf1.webp",desc:"A poor boy rises to power in the Kolar Gold Fields.",trailer:"https://www.youtube.com/embed/-KfsY-qwBS0",ratings:[],page:3}
]

let currentPage=1

function displayMovies(){

const grid=document.getElementById("movieGrid")
const notFound=document.getElementById("notFound")

grid.innerHTML=""

let filtered=movies.filter(m=>m.page==currentPage)

filtered.forEach((movie,index)=>{

let avg=average(movie.ratings)

let card=document.createElement("div")

card.className="movie-card"

card.innerHTML=`

<img src="${movie.poster}">

<div class="movie-info">

<div class="movie-title">${movie.title}</div>

<div class="movie-meta">${movie.genre} | ${movie.year} | ${movie.lang}</div>

<div class="movie-desc">${movie.desc}</div>

<div class="rating">IMDb ⭐ ${movie.imdb}</div>

<div class="rating">User Rating: ${avg}</div>

<div class="stars">

<span class="star" onclick="rate(${index},1)">★</span>
<span class="star" onclick="rate(${index},2)">★</span>
<span class="star" onclick="rate(${index},3)">★</span>
<span class="star" onclick="rate(${index},4)">★</span>
<span class="star" onclick="rate(${index},5)">★</span>

</div>

<button class="trailer-btn" onclick="openTrailer('${movie.trailer}')">
Watch Trailer
</button>

</div>
`

grid.appendChild(card)

})

notFound.style.display="none"

}

function rate(index,value){

let filtered=movies.filter(m=>m.page==currentPage)

filtered[index].ratings.push(value)

displayMovies()

}

function average(arr){

if(arr.length==0) return "No ratings"

let sum=arr.reduce((a,b)=>a+b)

return (sum/arr.length).toFixed(1)

}

function changePage(page){

currentPage=page

displayMovies()

}

function openTrailer(url){

document.getElementById("trailerModal").style.display="flex"

document.getElementById("trailerFrame").src=url

}

function closeTrailer(){

document.getElementById("trailerModal").style.display="none"

document.getElementById("trailerFrame").src=""

}

document.getElementById("search").addEventListener("keyup",function(){

let val=this.value.toLowerCase()

const grid=document.getElementById("movieGrid")
const notFound=document.getElementById("notFound")

grid.innerHTML=""

let results=movies.filter(m=>m.title.toLowerCase().includes(val))

if(results.length===0){

notFound.style.display="block"
return

}

notFound.style.display="none"

results.forEach(movie=>{

grid.innerHTML+=`

<div class="movie-card">

<img src="${movie.poster}">

<div class="movie-info">

<div class="movie-title">${movie.title}</div>

<div class="movie-meta">${movie.genre} | ${movie.year} | ${movie.lang}</div>

<div class="movie-desc">${movie.desc}</div>

<div class="rating">IMDb ⭐ ${movie.imdb}</div>

<button class="trailer-btn" onclick="openTrailer('${movie.trailer}')">
Watch Trailer
</button>

</div>

</div>

`

})

})

displayMovies()