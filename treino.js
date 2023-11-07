const name = ["Mayara"];
let event;
let time;

function getEventoAleatorio() {
    var num = Math.floor(Math.random() * 3);

    if (num === 0) {
        event = "Modalidade: Maratona";
    } else if (num === 1) {
        event = "Modalidade: Triathlon";
    } else if (num === 2) {
        event = "Modalidade: Pentathlon";
    }

    return event;
}

function getDiasTreino(evento) {
    evento = event;

    if (evento === "Modalidade: Maratona") {
        time = 50;
    } else if (evento === "Modalidade: Triathlon") {
        time = 100;
    } else if (evento === "Modalidade: Pentathlon") {
        time = 200;
    }

    return time;
}

function logEvento(nome, evento) {
    console.log(`${nome} irá participar do ${evento}!`);
}

function logTempo (nome, time) {
    console.log(`${nome} poderá treinar durante ${time} dias!`);
}

getEventoAleatorio();
getDiasTreino();
logEvento(name, event);
logTempo(name, time);