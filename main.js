function createGame (time1, hora, time2) {
    return `
        <li>
            <div id="timeum">
                <img src="./assets/icon-${time1}.svg" alt="Bandeira ${time1}">
                <p>${time1}</p>
            </div>
            <strong>${hora}</strong>
            <div id="timedois">
                <img src="./assets/icon-${time2}.svg" alt="Bandeira ${time2}">
                <p>${time2}</p>
            </div>
        </li>
    `
}

let delay = -0.3
function createCard (data, dia, games) {
    delay += 0.3
    return `
        <div class="card" style ="animation-delay: ${delay}s">
            <h2>${data}<span>${dia}</span></h2>

            <ul>
                ${games}
            </ul>
        </div>
    `
}



document.querySelector("#cards").innerHTML = 
    createCard("20/11", "Domingo", createGame("catar", "13:00", "equador")) +
    createCard("21/11","segunda", createGame("inglaterra","10:00","ira") + createGame("senegal","13:00","holanda") + createGame("usa","16:00","gales")) +
    createCard("22/11", "terça", createGame("argentina", "07:00", "arabiasaudita") + createGame("dinamarca", "10:00", "tunisia") + createGame("mexico", "13:00", "polonia") + createGame("franca", "16:00", "australia")) +
    createCard("24/11", "quinta", createGame("suica", "07:00", "camaroes") + createGame("uruguai", "10:00", "coreiadosul") + createGame("portugal", "13:00", "gana") + createGame("brasil", "16:00", "servia")) +
    createCard("28/11", "segunda", createGame("camaroes", "07:00", "servia") + createGame("coreiadosul", "10:00", "gana") + createGame('brasil', '13:00', 'suica') + createGame("portugal", "16:00", "uruguai")) +
    createCard("02/12", "sexta", createGame("coreiadosul","12:00", "portugal") + createGame("gana", "12:00", "uruguai") + createGame("brasil", "16:00", "camaroes") + createGame("servia", "16:00", "suica"))
