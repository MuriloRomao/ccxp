const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')


const lancamento = "09 mar 2023"

function countDown(){
    const dataLance = new Date(lancamento)
    const hoje = new Date()
    
    const segTotal = (dataLance - hoje)/1000;

    const finalDias = Math.floor(segTotal/60/60/24);
    const finalHoras = Math.floor(segTotal/60/60)%24;
    const finalMinutos = Math.floor(segTotal/60)%60;
    const finalSegundos = Math.floor(segTotal)%60;

    dia.innerHTML = finalDias +'D'
    hora.innerHTML = formataTempo(finalHoras) + 'H'
    minuto.innerHTML = formataTempo(finalMinutos) + 'M'
    segundo.innerHTML = formataTempo(finalSegundos) + 'S'
}

function formataTempo(tempo){
    return tempo < 10?  `0${tempo}` : tempo;
}


setInterval(countDown, 1000);