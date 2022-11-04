function createGame (time1, hora, time2) {
    return `
        <li>
            <img src="./assets/icon-${time1}.svg" alt="Bandeira ${time1}">
            <strong>${hora}</strong>
            <img src="./assets/icon-${time2}.svg" alt="Bandeira ${time2}">
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
    createCard("24/11", "quinta", createGame("suica", "07:00", "camaroes") + createGame("uruguai", "10:00", "coreiadosul") + createGame("portugal", "13:00", "gana") + createGame("brasil", "16:00", "servia")) +
    createCard("28/11", "segunda", createGame("camaroes", "07:00", "servia") + createGame("coreiadosul", "10:00", "gana") + createGame('brasil', '13:00', 'suica') + createGame("portugal", "16:00", "uruguai")) +
    createCard("02/12", "sexta", createGame("coreiadosul","12:00", "portugal") + createGame("gana", "12:00", "uruguai") + createGame("brasil", "16:00", "camaroes") + createGame("servia", "16:00", "suica"))
