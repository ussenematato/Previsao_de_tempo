

const key = "be8402367129e0aafde458f2de28adec"

function colocarDadosNaTela(dados){
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temperatura").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = dados.main.humidity + "%"
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

    // console.log(dados)
}

async function buscarCidade(cidade){
    
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt&units=metric`).then(resposta =>resposta.json())
    
    colocarDadosNaTela(dados)
}

function BotaoPesquisar() {
    const cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}