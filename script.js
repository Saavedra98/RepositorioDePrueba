const $tiempo = document.querySelector('.tiempo');

function digitalClock(){
    let rejoj = new Date(),
    dia = rejoj.getDate(),
    mes = rejoj.getMonth(),
    anio = rejoj.getFullYear(),
    diaSemana = rejoj.getDay();


    let timeString = rejoj.toLocaleTimeString();
    $tiempo.innerHTML = timeString;

}
setInterval(() => {
    digitalClock()
}, 1000);