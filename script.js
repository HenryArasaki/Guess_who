const bonecos = document.getElementsByClassName('boneco')
const boneco = document.getElementById('sortear')
const imagem = document.getElementById('sortear-img')

Array.from(bonecos).forEach(element => {
    element.addEventListener("click",()=>{
        element.classList.toggle("escuro")
    })
});

function restart(){
    Array.from(bonecos).forEach(element=>{
        element.classList.remove("escuro")
    })
    let numeroAleatorio = randomNumber(0,listaDeBonecos.length-1)
    boneco.innerText=listaDeBonecos[numeroAleatorio]
    imagem.style.visibility='visible'
    imagem.src="imagens/"+listaDeBonecos[numeroAleatorio]+".webp"
}

const listaDeBonecos=["Akshan", "Aphelios", "Ashe", "Caitlyn", "Corki", "Draven", "Ezreal", "Graves", "Jhin", "Jinx", "Kai'Sa","Kalista","Kindred","Kog'Maw","Lucian","Miss Fortune", "Quinn","Senna","Sivir","Tristana","Twitch","Varus","Vayne","Xayah"]

function randomNumber(min, max) { 
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 